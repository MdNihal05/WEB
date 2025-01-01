const CreativityLogo = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" aria-label="Creativity Logo">
    <defs>
      <linearGradient id="creativityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF1493" />
        <stop offset="100%" stopColor="#FF69B4" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#creativityGradient)" fillOpacity="0.2" />
    <path d="M30 70 Q50 20 70 70" fill="none" stroke="url(#creativityGradient)" strokeWidth="4" />
    <circle cx="30" cy="70" r="10" fill="url(#creativityGradient)" />
    <circle cx="70" cy="70" r="10" fill="url(#creativityGradient)" />
    <circle cx="50" cy="35" r="10" fill="url(#creativityGradient)" />
    <text x="50" y="90" fontSize="14" fontWeight="bold" fill="#FF1493" textAnchor="middle">CREATE</text>
  </svg>
);
