import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';
import { useTheme } from '../App';

export const ProfileScreen = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <div className="flex items-center justify-between p-4 sticky top-0 bg-background-light dark:bg-background-dark z-10 border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Ajustes</h2>
        <button className="text-primary font-bold">Guardar</button>
      </div>

      <div className="flex flex-col items-center pt-6 pb-6">
        <div className="relative">
          <div className="size-32 rounded-full border-4 border-white dark:border-gray-700 shadow-md bg-cover bg-center" style={{backgroundImage: `url("${IMAGES.user}")`}}></div>
          <button className="absolute bottom-1 right-1 size-8 bg-primary rounded-full text-white flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-lg">edit</span>
          </button>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Juan Pérez</h2>
        <p className="text-gray-500">@juanperez</p>
      </div>

      <div className="space-y-6 px-4">
        {/* Personal Info */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-2">Información Personal</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
            {[
              { icon: 'person', label: 'Nombre Completo', value: 'Juan Pérez' },
              { icon: 'alternate_email', label: 'Nombre de Usuario', value: '@juanperez' },
              { icon: 'mail', label: 'Correo Electrónico', value: 'juan.perez@example.com' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-700 dark:text-gray-300">{item.icon}</span>
                  <span className="text-slate-900 dark:text-white">{item.label}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="truncate max-w-[150px]">{item.value}</span>
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </div>
              </div>
            ))}
             <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-700 dark:text-gray-300">phone</span>
                  <span className="text-slate-900 dark:text-white">Teléfono</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>Añadir teléfono</span>
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </div>
              </div>
          </div>
        </section>

        {/* Security */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-2">Cuenta y Seguridad</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-700 dark:text-gray-300">lock</span>
                  <span className="text-slate-900 dark:text-white">Cambiar Contraseña</span>
                </div>
               <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
             <div className="flex items-center justify-between p-4">
               <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-700 dark:text-gray-300">verified_user</span>
                  <span className="text-slate-900 dark:text-white">2FA</span>
                </div>
               <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>Activada</span>
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </div>
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-2">Preferencias</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-700 dark:text-gray-300">notifications</span>
                  <span className="text-slate-900 dark:text-white">Notificaciones</span>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                 <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
             <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleTheme}>
              <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-700 dark:text-gray-300">brightness_6</span>
                  <span className="text-slate-900 dark:text-white">Tema Oscuro</span>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-colors ${isDark ? 'bg-primary' : 'bg-gray-300'}`}>
                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isDark ? 'right-1' : 'left-1'}`}></div>
              </div>
            </div>
          </div>
        </section>

         {/* Actions */}
        <section>
           <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 pl-2">Acciones</h3>
           <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
             <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 p-4 text-primary hover:bg-gray-50 dark:hover:bg-gray-700/50">
               <span className="material-symbols-outlined">logout</span>
               <span className="font-medium">Cerrar Sesión</span>
             </button>
             <button className="w-full flex items-center gap-3 p-4 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 border-t border-gray-100 dark:border-gray-700">
               <span className="material-symbols-outlined">delete_forever</span>
               <span className="font-medium">Eliminar Cuenta</span>
             </button>
           </div>
        </section>
      </div>
    </div>
  );
};