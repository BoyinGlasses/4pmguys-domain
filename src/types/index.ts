export type Platform = 'PC' | 'PS5' | 'Xbox Series X' | 'Switch 2' | 'Steam Deck' | 'Mobile';

export interface Game {
  id: string;
  title: string;
  subTitle: string;
  genre: string;
  status: 'In Development' | 'Closed Beta' | 'Early Access' | 'Released';
  releaseDate: string;
  engine: string;
  description: string;
  longDescription: string;
  bannerImage: string;
  coverImage: string;
  videoPreviewUrl: string;
  trailerYoutubeId?: string;
  platforms: Platform[];
  steamUrl: string;
  epicUrl?: string;
  tags: string[];
  features: string[];
  stats: {
    wishlists?: string;
    rating?: string;
    players?: string;
  };
  systemRequirements?: {
    os: string;
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
  };
}

export interface MediaItem {
  id: string;
  title: string;
  gameId: string;
  type: 'screenshot' | 'artwork' | 'wallpaper' | 'teaser';
  resolution: string;
  thumbnail: string;
  fullUrl: string;
  caption: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'Art & Animation' | 'Game Design' | 'Audio & Narrative' | 'Production';
  location: string;
  type: 'Full-time Remote' | 'Hybrid (Tokyo / HCMC)' | 'Contract';
  level: 'Senior' | 'Lead' | 'Principal' | 'Mid';
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export interface StudioMilestone {
  year: string;
  title: string;
  description: string;
  achievement: string;
}

export interface CommunityFeed {
  platform: 'Discord' | 'Twitter' | 'YouTube' | 'TikTok';
  author: string;
  handle: string;
  time: string;
  content: string;
  media?: string;
  engagement: string;
  link: string;
}
