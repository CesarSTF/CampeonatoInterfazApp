import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MATCHES, TEAMS } from '../constants';
import { TabType } from '../types';

export const MatchesScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('Próximos');

  const getTeam = (id: string) => TEAMS.find(t => t.id === id);

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="size-12 flex items-center justify-center text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">sports_soccer</span>
        </div>
        <h1 className="text-lg font-bold text-slate-900 dark:text-white">Gestión de Partidos</h1>
        <div className="size-12 flex items-center justify-center">
          <button className="text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-3 sticky top-[72px] bg-background-light dark:bg-background-dark z-10">
        <div className="flex h-10 rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
          {(['Próximos', 'Resultados'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-md text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 mt-2">Mayo 2024</h2>
        
        {MATCHES.map((match) => {
          const home = getTeam(match.homeTeamId);
          const away = getTeam(match.awayTeamId);
          if (!home || !away) return null;

          return (
            <div 
              key={match.id} 
              onClick={() => navigate(`/sub/cards/${match.id}`)}
              className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm border border-gray-200 dark:border-gray-800 mb-4 cursor-pointer hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {match.date} - {match.time}
                </p>
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  match.status === 'Pendiente' 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20'
                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                }`}>
                  {match.status}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <img src={home.logo} alt={home.name} className="h-12 w-12 rounded-full p-1 bg-gray-50 dark:bg-gray-800" />
                  <p className="text-sm font-semibold text-center text-slate-800 dark:text-slate-200">{home.name}</p>
                </div>
                <p className="text-2xl font-bold text-slate-300 dark:text-gray-600">VS</p>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <img src={away.logo} alt={away.name} className="h-12 w-12 rounded-full p-1 bg-gray-50 dark:bg-gray-800" />
                  <p className="text-sm font-semibold text-center text-slate-800 dark:text-slate-200">{away.name}</p>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800 pt-3 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  <span>{match.location}</span>
                </div>
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};