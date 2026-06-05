"use client";

import { useRef, useEffect } from "react";
import { DEPARTMENTS, type Department } from "@/lib/candidat-libre-cities";

const SPEED = 0.55; // px par frame (~33px/s à 60fps)

export default function CitiesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!paused.current) {
        el.scrollLeft += SPEED;
        // Boucle seamless : reset au milieu (contenu dupliqué)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const suspend = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const scheduleResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, 1800);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    paused.current = true;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragStartScroll.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = dragStartScroll.current - (x - dragStartX.current);
  };

  const onMouseUp = () => {
    isDragging.current = false;
    scheduleResume();
  };

  return (
    <div
      ref={trackRef}
      onMouseEnter={suspend}
      onMouseLeave={() => { isDragging.current = false; scheduleResume(); }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={suspend}
      onTouchEnd={scheduleResume}
      className="flex gap-4 overflow-x-scroll hide-scrollbar select-none cursor-grab active:cursor-grabbing"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
    >
      {DEPARTMENTS.map((dept) => (
        <DeptCard key={dept.code} dept={dept} />
      ))}
      {DEPARTMENTS.map((dept) => (
        <DeptCard key={`loop-${dept.code}`} dept={dept} aria-hidden={true} />
      ))}
    </div>
  );
}

function DeptCard({ dept, "aria-hidden": ariaHidden }: { dept: Department; "aria-hidden"?: boolean }) {
  const preview = dept.cities.slice(0, 4);
  const extra = dept.cities.length - preview.length;

  return (
    <div
      aria-hidden={ariaHidden}
      className="w-52 shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-3.5"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center justify-center rounded-md bg-blue-950 text-white text-xs font-bold px-2 py-0.5 min-w-[2rem]">
          {dept.code}
        </span>
        <span className="text-sm font-semibold text-slate-800 truncate">{dept.name}</span>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
        {preview.join(", ")}
        {extra > 0 && <span className="text-slate-400"> +{extra}</span>}
      </p>
    </div>
  );
}
