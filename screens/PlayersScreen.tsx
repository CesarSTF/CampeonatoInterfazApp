import React, { useState } from 'react';
import { PLAYERS } from '../constants';

export const PlayersScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = PLAYERS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <div className="sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4">
          <h1 className="text-lg font-bold flex-1 text-slate-900 dark:text-white">Jugadores</h1>
          <button className="flex items-center justify-center rounded-lg size-10 text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>

      <div className="px-4 py-3 sticky top-[65px] z-10 bg-background-light dark:bg-background-dark">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            type="text" 
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-transparent rounded-xl bg-gray-200 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-900 transition-all outline-none" 
            placeholder="Buscar por nombre o equipo..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="flex items-center gap-4 px-4 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800/50 transition-colors cursor-pointer">
            <img src={player.avatar} alt={player.name} className="size-14 rounded-full object-cover bg-gray-100" />
            <div className="flex flex-col flex-1">
              <p className="text-base font-medium text-slate-900 dark:text-white">{player.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{player.team}</p>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        ))}
        {filteredPlayers.length === 0 && (
          <div className="p-8 text-center text-gray-500">No se encontraron jugadores</div>
        )}
      </div>
    </div>
  );
};