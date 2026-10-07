// Authentic, high-precision SVG vector icons for Gaming Platforms & Social Networks

export const StudioLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#7317ba] to-[#381970] p-[2px] shadow-md shadow-[#7317ba]/20 flex items-center justify-center">
      <div className="w-full h-full bg-[#1e0a3d] rounded-[6px] flex items-center justify-center">
        <span className="font-['Poppins',sans-serif] font-black text-xs text-white tracking-tighter">
          4PM
        </span>
      </div>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-['Poppins',sans-serif] font-black text-xl tracking-tight text-[#381970] leading-none">
        4PM<span className="text-[#7317ba]">GUYS</span>
      </span>
      <span className="text-[9px] font-bold tracking-[0.25em] text-[#7317ba] uppercase mt-0.5 font-mono">
        GAME STUDIO
      </span>
    </div>
  </div>
);

export const StudioLogoWhite = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#7317ba] to-white p-[2px] shadow-md flex items-center justify-center">
      <div className="w-full h-full bg-[#1e0a3d] rounded-[6px] flex items-center justify-center">
        <span className="font-['Poppins',sans-serif] font-black text-xs text-white tracking-tighter">
          4PM
        </span>
      </div>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-['Poppins',sans-serif] font-black text-xl tracking-tight text-white leading-none">
        4PM<span className="text-purple-300">GUYS</span>
      </span>
      <span className="text-[9px] font-bold tracking-[0.25em] text-purple-300 uppercase mt-0.5 font-mono">
        GAME STUDIO
      </span>
    </div>
  </div>
);

export const Logo4PM = ({ variant = 'default', className = 'w-6 h-6' }: { variant?: 'default' | 'badge'; className?: string }) => {
  if (variant === 'badge') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }
  return <StudioLogo className={className} />;
};

// Real Official Steam SVG
export const SteamIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.979 0C5.364 0 0 5.364 0 11.979c0 5.32 3.468 9.832 8.293 11.443l3.125-4.526a3.864 3.864 0 0 1-.362-1.624c0-2.14 1.737-3.877 3.877-3.877 1.48 0 2.768.831 3.42 2.05l4.632-2.09c.046-.442.072-.892.072-1.348C23.057 5.364 17.693 0 11.979 0zm0 2.222c4.321 0 7.842 3.52 7.842 7.842 0 1.054-.211 2.053-.591 2.973l-3.349 1.513c-.69-.993-1.841-1.644-3.14-1.644-2.14 0-3.877 1.737-3.877 3.877 0 .42.071.822.203 1.196L6.5 21.845C3.818 20.301 2 17.377 2 13.979c0-5.402 4.382-9.778 9.779-9.778h.2z" />
  </svg>
);

// Real Official PlayStation SVG
export const PlayStationIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.669 17.202c-.446.56-1.536.96-1.536.96l-8.114 2.919v-2.152l5.973-2.131c.679-.243.783-.586.233-.767-.55-.181-1.545-.13-2.224.113l-3.982 1.405v-2.235l.228-.078s1.151-.408 2.769-.587c1.616-.18 3.599.022 5.153.612 1.751.555 1.947 1.371 1.503 1.934zm-8.88-3.666v-5.5c0-.646-.118-1.242-.725-1.41-.617-.17-1.127.262-1.127.908v13.023l-3.715-1.182v-16.44c1.579.294 3.88 1.002 5.116 1.419 3.145 1.08 4.212 2.428 4.212 5.459 0 2.954-1.821 4.076-3.761 3.723zm-12.016 5.17c-1.805-.514-2.105-1.577-1.286-2.191.758-.567 2.046-.994 2.046-.994l5.325-1.896v2.162l-3.832 1.373c-.676.242-.781.587-.23.767.55.182 1.545.13 2.225-.113l1.837-.667v1.933l-.364.062c-1.92.311-3.887.153-5.72-.416z" />
  </svg>
);

// Real Official Xbox SVG
export const XboxIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.697 3.585C6.46 1.95 8.91 1 12 1s5.54.95 7.303 2.585c.197.183.056.408-.2.437-1.393.155-2.923.492-4.409 1.085-.366.141-.493-.07-.296-.309 1.155-1.42 2.606-2.338 2.606-2.338s-2.042-1.07-5.004-1.07-5.004 1.07-5.004 1.07 1.451.918 2.606 2.338c.197.239.07.45-.296.309-1.486-.593-3.016-.93-4.409-1.085-.253-.029-.397-.254-.2-.437zm18.39 8.35c.197 2.183-.352 4.366-1.563 6.155-.155.225-.408.211-.479-.042-.408-1.437-1.099-2.831-2.028-4.042-.24-.31-.056-.507.254-.366 1.944.887 3.619 2.014 3.619 2.014s-.732-2.789-2.084-5.225c-.24-.437-.014-.62.338-.366 1.155.831 1.944 1.873 1.943 1.872zm-22.174 0c0-.001.788-1.042 1.943-1.873.352-.254.578-.07.338.366-1.352 2.436-2.084 5.225-2.084 5.225s1.675-1.127 3.619-2.014c.31-.141.494.056.254.366-.929 1.211-1.62 2.605-2.028 4.042-.07.253-.324.267-.479.042-1.211-1.789-1.76-3.972-1.563-6.155zm9.087 3.746c-.225-.324-.465-.634-.718-.944-.197-.239-.028-.465.253-.324 1.577.789 3.239 1.338 4.901 1.634.338.056.408.268.141.451-1.225.845-2.648 1.422-4.14 1.662-.282.042-.437-.211-.437-.479zm4.028-1.268c-.253.31-.493.62-.718.944 0 .268-.155.521-.437.479-1.492-.24-2.915-.817-4.14-1.662-.267-.183-.197-.395.141-.451 1.662-.296 3.324-.845 4.901-1.634.281-.141.45.085.253.324z"/>
  </svg>
);

// Real Official Nintendo Switch SVG
export const NintendoIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.87 0h3.69c4.1 0 7.44 3.34 7.44 7.44v9.12c0 4.1-3.34 7.44-7.44 7.44h-3.69V0zm3.84 9.12a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8zm-5.43-9.12H7.44C3.34 0 0 3.34 0 7.44v9.12C0 20.66 3.34 24 7.44 24h3.84V0zm-3.6 15.6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z" />
  </svg>
);

// Real Official Discord SVG
export const DiscordIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// Real Official X (Twitter) SVG
export const XTwitterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Real Official YouTube SVG
export const YouTubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Real Official Twitch SVG
export const TwitchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
  </svg>
);

// Real Official TikTok SVG
export const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

// Real Official LinkedIn SVG
export const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/>
  </svg>
);

// Real Official Facebook SVG
export const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Real Official Instagram SVG
export const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
