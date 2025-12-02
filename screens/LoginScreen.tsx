import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(user && pass) {
      navigate('/app/dashboard');
    } else {
      alert('Por favor, ingresa usuario y contraseña.');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="flex w-full max-w-sm flex-col items-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
          <span className="material-symbols-outlined text-4xl">emoji_events</span>
        </div>
        
        <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-2">
          Gestión de Campeonatos
        </h1>
        <p className="text-slate-500 dark:text-gray-400 text-base font-normal leading-normal pb-8 text-center">
          Inicia sesión para continuar
        </p>
        
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div className="flex flex-col w-full">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-slate-900 dark:text-gray-300 text-base font-medium leading-normal pb-2">Usuario</p>
              <div className="relative flex w-full flex-1 items-center">
                <span className="material-symbols-outlined absolute left-4 text-slate-500">person</span>
                <input 
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 pl-12 pr-4 text-base transition-all"
                  placeholder="Ingresa tu usuario" 
                />
              </div>
            </label>
          </div>

          <div className="flex flex-col w-full">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-slate-900 dark:text-gray-300 text-base font-medium leading-normal pb-2">Contraseña</p>
              <div className="relative flex w-full flex-1 items-center">
                <span className="material-symbols-outlined absolute left-4 text-slate-500">lock</span>
                <input 
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 pl-12 pr-12 text-base transition-all"
                  placeholder="Ingresa tu contraseña" 
                />
                <button type="button" className="absolute right-0 flex items-center justify-center h-14 w-12 text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </label>
          </div>
          
          <div className="w-full pt-2 pb-6">
            <p className="text-primary text-sm font-medium leading-normal text-right underline cursor-pointer hover:text-primary/80">¿Olvidaste tu contraseña?</p>
          </div>

          <button type="submit" className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 transition-all active:scale-[0.98]">
            Acceder
          </button>
        </form>

        <div className="pt-8 text-center">
          <p className="text-slate-500 dark:text-gray-400 text-sm font-normal">
            ¿No tienes una cuenta? <a href="#" className="font-semibold text-primary underline hover:text-primary/80">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
};