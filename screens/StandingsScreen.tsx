import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAMS } from '../constants';
import { SeriesType } from '../types';

export const StandingsScreen = () => {
  const navigate = useNavigate();
  const [series, setSeries] = useState<SeriesType>('Serie A');
  const [search, setSearch] = useState('');

  const filteredTeams = TEAMS
    .filter(t => t.series === (series === 'Serie A' ? 'A' : 'B'))
    .filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.stats.pts - a.stats.pts);

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Top Bar */}
      <div className="sticky top-0 z-20 flex flex-col bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={() => navigate('/app/dashboard')} className="flex size-12 items-center text-slate-800 dark:text-slate-200">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white">Tabla de Posiciones</h1>
          <button className="flex size-12 items-center justify-center text-slate-800 dark:text-slate-200">
            <span className="material-symbols-outlined text-2xl">ios_share</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-3">
        <div className="flex h-10 rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
          {(['Serie A', 'Serie B'] as SeriesType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setSeries(tab)}
              className={`flex-1 rounded-md text-sm font-medium transition-all ${
                series === tab 
                  ? 'bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 rounded-xl bg-white dark:bg-gray-800 pl-10 pr-4 text-slate-900 dark:text-white placeholder-gray-500 border-none focus:ring-2 focus:ring-primary"
            placeholder="Buscar equipo"
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="sticky top-[140px] z-10 flex items-center justify-between gap-4 bg-background-light/95 dark:bg-background-dark/95 px-4 min-h-12 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <p className="w-6 text-center">#</p>
        <p className="flex-1">Club</p>
        <div className="grid grid-cols-5 gap-x-2 w-40 text-center">
          <p>PTS</p><p>PJ</p><p>PG</p><p>PE</p><p>PP</p>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {filteredTeams.map((team, index) => (
          <div key={team.id} className={`flex items-center justify-between gap-4 px-4 min-h-14 border-b border-gray-100 dark:border-gray-800 ${index < 4 ? 'bg-green-50/50 dark:bg-green-900/10' : ''}`}>
            <p className="w-6 text-sm font-medium text-slate-600 dark:text-slate-400 text-center">{index + 1}</p>
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
              <img src={team.logo} alt={team.name} className="h-8 w-8 object-contain" />
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 truncate">{team.name}</p>
            </div>
            <div className="grid grid-cols-5 gap-x-2 w-40 text-center text-sm">
              <p className="font-bold text-slate-900 dark:text-white">{team.stats.pts}</p>
              <p className="text-slate-600 dark:text-slate-400">{team.stats.pj}</p>
              <p className="text-slate-600 dark:text-slate-400">{team.stats.pg}</p>
              <p className="text-slate-600 dark:text-slate-400">{team.stats.pe}</p>
              <p className="text-slate-600 dark:text-slate-400">{team.stats.pp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};