export interface Team {
  id: string;
  name: string;
  logo: string;
  series: 'A' | 'B';
  stats: {
    pts: number;
    pj: number;
    pg: number;
    pe: number;
    pp: number;
  };
}

export interface Player {
  id: string;
  name: string;
  team: string;
  avatar: string;
  stats?: {
    goals?: number;
    assists?: number;
    yellowCards?: number;
    redCards?: number;
  };
}

export interface Match {
  id: string;
  date: string;
  time: string;
  homeTeamId: string;
  awayTeamId: string;
  location: string;
  status: 'Pendiente' | 'Finalizado';
  homeScore?: number;
  awayScore?: number;
}

export interface Referee {
  id: string;
  name: string;
  avatar: string;
  matchesAssigned: number;
}

export interface Championship {
  id: string;
  name: string;
  banner: string;
  position?: string;
}

export type TabType = 'Próximos' | 'Resultados';
export type SeriesType = 'Serie A' | 'Serie B';
export type StatsTabType = 'Jugadores' | 'Equipos';