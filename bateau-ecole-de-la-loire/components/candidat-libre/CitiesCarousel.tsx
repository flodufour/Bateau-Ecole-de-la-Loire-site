"use client";

import { useRef, useEffect, useState } from "react";
import { DEPARTMENTS, type Department } from "@/lib/candidat-libre-cities";

const SPEED = 0.5; // px par frame

export default function CitiesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const [tooltip, setTooltip] = useState<{ dept: Department; rect: DOMRect } | null>(null);

  // Auto-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!paused.current) {
        posRef.current += SPEED;
        const half = el.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;
        el.scrollLeft = posRef.current;
      } else {
        // Sync float position with manual scroll
        posRef.current = el.scrollLeft;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Close tooltip on page scroll
  useEffect(() => {
    const close = () => setTooltip(null);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, []);

  const suspend = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const scheduleResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => { paused.current = false; }, 2000);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    suspend();
    dragStartX.current = e.pageX;
    dragStartScroll.current = trackRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const newPos = dragStartScroll.current - (e.pageX - dragStartX.current);
    trackRef.current.scrollLeft = newPos;
    posRef.current = newPos;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    scheduleResume();
  };

  const onCardHover = (dept: Department, el: HTMLDivElement) => {
    suspend();
    setTooltip({ dept, rect: el.getBoundingClientRect() });
  };

  const onCardLeave = () => {
    setTooltip(null);
    scheduleResume();
  };

  return (
    <>
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={suspend}
        onTouchEnd={scheduleResume}
        className="flex gap-4 overflow-x-scroll hide-scrollbar cursor-grab active:cursor-grabbing py-2 px-6"
      >
        {[...DEPARTMENTS, ...DEPARTMENTS].map((dept, i) => (
          <DeptCard
            key={`${dept.code}-${i}`}
            dept={dept}
            ariaHidden={i >= DEPARTMENTS.length}
            onHover={onCardHover}
            onLeave={onCardLeave}
          />
        ))}
      </div>

      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none bg-white border border-blue-200 rounded-xl shadow-xl p-4 animate-fade-in-up"
          style={{
            top: tooltip.rect.bottom + 10,
            left: Math.min(tooltip.rect.left, window.innerWidth - 300),
            width: 280,
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <span className="rounded-md bg-blue-950 text-white text-xs font-bold px-2 py-0.5">
              {tooltip.dept.code}
            </span>
            <span className="text-sm font-semibold text-slate-800">{tooltip.dept.name}</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {tooltip.dept.cities.join(" · ")}
          </p>
        </div>
      )}
    </>
  );
}

function DeptCard({
  dept,
  ariaHidden,
  onHover,
  onLeave,
}: {
  dept: Department;
  ariaHidden?: boolean;
  onHover: (dept: Department, el: HTMLDivElement) => void;
  onLeave: () => void;
}) {
  const preview = dept.cities.slice(0, 3);
  const extra = dept.cities.length - preview.length;

  return (
    <div
      aria-hidden={ariaHidden}
      onMouseEnter={(e) => onHover(dept, e.currentTarget)}
      onMouseLeave={onLeave}
      className="w-52 shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-3.5 hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-default"
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
