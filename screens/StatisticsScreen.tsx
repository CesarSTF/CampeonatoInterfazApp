import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PLAYERS } from '../constants';
import { StatsTabType } from '../types';

export const StatisticsScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<StatsTabType>('Jugadores');

  // Sort players for different stats
  const topScorers = [...PLAYERS].sort((a, b) => (b.stats?.goals || 0) - (a.stats?.goals || 0));
  const topAssists = [...PLAYERS].sort((a, b) => (b.stats?.assists || 0) - (a.stats?.assists || 0));
  const topCards = [...PLAYERS].sort((a, b) => (b.stats?.yellowCards || 0) - (a.stats?.yellowCards || 0));

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center text-slate-900 dark:text-white">Estadísticas</h1>
        <div className="w-6"></div>
      </header>

      {/* Tabs */}
      <nav className="flex border-b border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark sticky top-[60px] z-10">
        {(['Jugadores', 'Equipos'] as StatsTabType[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-bold border-b-[3px] transition-colors ${
              activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === 'Jugadores' ? (
        <main className="p-4 space-y-6">
          {/* Top Scorers */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Goleadores</h2>
            <div className="space-y-4">
              {topScorers.map((p, idx) => (
                <div key={p.id} className="flex items-center gap-4">
                  <span className="text-gray-500 font-semibold w-5 text-center">{idx + 1}</span>
                  <img src={p.avatar} className="size-10 rounded-full object-cover" alt={p.name} />
                  <p className="flex-1 font-medium text-slate-900 dark:text-white">{p.name}</p>
                  <p className="font-bold text-lg text-slate-900 dark:text-white">{p.stats?.goals}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Assists */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Asistencias</h2>
            <div className="space-y-4">
              {topAssists.map((p, idx) => (
                <div key={p.id} className="flex items-center gap-4">
                  <span className="text-gray-500 font-semibold w-5 text-center">{idx + 1}</span>
                  <img src={p.avatar} className="size-10 rounded-full object-cover" alt={p.name} />
                  <p className="flex-1 font-medium text-slate-900 dark:text-white">{p.name}</p>
                  <p className="font-bold text-lg text-slate-900 dark:text-white">{p.stats?.assists}</p>
                </div>
              ))}
            </div>
          </section>

           {/* Cards */}
           <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Tarjetas</h2>
            <div className="space-y-4">
              {topCards.map((p, idx) => (
                <div key={p.id} className="flex items-center gap-4">
                  <span className="text-gray-500 font-semibold w-5 text-center">{idx + 1}</span>
                  <img src={p.avatar} className="size-10 rounded-full object-cover" alt={p.name} />
                  <p className="flex-1 font-medium text-slate-900 dark:text-white">{p.name}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-4 bg-yellow-400 rounded-sm"></div>
                        <span className="font-bold text-slate-900 dark:text-white">{p.stats?.yellowCards}</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <div className="w-3 h-4 bg-red-500 rounded-sm"></div>
                        <span className="font-bold text-slate-900 dark:text-white">{p.stats?.redCards}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <div className="p-8 text-center text-gray-500">
           Estadísticas de Equipos en desarrollo...
        </div>
      )}
    </div>
  );
};