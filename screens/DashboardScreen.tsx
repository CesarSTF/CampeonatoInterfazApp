import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES, CHAMPIONSHIPS } from '../constants';

export const DashboardScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full text-slate-900 dark:text-gray-100">
      {/* Top Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 justify-between sticky top-0 z-20 backdrop-blur-md bg-opacity-90">
        <div className="flex size-12 shrink-0 items-center">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white dark:border-gray-700 shadow-sm" style={{backgroundImage: `url("${IMAGES.user}")`}}></div>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center">Dashboard</h2>
        <button onClick={() => navigate('/app/profile')} className="flex size-12 items-center justify-center rounded-lg text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">settings</span>
        </button>
      </div>

      <h1 className="text-[32px] font-bold px-4 pb-3 pt-2">¡Hola, Usuario!</h1>

      {/* Active Championships Carousel */}
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h3 className="text-lg font-bold">Campeonatos Activos</h3>
        <button className="text-primary text-sm font-medium hover:underline">Ver todo</button>
      </div>
      
      <div className="flex overflow-x-auto pb-4 px-4 gap-4 no-scrollbar snap-x">
        {CHAMPIONSHIPS.map((champ) => (
          <div key={champ.id} className="snap-center flex-none w-72 flex flex-col gap-3 rounded-xl bg-white dark:bg-gray-800 p-3 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-full aspect-[16/9] bg-cover bg-center rounded-lg" style={{backgroundImage: `url("${champ.banner}")`}}></div>
            <div>
              <p className="text-base font-semibold">{champ.name}</p>
              <p className="text-slate-500 dark:text-gray-400 text-sm">Posición: {champ.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Matches Preview */}
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h3 className="text-lg font-bold">Próximos Partidos</h3>
        <button onClick={() => navigate('/app/matches')} className="text-primary text-sm font-medium hover:underline">Ver todo</button>
      </div>

      <div className="flex flex-col gap-3 px-4">
        <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border border-gray-100 dark:border-gray-700" onClick={() => navigate('/app/matches')}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-cover border border-gray-200 dark:border-gray-600" style={{backgroundImage: `url("${IMAGES.teamReal}")`}}></div>
              <p className="font-bold text-lg text-slate-400">vs</p>
              <div className="size-10 rounded-full bg-cover border border-gray-200 dark:border-gray-600" style={{backgroundImage: `url("${IMAGES.teamAtletico}")`}}></div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-base">Real vs Atlético</p>
              <p className="text-sm text-slate-500 dark:text-gray-400">Liga Anual</p>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center text-sm text-slate-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">calendar_today</span>
              <span>Hoy, 19:00</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">location_on</span>
              <span>Estadio Municipal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <h3 className="text-lg font-bold px-4 pb-2 pt-8">Acciones Rápidas</h3>
      <div className="grid grid-cols-2 gap-4 px-4 pb-8">
        {[
          { icon: 'add_circle', label: 'Crear Campeonato', action: () => {} },
          { icon: 'search', label: 'Buscar Equipo', action: () => navigate('/app/standings') },
          { icon: 'sports', label: 'Árbitros', action: () => navigate('/sub/referees') },
          { icon: 'query_stats', label: 'Mis Estadísticas', action: () => navigate('/app/stats') },
        ].map((item, idx) => (
          <button key={idx} onClick={item.action} className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors">
            <div className="flex items-center justify-center size-12 bg-primary/10 text-primary rounded-full">
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
            <p className="text-sm font-medium text-center">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};