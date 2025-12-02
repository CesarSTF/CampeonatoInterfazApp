import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MATCHES, TEAMS } from '../constants';

export const CardManagementScreen = () => {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const match = MATCHES.find(m => m.id === matchId);
  const home = match ? TEAMS.find(t => t.id === match.homeTeamId) : null;
  const away = match ? TEAMS.find(t => t.id === match.awayTeamId) : null;

  // Mock events for the UI
  const events = [
    { id: 1, player: 'Jugador Uno #10', time: "23'", type: 'yellow' },
    { id: 2, player: 'Jugador Dos #7', time: "45'", type: 'red' },
    { id: 3, player: 'Jugador Tres #5', time: "68'", type: 'yellow' },
  ];

  if (!match || !home || !away) return <div className="p-4">Partido no encontrado</div>;

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sticky top-0 bg-background-light dark:bg-background-dark z-10 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-start text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Gestión de Tarjetas</h2>
        <button className="text-primary font-bold">Guardar</button>
      </div>

      <h3 className="text-xl font-bold text-center py-4 px-4 text-slate-900 dark:text-white">
        {home.name} vs {away.name}
      </h3>

      {/* Filter Tabs */}
      <div className="px-4 py-2">
        <div className="flex h-10 rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
          <button className="flex-1 rounded-md text-sm font-medium text-gray-500">Equipo A</button>
          <button className="flex-1 rounded-md text-sm font-medium text-gray-500">Equipo B</button>
          <button className="flex-1 rounded-md text-sm font-medium bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm">Todos</button>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 px-4 mt-4">
        {events.map((evt) => (
          <div key={evt.id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center size-12 rounded-lg ${evt.type === 'yellow' ? 'bg-[#FFCC00]' : 'bg-[#FF3B30]'}`}>
                <span className={`material-symbols-outlined text-3xl ${evt.type === 'yellow' ? 'text-black' : 'text-white'}`}>rectangle</span>
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{evt.player}</p>
                <p className="text-sm text-gray-500">Minuto {evt.time}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>

      <button className="fixed bottom-6 right-6 size-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:bg-primary/90">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};