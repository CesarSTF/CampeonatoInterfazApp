import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { LoginScreen } from './screens/LoginScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { MatchesScreen } from './screens/MatchesScreen';
import { PlayersScreen } from './screens/PlayersScreen';
import { StandingsScreen } from './screens/StandingsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { CardManagementScreen } from './screens/CardManagementScreen';
import { RefereesScreen } from './screens/RefereesScreen';
import { StatisticsScreen } from './screens/StatisticsScreen';

// --- Global Theme Context/Logic ---
const ThemeContext = React.createContext<{ isDark: boolean; toggleTheme: () => void }>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => React.useContext(ThemeContext);

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getTabClass = (path: string) => {
    const isActive = location.pathname === path;
    return `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`;
  };

  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="flex-1 pb-20">
        <Outlet />
      </div>
      
      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 flex justify-between items-center z-50">
        <button className={getTabClass('/app/dashboard')} onClick={() => navigate('/app/dashboard')}>
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-medium">Inicio</span>
        </button>
        <button className={getTabClass('/app/matches')} onClick={() => navigate('/app/matches')}>
          <span className="material-symbols-outlined">sports_soccer</span>
          <span className="text-[10px] font-medium">Partidos</span>
        </button>
        <div className="relative -top-5">
           <button className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 transform active:scale-95 transition-transform" onClick={() => navigate('/app/players')}>
            <span className="material-symbols-outlined text-3xl">add</span>
           </button>
        </div>
        <button className={getTabClass('/app/stats')} onClick={() => navigate('/app/stats')}>
          <span className="material-symbols-outlined">query_stats</span>
          <span className="text-[10px] font-medium">Stats</span>
        </button>
         <button className={getTabClass('/app/profile')} onClick={() => navigate('/app/profile')}>
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Perfil</span>
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          
          {/* Authenticated Routes with Bottom Bar */}
          <Route path="/app" element={<AppLayout />}>
            <Route path="dashboard" element={<DashboardScreen />} />
            <Route path="matches" element={<MatchesScreen />} />
            <Route path="players" element={<PlayersScreen />} />
            <Route path="standings" element={<StandingsScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="stats" element={<StatisticsScreen />} />
          </Route>

          {/* Sub-screens (Full screen with back button) */}
          <Route path="/sub/cards/:matchId" element={<CardManagementScreen />} />
          <Route path="/sub/referees" element={<RefereesScreen />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}