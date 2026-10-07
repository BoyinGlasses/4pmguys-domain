import { useState } from 'react';
import { StudioNavbar } from './components/studio/StudioNavbar';
import { StudioHeroSlider } from './components/studio/StudioHeroSlider';
import { StudioPioneeringBanner } from './components/studio/StudioPioneeringBanner';
import { StudioFeaturedGames } from './components/studio/StudioFeaturedGames';
import { StudioNewReleases } from './components/studio/StudioNewReleases';
import { StudioCareersAndPitch } from './components/studio/StudioCareersAndPitch';
import { StudioNewsAndSocials } from './components/studio/StudioNewsAndSocials';
import { StudioFooter } from './components/studio/StudioFooter';

// Modals
import { StudioGameModal } from './components/studio/StudioGameModal';
import { StudioStoreModal } from './components/studio/StudioStoreModal';
import { StudioPitchModal } from './components/studio/StudioPitchModal';
import { StudioTrailerModal } from './components/studio/StudioTrailerModal';

import type { StudioGame } from './data/studio4pmData';

export function App() {
  const [selectedGame, setSelectedGame] = useState<StudioGame | null>(null);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [trailerTitle, setTrailerTitle] = useState<string | null>(null);

  const handleOpenCareers = () => {
    const careersSection = document.getElementById('careers-section');
    careersSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f8fd] text-[#381970] flex flex-col font-['Poppins',sans-serif] selection:bg-[#7317ba]/20 selection:text-[#381970]">
      {/* 1. Header Navigation */}
      <StudioNavbar onOpenStore={() => setIsStoreOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Game Feature Slider */}
        <StudioHeroSlider
          onSelectGame={(game) => setSelectedGame(game)}
          onPlayTrailer={(title) => setTrailerTitle(title)}
        />

        {/* 3. Studio Manifesto & Milestone Statistics */}
        <StudioPioneeringBanner />

        {/* 4. Featured Games Catalog */}
        <StudioFeaturedGames onSelectGame={(game) => setSelectedGame(game)} />

        {/* 5. New Releases Dark Purple Showcase */}
        <StudioNewReleases
          onSelectGame={(game) => setSelectedGame(game)}
          onPlayTrailer={(title) => setTrailerTitle(title)}
        />

        {/* 6. Careers "Join 4PMGUYS" & Dual "Play / Pitch" Cards */}
        <StudioCareersAndPitch
          onOpenCareers={handleOpenCareers}
          onOpenPitch={() => setIsPitchOpen(true)}
        />

        {/* 7. Latest Dispatches & Social Community Links */}
        <StudioNewsAndSocials />
      </main>

      {/* 8. Deep Purple Footer */}
      <StudioFooter />

      {/* Modals */}
      <StudioGameModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />

      <StudioStoreModal
        isOpen={isStoreOpen}
        onClose={() => setIsStoreOpen(false)}
      />

      <StudioPitchModal
        isOpen={isPitchOpen}
        onClose={() => setIsPitchOpen(false)}
      />

      <StudioTrailerModal
        isOpen={!!trailerTitle}
        title={trailerTitle || ''}
        onClose={() => setTrailerTitle(null)}
      />
    </div>
  );
}

export default App;
