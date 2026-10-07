export interface StudioGame {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  genre: string;
  platforms: ('Steam' | 'PlayStation' | 'Xbox' | 'Nintendo')[];
  coverImage: string;
  wideImage: string;
  slug: string;
  steamUrl: string;
  psUrl?: string;
  xboxUrl?: string;
  nintendoUrl?: string;
  description: string;
  rating?: string;
  releaseDate: string;
}

export const HERO_SLIDER_GAMES: StudioGame[] = [
  {
    id: 'duskwalker',
    title: 'PROJECT: DUSKWALKER',
    subtitle: 'The Next-Generation Dark Action RPG',
    tag: 'FLAGSHIP TITLE',
    genre: 'Dark Action RPG / Souls-like',
    platforms: ['Steam', 'PlayStation', 'Xbox'],
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    wideImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
    slug: 'project-duskwalker',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Q4 2026',
    rating: 'Top 10 Most Anticipated',
    description: 'Carve your descent through a cursed empire suspended in perpetual twilight. Master deliberate, physics-driven parries, wield shifting bloodline weapons, and conquer gargantuan eldritch monarchs built in Unreal Engine 5.5.',
  },
  {
    id: 'neon-overdrive',
    title: 'NEON OVERDRIVE: 2099',
    subtitle: 'High-Velocity Cyberpunk Extraction Shooter',
    tag: 'CLOSED BETA LIVE',
    genre: 'Cyberpunk Extraction / PvPvE Tactical',
    platforms: ['Steam', 'PlayStation', 'Xbox'],
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    wideImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80',
    slug: 'neon-overdrive-2099',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Q2 2026',
    rating: '98% Positive in Alpha Ring',
    description: 'Infiltrate subterranean megacorporate spires under heavy acid rain. Hack security mainframes, customize modular energy ballistics, and secure sentient AI cores before extermination protocols initiate.',
  },
  {
    id: 'void-strider',
    title: 'VOID STRIDER: ZERO',
    subtitle: 'Hyper-Kinetic Astral Rogue-lite',
    tag: 'OVERWHELMINGLY POSITIVE',
    genre: 'Action Rogue-lite / Hack & Slash',
    platforms: ['Steam', 'Nintendo', 'PlayStation'],
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    wideImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80',
    slug: 'void-strider-zero',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Out Now (V1.2)',
    rating: '96% Positive (12,400+ Reviews)',
    description: 'Slice through collapsed star systems at 120 FPS. Chain aerial gravity cancels, customize elemental relic affinities, and challenge the Celestial Ascendant across procedurally shifting stellar rifts.',
  },
  {
    id: 'chronicles-eclipse',
    title: 'CHRONICLES OF ECLIPSE',
    subtitle: 'Atmospheric Cosmic Survival Mystery',
    tag: 'AWARDS WINNER',
    genre: 'Survival / Psychological Narrative',
    platforms: ['Steam', 'PlayStation', 'Xbox', 'Nintendo'],
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    wideImage: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&w=1920&q=80',
    slug: 'chronicles-of-eclipse',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Available Worldwide',
    rating: 'Excellence in Audio & Narrative',
    description: 'Explore an abandoned deep-sea monitoring facility submerged beneath the Arctic glacial shelf. Decode haunting acoustic frequencies and unravel an eldritch truth where silence is your only sanctuary.',
  },
];

export const FEATURED_GAMES_LIST: StudioGame[] = [
  {
    id: 'duskwalker',
    title: 'Project: Duskwalker',
    subtitle: 'Next-Gen Souls-like Experience',
    tag: 'Flagship',
    genre: 'Dark Action RPG',
    platforms: ['Steam', 'PlayStation', 'Xbox'],
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    wideImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    slug: 'project-duskwalker',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Q4 2026',
    description: 'Unforgiving melee combat and deep gothic lore set in an empire caught between day and night.',
  },
  {
    id: 'neon-overdrive',
    title: 'Neon Overdrive: 2099',
    subtitle: 'Tactical Extraction Shooter',
    tag: 'Closed Beta',
    genre: 'PvPvE Tactical Shooter',
    platforms: ['Steam', 'PlayStation', 'Xbox'],
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    wideImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80',
    slug: 'neon-overdrive-2099',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Q2 2026',
    description: 'High-stakes corporate data extractions, thermal optics, and modular kinetic firearms.',
  },
  {
    id: 'void-strider',
    title: 'Void Strider: Zero',
    subtitle: 'Lightning-Paced Rogue-lite',
    tag: 'Top Rated',
    genre: 'Action Rogue-lite',
    platforms: ['Steam', 'Nintendo', 'PlayStation'],
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    wideImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80',
    slug: 'void-strider-zero',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Out Now',
    description: '120 FPS frame-perfect sword cancellations and modular cosmic skill synergies.',
  },
  {
    id: 'ironfang',
    title: 'Ironfang Legion',
    subtitle: 'Squad Tactics & Heavy Mechs',
    tag: 'New Drop',
    genre: 'Tactical Strategy / Mecha',
    platforms: ['Steam', 'PlayStation', 'Xbox'],
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    wideImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    slug: 'ironfang-legion',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Early Access',
    description: 'Lead custom bipedal war-rigs through scorched battlegrounds with destructible terrain physics.',
  },
  {
    id: 'chronicles-eclipse',
    title: 'Chronicles of Eclipse',
    subtitle: 'Deep-Sea Psychological Mystery',
    tag: 'Must Play',
    genre: 'Atmospheric Horror',
    platforms: ['Steam', 'PlayStation', 'Xbox', 'Nintendo'],
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    wideImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    slug: 'chronicles-of-eclipse',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Available Now',
    description: 'Binaural 3D audio underwater isolation experience that challenges the limits of perception.',
  },
  {
    id: 'midnight-protocol',
    title: 'Midnight Protocol',
    subtitle: 'Cyberpunk Noir Infiltration',
    tag: 'Upcoming',
    genre: 'Stealth Adventure',
    platforms: ['Steam', 'PlayStation', 'Nintendo'],
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    wideImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    slug: 'midnight-protocol',
    steamUrl: 'https://store.steampowered.com',
    releaseDate: 'Winter 2026',
    description: 'A detective narrative where code-breaking and surveillance manipulation unveil dark syndicate secrets.',
  }
];

export const STUDIO_NEWS = [
  {
    id: 'n1',
    date: 'OCTOBER 2026',
    category: 'STUDIO SPOTLIGHT',
    title: '4PMGUYS Reveals "Project: Duskwalker" 15-Minute Combat Gameplay Demo',
    summary: 'Witness our proprietary fluid poise-break physics, dynamic Nanite weather transitions, and real-time boss adaptive AI in action.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'n2',
    date: 'SEPTEMBER 2026',
    category: 'COMMUNITY',
    title: 'Neon Overdrive Closed Beta Expands to 250,000 Global Operatives',
    summary: 'Servers are live in Asia, Europe, and North America. Read the complete patch notes for Weapon Balancing V0.8.9 and the new Citadel map.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'n3',
    date: 'AUGUST 2026',
    category: 'MILESTONE',
    title: '4PMGUYS Surpasses 2.5 Million Lifetime Wishlists Across Flagship Lineup',
    summary: 'A huge thank you to our incredible community of players, alpha testers, and independent supporters who make this vision possible.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
  }
];

export const STUDIO_CAREERS = [
  {
    id: 'c1',
    title: 'Senior Gameplay Programmer (UE5 / C++)',
    dept: 'Engineering',
    type: 'Full-time Remote',
    exp: '5+ Years',
    desc: 'Architect character physics, combat state machines, and high-tickrate network synchronization for Project: Duskwalker.',
  },
  {
    id: 'c2',
    title: 'Lead Technical Artist (HLSL & Nanite)',
    dept: 'Art & VFX',
    type: 'Full-time Remote',
    exp: 'Lead / 6+ Years',
    desc: 'Build custom real-time shaders, procedural environment pipelines, and Lumen lighting profiles for our AAA production line.',
  },
  {
    id: 'c3',
    title: 'Combat & Encounter Designer',
    dept: 'Game Design',
    type: 'Full-time Remote',
    exp: 'Senior / 4+ Years',
    desc: 'Craft memorable multi-phase boss fights, frame-perfect parry telegraphs, and visceral kinetic attack animations.',
  },
  {
    id: 'c4',
    title: 'Senior Audio Director & Wwise Specialist',
    dept: 'Audio & Narrative',
    type: 'Full-time Remote',
    exp: 'Senior / 5+ Years',
    desc: 'Direct original atmospheric soundscapes, bone-shattering weapon impacts, and Dolby Atmos interactive audio integration.',
  }
];
