export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface AudioContextType {
  isPlaying: boolean;
  currentTrack: Track | null;
  progress: number;
  volume: number;
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  togglePlay: () => void;
  seekTo: (progress: number) => void;
  setVolume: (volume: number) => void;
  setYouTubeUrl: (url: string) => void;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  isYouTube?: boolean;
  youtubeId?: string;
  coverArt?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  github?: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  slug: string;
}

export interface FloatingThought {
  id: number;
  text: string;
  rotation: number;
}