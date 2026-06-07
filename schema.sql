-- =============================================================
-- Bateau École de la Loire — Database Schema
-- Target: Supabase (PostgreSQL)
-- =============================================================

-- =============================================================
-- EXTENSIONS
-- =============================================================

create extension if not exists "pgcrypto";


-- =============================================================
-- ENUMS
-- =============================================================

create type user_role          as enum ('student', 'instructor', 'admin');
create type permit_type        as enum ('cotier', 'fluvial', 'hauturier');
create type program_mode       as enum ('traditionnel', 'autonomie', 'mixte', 'cadeau');
create type doc_type           as enum ('id_card', 'photo', 'medical_certificate', 'fiscal_stamp', 'application_form', 'other');
create type enrollment_status  as enum ('pending', 'active', 'completed', 'cancelled');
create type payment_status     as enum ('pending', 'paid', 'refunded', 'failed');
create type cart_status        as enum ('active', 'checked_out', 'abandoned');
create type course_type        as enum ('theory', 'practical');
create type reservation_status as enum ('confirmed', 'cancelled', 'no_show');
create type exam_status        as enum ('pending', 'confirmed', 'passed', 'failed');
create type notif_type         as enum (
  'welcome',
  'enrollment_confirmed',
  'document_missing',
  'exam_reminder',
  'exam_result',
  'invoice',
  'password_reset'
);


-- =============================================================
-- UPDATED_AT TRIGGER (shared)
-- =============================================================

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;


-- =============================================================
-- PROFILE
-- Extends Supabase auth.users — one row per user
-- =============================================================

create table profile (
  id           uuid         primary key references auth.users(id) on delete cascade,
  role         user_role    not null default 'student',
  first_name   text         not null,
  last_name    text         not null,
  phone        text,
  genre        text,
  avatar_url   text,
  deleted_at   timestamptz,
  created_at   timestamptz  not null default now(),
  updated_at   timestamptz  not null default now()
);

create trigger trg_profile_updated_at
  before update on profile
  for each row execute function set_updated_at();

alter table profile enable row level security;
-- policy: users can read/update their own row; admin can read all


-- =============================================================
-- DOCUMENT
-- Files uploaded by students (id, medical cert, etc.)
-- =============================================================

create table document (
  id          uuid       primary key default gen_random_uuid(),
  user_id     uuid       not null references profile(id) on delete cascade,
  type        doc_type   not null,
  file_url    text       not null,
  verified    boolean    not null default false,
  note        text,
  created_at  timestamptz not null default now()
);

create index idx_document_user on document(user_id);

alter table document enable row level security;


-- =============================================================
-- PROGRAM
-- The 9 training offers (côtier complet, hauturier, etc.)
-- =============================================================

create table program (
  id           uuid          primary key default gen_random_uuid(),
  title        text          not null,
  description  text,
  permit_type  permit_type   not null,
  mode         program_mode  not null,
  price        numeric(8,2)  not null,
  active       boolean       not null default true,
  deleted_at   timestamptz,
  created_at   timestamptz   not null default now(),
  updated_at   timestamptz   not null default now()
);

create trigger trg_program_updated_at
  before update on program
  for each row execute function set_updated_at();

alter table program enable row level security;
-- policy: everyone can read active programs; only admin can write


-- =============================================================
-- COUPON
-- Discount codes (-10% group, promotions)
-- =============================================================

create table coupon (
  id               uuid         primary key default gen_random_uuid(),
  code             text         not null unique,
  discount_percent int,
  discount_amount  numeric(8,2),
  max_uses         int          not null default 1,
  used_count       int          not null default 0,
  expires_at       timestamptz,
  active           boolean      not null default true,
  created_at       timestamptz  not null default now(),
  constraint coupon_has_value check (
    discount_percent is not null or discount_amount is not null
  )
);

alter table coupon enable row level security;


-- =============================================================
-- GIFT CARD
-- =============================================================

create table gift_card (
  id             uuid         primary key default gen_random_uuid(),
  code           text         not null unique,
  amount         numeric(8,2) not null,
  purchased_by   uuid         references profile(id),
  redeemed_by    uuid         references profile(id),
  redeemed_at    timestamptz,
  expires_at     timestamptz,
  created_at     timestamptz  not null default now()
);

create index idx_gift_card_code on gift_card(code);

alter table gift_card enable row level security;


-- =============================================================
-- CART + CART_ITEM
-- Temporary basket before checkout (localStorage → Supabase on login)
-- =============================================================

create table cart (
  id          uuid        primary key default gen_random_uuid(),
  user_id     uuid        not null references profile(id) on delete cascade,
  status      cart_status not null default 'active',
  coupon_id   uuid        references coupon(id),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger trg_cart_updated_at
  before update on cart
  for each row execute function set_updated_at();

create index idx_cart_user on cart(user_id);

alter table cart enable row level security;

-- ---

create table cart_item (
  id          uuid         primary key default gen_random_uuid(),
  cart_id     uuid         not null references cart(id) on delete cascade,
  program_id  uuid         not null references program(id),
  quantity    int          not null default 1,
  unit_price  numeric(8,2) not null,
  constraint cart_item_unique unique (cart_id, program_id)
);

create index idx_cart_item_cart on cart_item(cart_id);

alter table cart_item enable row level security;


-- =============================================================
-- ENROLLMENT
-- Confirmed registration of a user to a program
-- =============================================================

create table enrollment (
  id          uuid              primary key default gen_random_uuid(),
  user_id     uuid              not null references profile(id),
  program_id  uuid              not null references program(id),
  status        enrollment_status not null default 'pending',
  oedipp_number text,
  deleted_at    timestamptz,
  created_at  timestamptz       not null default now(),
  updated_at  timestamptz       not null default now()
);

create trigger trg_enrollment_updated_at
  before update on enrollment
  for each row execute function set_updated_at();

create index idx_enrollment_user    on enrollment(user_id);
create index idx_enrollment_program on enrollment(program_id);
create index idx_enrollment_status  on enrollment(status);

alter table enrollment enable row level security;


-- =============================================================
-- PAYMENT
-- One payment per enrollment — tied to Stripe
-- =============================================================

create table payment (
  id                 uuid           primary key default gen_random_uuid(),
  enrollment_id      uuid           not null references enrollment(id),
  amount             numeric(8,2)   not null,
  status             payment_status not null default 'pending',
  stripe_intent_id   text           unique,
  paid_at            timestamptz,
  created_at         timestamptz    not null default now()
);

create index idx_payment_enrollment on payment(enrollment_id);
create index idx_payment_status     on payment(status);

alter table payment enable row level security;


-- =============================================================
-- INVOICE
-- PDF receipt generated after successful payment
-- =============================================================

create table invoice (
  id          uuid         primary key default gen_random_uuid(),
  payment_id  uuid         not null references payment(id),
  user_id     uuid         not null references profile(id),
  amount      numeric(8,2) not null,
  pdf_url     text,
  issued_at   timestamptz  not null default now()
);

create index idx_invoice_user on invoice(user_id);

alter table invoice enable row level security;


-- =============================================================
-- AVAILABILITY
-- Instructor time slots (used for booking practical sessions)
-- =============================================================

create table availability (
  id             uuid    primary key default gen_random_uuid(),
  instructor_id  uuid    not null references profile(id),
  date           date    not null,
  start_time     time    not null,
  end_time       time    not null,
  is_booked      boolean not null default false,
  constraint availability_times check (end_time > start_time)
);

create index idx_availability_instructor on availability(instructor_id);
create index idx_availability_date       on availability(date);

alter table availability enable row level security;


-- =============================================================
-- COURSE
-- A practical or theory session (linked to an availability slot)
-- =============================================================

create table course (
  id               uuid        primary key default gen_random_uuid(),
  instructor_id    uuid        not null references profile(id),
  availability_id  uuid        references availability(id),
  type             course_type not null,
  location         text,
  max_students     int         not null default 1,
  created_at       timestamptz not null default now()
);

create index idx_course_instructor on course(instructor_id);

alter table course enable row level security;


-- =============================================================
-- RESERVATION
-- Student booking a course slot
-- =============================================================

create table reservation (
  id             uuid               primary key default gen_random_uuid(),
  course_id      uuid               not null references course(id),
  user_id        uuid               not null references profile(id),
  status         reservation_status not null default 'confirmed',
  cancelled_at   timestamptz,
  cancel_reason  text,
  created_at     timestamptz        not null default now(),
  constraint reservation_unique unique (course_id, user_id)
);

create index idx_reservation_course on reservation(course_id);
create index idx_reservation_user   on reservation(user_id);

alter table reservation enable row level security;


-- =============================================================
-- EXAM REGISTRATION
-- Booking of the official exam (OEDIPP / La Poste center)
-- =============================================================

create table exam_registration (
  id             uuid        primary key default gen_random_uuid(),
  user_id        uuid        not null references profile(id),
  enrollment_id  uuid        references enrollment(id),
  permit_type    permit_type not null,
  center         text,
  exam_date      date,
  status           exam_status not null default 'pending',
  result_note      text,
  convocation_url  text,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create trigger trg_exam_updated_at
  before update on exam_registration
  for each row execute function set_updated_at();

create index idx_exam_user   on exam_registration(user_id);
create index idx_exam_date   on exam_registration(exam_date);
create index idx_exam_status on exam_registration(status);

alter table exam_registration enable row level security;


-- =============================================================
-- NOTIFICATION
-- Email log (sent via Resend)
-- =============================================================

create table notification (
  id         uuid       primary key default gen_random_uuid(),
  user_id    uuid       not null references profile(id),
  type       notif_type not null,
  subject    text,
  resend_id  text,
  status     text,
  sent_at    timestamptz not null default now()
);

create index idx_notification_user on notification(user_id);

alter table notification enable row level security;
