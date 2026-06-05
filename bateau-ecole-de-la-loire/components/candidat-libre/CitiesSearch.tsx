"use client";

import { useState, useMemo } from "react";
import { DEPARTMENTS, type Department } from "@/lib/candidat-libre-cities";

export default function CitiesSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo<Department[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DEPARTMENTS;
    return DEPARTMENTS.filter(
      (dept) =>
        dept.code.startsWith(q) ||
        dept.name.toLowerCase().includes(q) ||
        dept.cities.some((city) => city.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div>
      <div className="mb-8 max-w-md">
        <label htmlFor="city-search" className="block text-sm font-medium text-slate-700 mb-2">
          Rechercher un département ou une ville
        </label>
        <div className="relative">
          <SearchIcon />
          <input
            id="city-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex : Nantes, Lyon, 44…"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        {query && (
          <p className="text-xs text-slate-500 mt-2">
            {filtered.length === 0
              ? "Aucun résultat"
              : `${filtered.length} département${filtered.length > 1 ? "s" : ""} trouvé${filtered.length > 1 ? "s" : ""}`}
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-500 text-sm">
          Aucun centre d&apos;examen trouvé pour &laquo; {query} &raquo;.{" "}
          <a href="mailto:bateauecoledelaloire@gmail.com" className="text-blue-700 underline hover:text-blue-900">
            Contactez-nous
          </a>{" "}
          pour vérifier les disponibilités dans votre région.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((dept) => (
            <DepartmentCard key={dept.code} dept={dept} query={query} />
          ))}
        </div>
      )}
    </div>
  );
}

function DepartmentCard({ dept, query }: { dept: Department; query: string }) {
  const q = query.trim().toLowerCase();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center justify-center rounded-md bg-blue-950 text-white text-xs font-bold px-2 py-1 min-w-[2.5rem]">
          {dept.code}
        </span>
        <span className="font-semibold text-sm text-slate-800">{dept.name}</span>
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {dept.cities.map((city) => {
          const isMatch = q.length > 1 && city.toLowerCase().includes(q);
          return (
            <li
              key={city}
              className={`text-xs px-2 py-0.5 rounded-full ${
                isMatch
                  ? "bg-blue-100 text-blue-800 font-semibold ring-1 ring-blue-300"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {city}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SearchIcon() {
  return (
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
      </svg>
    </span>
  );
}
