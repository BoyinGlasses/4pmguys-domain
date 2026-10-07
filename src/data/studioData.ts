import type { Game, MediaItem, CareerPosition, StudioMilestone, CommunityFeed } from '../types';

export const STUDIO_INFO = {
  name: '4PMGUYS',
  tagline: 'FORGING UNCOMPROMISING WORLDS BEYOND TWILIGHT',
  subTagline: 'We are an independent AAA & hardcore indie game studio crafting dark fantasy, tactical cybernetics, and atmospheric realities where every frame is a declaration of art.',
  founded: '2021',
  location: 'Global Remote / Creative Hubs in Tokyo & Saigon',
  teamSize: '120+ Craftsmen',
  philosophy: 'Born at 4 PM, shipped at 4 AM. We build games for players who crave consequence, deep combat mastery, and haunting narratives without corporate dilution.',
  stats: [
    { label: 'Active Wishlists', value: '2.4M+', change: '+34% this month' },
    { label: 'Community Operatives', value: '185K+', change: 'Discord & X' },
    { label: 'Global Game Awards', value: '14', change: 'Excellence in Art & Audio' },
    { label: 'Unreal Engine 5 Projects', value: '3 Major', change: 'Nanite & Lumen Native' },
  ],
  pressKitUrl: '#press-kit-modal',
  steamPublisherUrl: 'https://store.steampowered.com',
  discordUrl: 'https://discord.gg/4pmguys',
  twitterUrl: 'https://twitter.com/4pmguys',
  youtubeUrl: 'https://youtube.com',
  tiktokUrl: 'https://tiktok.com',
};

export const FEATURED_GAMES: Game[] = [
  {
    id: 'duskwalker',
    title: 'PROJECT: DUSKWALKER',
    subTitle: 'Dark Souls-inspired Gothic Action RPG',
    genre: 'Dark Action RPG / Hardcore Souls-like',
    status: 'In Development',
    releaseDate: 'Q4 2026',
    engine: 'Unreal Engine 5.5',
    description: 'Carve your descent through a cursed empire trapped in eternal twilight. Every blade swing drains sanity, every parry decides your eternity.',
    longDescription: 'Project: Duskwalker is 4PMGUYS flagship next-generation Action RPG. Built from the ground up with proprietary fluid physics and spatial audio, Duskwalker strips away hand-holding in favor of deliberate, high-risk melee combat against eldritch abominations that learn and counter your tactical cadence.',
    bannerImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1920&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fire-sparks-and-flames-flying-in-the-dark-42478-large.mp4',
    trailerYoutubeId: 'dQw4w9WgXcQ',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    steamUrl: 'https://store.steampowered.com',
    epicUrl: 'https://store.epicgames.com',
    tags: ['Souls-like', 'Dark Fantasy', 'Unreal Engine 5', 'Brutal Combat', 'Deep Lore'],
    features: [
      'Proprietary Momentum-Physics Combat System',
      'Dynamic Nanite Dynamic Weather & Eclipse Cycles',
      'AI Boss Entities with Adaptive Memory Behavior',
      'Original Atmospheric Orchestral & Dark Synth OST'
    ],
    stats: {
      wishlists: '1.2M Wishlists',
      rating: 'E3 Most Anticipated Indie 2025',
    },
    systemRequirements: {
      os: 'Windows 11 64-bit',
      cpu: 'AMD Ryzen 7 7800X3D / Intel Core i7-14700K',
      gpu: 'NVIDIA RTX 4070 Ti (12GB) / AMD Radeon RX 7900 XT',
      ram: '32 GB High-Speed DDR5',
      storage: '95 GB NVMe SSD',
    }
  },
  {
    id: 'neon-eclipse',
    title: 'NEON ECLIPSE: 2088',
    subTitle: 'Cyberpunk Tactical Extraction & Infiltration',
    genre: 'Cyberpunk Extraction Shooter / Stealth Infiltration',
    status: 'Closed Beta',
    releaseDate: 'Q2 2026',
    engine: 'Unreal Engine 5.4',
    description: 'Infiltrate neon-choked megacorporate spires, hack lethal orbital relays, and extract confidential synthetic consciousness cores before lethal purge squads deploy.',
    longDescription: 'A high-tension extraction shooter where darkness is your weapon. Hack surveillance feeds, deploy micro-drones, customize modular cyber-weapons with real ballistics, and decide whether to ally or betray rival operative syndicates in a live rain-soaked megalopolis.',
    bannerImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1920&q=80',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-night-sky-with-stars-and-nebula-41545-large.mp4',
    platforms: ['PC', 'PS5', 'Xbox Series X', 'Steam Deck'],
    steamUrl: 'https://store.steampowered.com',
    tags: ['Tactical Shooter', 'Cyberpunk', 'PvPvE Extraction', 'Hacking', 'Ray Tracing'],
    features: [
      'Zero-Latency High Tick-Rate Dedicated Servers',
      'Real-time Cyberware Hacking & EMP Environmental Traps',
      'Volumetric Fog & Real-Time Ray-Traced Reflections',
      'Persistent Black Market Economy & Weapon Modding'
    ],
    stats: {
      wishlists: '850K Wishlists',
      rating: '98% Positive in Alpha Playtests',
    },
    systemRequirements: {
      os: 'Windows 10/11 64-bit',
      cpu: 'Intel i5-12600K / Ryzen 5 7600',
      gpu: 'RTX 3070 / RX 6700 XT',
      ram: '16 GB RAM',
      storage: '60 GB High-speed SSD',
    }
  },
  {
    id: 'hollow-dawn',
    title: 'HOLLOW DAWN',
    subTitle: 'Psychological Eldritch Survival Experience',
    genre: 'Atmospheric Horror / Mystery Narrative',
    status: 'Released',
    releaseDate: 'Available Now',
    engine: 'Custom 4PM Renderer',
    description: 'Investigate an abandoned deep-sea research station located beneath the Arctic ice. The deeper you descend, the more reality unravels.',
    longDescription: 'Winner of 6 international indie horror accolades. Hollow Dawn features binaural 3D audio, light-deprivation mechanics, and a non-linear mystery where every sound you make ripples across the freezing submerged corridors.',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80',
    coverImage: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&w=1200&q=80',
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4',
    platforms: ['PC', 'PS5', 'Switch 2', 'Steam Deck'],
    steamUrl: 'https://store.steampowered.com',
    tags: ['Eldritch Horror', 'Atmospheric', 'Survival', 'Overwhelmingly Positive', 'Story Rich'],
    features: [
      'Binaural 3D Audio Psychoacoustic Soundscapes',
      'Physically-Based Dynamic Fluid & Submersion Engine',
      'Zero Jump Scares — Pure Psychological Terror',
      'Multiple Narrative Endings with ARG Secrets'
    ],
    stats: {
      players: '500K+ Copies Sold',
      rating: '95% Overwhelmingly Positive (14,200 Reviews)',
    },
    systemRequirements: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel i5-8400 / Ryzen 5 2600',
      gpu: 'GTX 1660 Super / RX 580',
      ram: '16 GB RAM',
      storage: '35 GB SSD',
    }
  },
  {
    id: 'chrono-shadows',
    title: 'CHRONO SHADOWS',
    subTitle: 'Hyper-Kinetic Cyber Hack & Slash Rogue-lite',
    genre: 'Fast-Paced Action Rogue-lite / Hack-and-Slash',
    status: 'Early Access',
    releaseDate: 'Early Access V0.9',
    engine: 'Unity & Custom C++ Physics',
    description: 'Slash through collapsing timelines at breakneck 120 FPS. Chain impossible aerial combos, manipulate temporal echoes, and conquer the Chrono Spire.',
    longDescription: 'Built for players who live for frame-perfect dodges, aerial cancels, and stylish combo ranks. Chrono Shadows pairs fluid responsive controls with a deep synergy deck of temporal augments.',
    bannerImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1920&q=80',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-video-game-controller-42797-large.mp4',
    platforms: ['PC', 'Switch 2', 'Mobile', 'Steam Deck'],
    steamUrl: 'https://store.steampowered.com',
    tags: ['Rogue-lite', 'Fast-Paced', 'Action', 'Steam Deck Verified', 'Soundtrack'],
    features: [
      'Lightning-Fast 120Hz Animation Capped Precision',
      'Over 200+ Modular Weapon & Timeline Fusions',
      'Seamless Cross-Progression (PC, Console, Mobile)',
      'Speedrun Mode with Global Leaderboards'
    ],
    stats: {
      players: '350K Active Runners',
      rating: '92% Very Positive on Steam',
    }
  }
];

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'm1',
    title: 'Duskwalker: The Obsidian Citadel Gates',
    gameId: 'duskwalker',
    type: 'screenshot',
    resolution: '3840 x 2160 (4K UHD)',
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=2400&q=90',
    caption: 'Lumen in-engine capture of the High Castellan approaching the cursed monolith.'
  },
  {
    id: 'm2',
    title: 'Neon Eclipse: Lower Spire Infiltration',
    gameId: 'neon-eclipse',
    type: 'screenshot',
    resolution: '3840 x 2160 (4K UHD)',
    thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=2400&q=90',
    caption: 'Tactical night-vision reconnaissance prior to EMP breach protocol.'
  },
  {
    id: 'm3',
    title: 'Duskwalker: Knight of the Eclipse Blade',
    gameId: 'duskwalker',
    type: 'artwork',
    resolution: '5120 x 2880 (5K Art)',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2400&q=90',
    caption: 'Official key art showcasing the protagonist’s transforming runic greatsword.'
  },
  {
    id: 'm4',
    title: 'Hollow Dawn: Submerged Cryo Chamber',
    gameId: 'hollow-dawn',
    type: 'screenshot',
    resolution: '3840 x 2160 (4K UHD)',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2400&q=90',
    caption: 'Volumetric caustic lighting simulation at 4,000 meters beneath Arctic ice.'
  },
  {
    id: 'm5',
    title: 'Chrono Shadows: Time-Rift Coliseum',
    gameId: 'chrono-shadows',
    type: 'wallpaper',
    resolution: '3840 x 2160 (4K Wallpaper)',
    thumbnail: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=2400&q=90',
    caption: 'High-speed combat arena render with particle physics explosion.'
  },
  {
    id: 'm6',
    title: 'Neon Eclipse: Cybernetic Augment Forge',
    gameId: 'neon-eclipse',
    type: 'artwork',
    resolution: '3840 x 2160 (4K UHD)',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2400&q=90',
    caption: 'Modular weapon synthesis workbench concept art.'
  }
];

export const STUDIO_MILESTONES: StudioMilestone[] = [
  {
    year: '2021',
    title: 'Genesis at 4 PM',
    description: 'Founded by five veteran triple-A programmers and technical directors who left corporate bureaucracy to build games with teeth.',
    achievement: 'Bootstrapped Prototype Funded within 48 Hours'
  },
  {
    year: '2023',
    title: 'Breakthrough: Hollow Dawn',
    description: 'Released our psychological survival experiment to global acclaim, capturing multiple festival awards and cementing our dark aesthetic.',
    achievement: '500,000+ Units Sold & 95% Steam Rating'
  },
  {
    year: '2024',
    title: 'Unreal Engine 5 Core Expansion',
    description: 'Scaled our distributed studio to 85 engineers and artists across 12 timezones, debuting Project: Duskwalker at Tokyo Game Show.',
    achievement: 'TGS Most Anticipated Action Title'
  },
  {
    year: '2025 - 2026',
    title: 'The Next Frontier',
    description: 'Launching Neon Eclipse Closed Beta and Project: Duskwalker next-gen rollout. Expanding our sovereign indie publishing arm.',
    achievement: '2.4M Cumulative Global Wishlists'
  }
];

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'job-1',
    title: 'Senior Gameplay Programmer (UE5 / C++)',
    department: 'Engineering',
    location: 'Remote (Global) / Tokyo Studio',
    type: 'Full-time Remote',
    level: 'Senior',
    description: 'Design and implement fluid combat state machines, character physics, responsive networking, and AI encounter mechanics in Unreal Engine 5 for Project: Duskwalker.',
    responsibilities: [
      'Architect robust gameplay systems and player movement abilities in modern C++.',
      'Optimize multi-threaded gameplay code for locked 60 FPS on current-gen consoles.',
      'Partner closely with Combat Designers to iterate on hitboxes, poise, and animation cancels.',
      'Profile memory, network synchronization, and garbage collection overhead.'
    ],
    requirements: [
      '5+ years professional experience developing games in C++ and Unreal Engine 4/5.',
      'Shipped at least one PC/Console title with third-person melee or action gameplay.',
      'Strong grasp of linear algebra, physics simulation, and state machine architecture.',
      'Deep passion for souls-like and character action games.'
    ],
    perks: [
      'Competitive base salary + direct game revenue share points',
      '$4,000 annual home-office and high-end hardware upgrade stipend',
      'Flexible async working hours (No toxic crunch culture)',
      'Unlimited PTO and comprehensive private health coverage'
    ]
  },
  {
    id: 'job-2',
    title: 'Lead Technical Artist (Shaders & Nanite)',
    department: 'Art & Animation',
    location: 'Remote (Americas / EMEA / APAC)',
    type: 'Full-time Remote',
    level: 'Lead',
    description: 'Bridge high-fidelity concept visions and peak engine performance. Build cutting-edge HLSL shaders, Houdini procedural pipelines, and Lumen lighting profiles.',
    responsibilities: [
      'Author custom material shaders, volumetric atmospheres, and fluid physics VFX.',
      'Develop Houdini procedural generation assets for sprawling gothic architecture.',
      'Establish technical performance budgets for Nanite geometry and memory footprint.',
      'Mentor 3D environment artists in efficient LODs and texture baking workflows.'
    ],
    requirements: [
      'Extensive portfolio demonstrating mastery in HLSL/GLSL, UE5 Material Editor, and Houdini.',
      'Demonstrated expertise in real-time ray-tracing, Lumen, and modern GPU rendering pipelines.',
      'Experience authoring automated art validation tools in Python.'
    ],
    perks: [
      'High-tier GPU test rig provided (RTX 4090 workstation)',
      'Annual attendance budget for GDC / SIGGRAPH / Unreal Fest',
      'Generous profit sharing & equity bonus'
    ]
  },
  {
    id: 'job-3',
    title: 'Senior Combat & Boss Encounter Designer',
    department: 'Game Design',
    location: 'Remote (Global)',
    type: 'Full-time Remote',
    level: 'Senior',
    description: 'Craft unforgettable, grueling boss fights and multi-phase combat encounters where every attack telegraph, tell, and parry window feels masterfully fair.',
    responsibilities: [
      'Design comprehensive boss attack routines, arena geometries, and dynamic phase transitions.',
      'Tune frame data, animation cancels, poise break values, and hit-stop camera shakes.',
      'Run blind playtests and synthesize player telemetry data to eliminate artificial frustration.'
    ],
    requirements: [
      'Proven track record designing action RPG combat or boss battles in commercial titles.',
      'Uncanny understanding of timing, cadence, player psychology, and spatial tension.',
      'Hands-on scripting experience in Unreal Blueprints or Lua.'
    ],
    perks: [
      'Work alongside industry veteran fight choreographers',
      'Full game library allowance ($1,200/year to study gaming releases)',
      'Quarterly in-person studio retreats in Japan and Europe'
    ]
  },
  {
    id: 'job-4',
    title: 'Senior Sound Designer & Audio Implementer',
    department: 'Audio & Narrative',
    location: 'Remote / Saigon Audio Lab',
    type: 'Full-time Remote',
    level: 'Senior',
    description: 'Shape the acoustic identity of 4PMGUYS titles. Craft bone-crushing metal impacts, unsettling eldritch whispers, and dynamic spatialized Wwise soundscapes.',
    responsibilities: [
      'Design original, punchy SFX for weapons, creatures, and futuristic cyberware.',
      'Integrate audio via Wwise and Unreal Engine with dynamic occlusion and reverb zones.',
      'Mix in Dolby Atmos and binaural headphone profiles for ultimate spatial immersion.'
    ],
    requirements: [
      'Proficiency with Wwise, Reaper/Pro Tools, and modern modular synthesizer plugins.',
      'Portfolio showcasing heavy combat or atmospheric horror sound design.',
      'Strong understanding of interactive audio mixing and voice priority management.'
    ],
    perks: [
      'Boutique microphone and hardware synthesizer lab budget',
      'Co-credit on official vinyl soundtrack releases',
      'Full creative autonomy over sonic signatures'
    ]
  }
];

export const COMMUNITY_FEEDS: CommunityFeed[] = [
  {
    platform: 'Discord',
    author: 'Kaelen | Combat Director',
    handle: '@kaelen_4pm',
    time: '2 hours ago',
    content: 'Just deployed build v0.8.4 to the closed tester ring! Parrying the Dusk Monarch now triggers directional dynamic dismemberment. Join #beta-feedback and tell us how the input latency feels!',
    engagement: '842 reactions • 194 comments',
    link: 'https://discord.gg/4pmguys'
  },
  {
    platform: 'Twitter',
    author: '4PMGUYS Official',
    handle: '@4pmguys',
    time: '5 hours ago',
    content: 'We spent 3 months perfecting the audio resonance of steel against obsidian armor. Put your headphones on, turn down the lights, and witness the combat teaser below. ⚔️ #Duskwalker #UE5 #IndieDev',
    engagement: '14.2K Likes • 2.8K Retweets',
    link: 'https://twitter.com/4pmguys'
  },
  {
    platform: 'YouTube',
    author: '4PMGUYS Studio Channel',
    handle: '@4pmguys_studio',
    time: 'Yesterday',
    content: 'NEW DEVLOG [EP. 06]: How We Simulate 100,000 Eldritch Micro-Particles in Real-Time without GPU throttling. Full 18-minute deep dive is live now!',
    engagement: '92K Views • 1.4K Comments',
    link: 'https://youtube.com'
  },
  {
    platform: 'TikTok',
    author: '4pmguys_behindthescenes',
    handle: '@4pmguys',
    time: '2 days ago',
    content: 'POV: You are testing the parry window on the final boss at 3:58 AM and you finally hit the frame-perfect dodge. 🎮💀',
    engagement: '450K Views • 68K Likes',
    link: 'https://tiktok.com'
  }
];

export const PRESS_KIT_ASSETS = [
  {
    title: 'Official 4PMGUYS Vector Logos & Brand Identity Pack',
    size: '48.2 MB',
    format: 'SVG, AI, PNG (Dark & Light, Monochromatic, Animated)',
    tag: 'Brand Pack'
  },
  {
    title: 'Project Duskwalker 4K & 8K Key Art Gallery',
    size: '320.5 MB',
    format: 'Uncompressed TIFF & PNG (With and without Logo)',
    tag: 'Key Visuals'
  },
  {
    title: 'Neon Eclipse: 2088 Gameplay B-Roll & Trailer Stills',
    size: '850.0 MB',
    format: 'ProRes 422 HQ 60FPS Video + 4K Stills',
    tag: 'B-Roll & Video'
  },
  {
    title: 'Studio Factsheet & Executive Leadership Bio Sheet',
    size: '12.4 MB',
    format: 'PDF Interactive & Markdown Press Briefing',
    tag: 'Factsheet'
  },
  {
    title: 'Original Soundtrack Sample Teaser (FLAC 24-bit / 96kHz)',
    size: '185.0 MB',
    format: 'Lossless Audio Master Tracks',
    tag: 'Audio Sample'
  }
];
