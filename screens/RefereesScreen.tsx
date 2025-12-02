import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REFEREES } from '../constants';

export const RefereesScreen = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = REFEREES.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-background-light/90 dark:bg-background-dark/90 px-4 py-3 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full text-slate-600 dark:text-gray-300 hover:bg-black/5">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-slate-900 dark:text-white">Árbitros</h1>
        <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <div className="px-4 py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 rounded-xl bg-white dark:bg-gray-800 pl-10 pr-4 text-slate-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            placeholder="Buscar árbitro..."
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4">
        {filtered.map(ref => (
          <div key={ref.id} className="flex items-center gap-4 rounded-xl bg-white dark:bg-gray-800 p-3 shadow-sm border border-gray-100 dark:border-gray-700">
            <img src={ref.avatar} alt={ref.name} className="size-14 rounded-full object-cover bg-gray-200" />
            <div className="flex flex-col justify-center flex-1">
              <p className="text-base font-medium text-slate-900 dark:text-white">{ref.name}</p>
              <p className="text-sm text-gray-500">Partidos Asignados: {ref.matchesAssigned}</p>
            </div>
            <button className="flex size-10 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        ))}
      </div>

      <button className="fixed bottom-6 right-6 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 transition-transform active:scale-95">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};