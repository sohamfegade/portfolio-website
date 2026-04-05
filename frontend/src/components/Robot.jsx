import React, { forwardRef } from 'react';

const Robot = forwardRef(({ className, style }, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 200 320"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="limbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="antennaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* === SHADOW ON GROUND === */}
      <ellipse className="robot-shadow" cx="100" cy="310" rx="45" ry="8" fill="rgba(0,0,0,0.25)" />

      {/* === LEFT LEG === */}
      <g className="robot-left-leg">
        <rect x="60" y="230" width="22" height="40" rx="8" fill="url(#limbGrad)" />
        <circle cx="71" cy="268" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="58" y="270" width="24" height="30" rx="8" fill="url(#limbGrad)" />
        <rect x="48" y="295" width="40" height="14" rx="7" fill="#475569" />
        <rect x="48" y="295" width="40" height="8" rx="5" fill="#64748b" />
      </g>

      {/* === RIGHT LEG === */}
      <g className="robot-right-leg">
        <rect x="118" y="230" width="22" height="40" rx="8" fill="url(#limbGrad)" />
        <circle cx="129" cy="268" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="116" y="270" width="24" height="30" rx="8" fill="url(#limbGrad)" />
        <rect x="110" y="295" width="40" height="14" rx="7" fill="#475569" />
        <rect x="110" y="295" width="40" height="8" rx="5" fill="#64748b" />
      </g>

      {/* === BODY === */}
      <g className="robot-body" filter="url(#shadow)">
        <rect x="50" y="130" width="100" height="105" rx="18" fill="url(#bodyGrad)" />
        <rect x="62" y="142" width="76" height="70" rx="12" fill="#4f46e5" opacity="0.6" />
        <circle cx="100" cy="175" r="14" fill="#0f172a" />
        <circle cx="100" cy="175" r="10" fill="#22d3ee" filter="url(#glow)" opacity="0.9" />
        <circle cx="100" cy="175" r="5" fill="#fff" opacity="0.7" />
        <circle cx="72" cy="152" r="3" fill="#312e81" />
        <circle cx="128" cy="152" r="3" fill="#312e81" />
        <circle cx="72" cy="204" r="3" fill="#312e81" />
        <circle cx="128" cy="204" r="3" fill="#312e81" />
        <rect x="55" y="222" width="90" height="14" rx="6" fill="#475569" />
        <rect x="88" y="222" width="24" height="14" rx="4" fill="#fbbf24" />
      </g>

      {/* === LEFT ARM (static, hangs down) === */}
      <g className="robot-left-arm">
        <circle cx="45" cy="145" r="10" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
        <rect x="32" y="150" width="20" height="45" rx="9" fill="url(#limbGrad)" />
        <circle cx="42" cy="195" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="32" y="198" width="20" height="35" rx="9" fill="url(#limbGrad)" />
        <circle cx="42" cy="238" r="10" fill="#475569" />
        <rect x="34" y="240" width="4" height="10" rx="2" fill="#64748b" />
        <rect x="40" y="242" width="4" height="9" rx="2" fill="#64748b" />
        <rect x="46" y="240" width="4" height="8" rx="2" fill="#64748b" />
      </g>

      {/* === RIGHT ARM (static, hangs down) === */}
      <g className="robot-right-arm">
        <circle cx="155" cy="145" r="10" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
        <rect x="148" y="150" width="20" height="45" rx="9" fill="url(#limbGrad)" />
        <circle cx="158" cy="195" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="148" y="198" width="20" height="35" rx="9" fill="url(#limbGrad)" />
        <circle cx="158" cy="238" r="10" fill="#475569" />
        <rect x="152" y="240" width="4" height="10" rx="2" fill="#64748b" />
        <rect x="158" y="242" width="4" height="9" rx="2" fill="#64748b" />
        <rect x="164" y="240" width="4" height="8" rx="2" fill="#64748b" />
      </g>

      {/* === NECK === */}
      <rect x="85" y="115" width="30" height="20" rx="6" fill="#475569" />
      <rect x="92" y="118" width="16" height="14" rx="4" fill="#64748b" />

      {/* === HEAD === */}
      <g className="robot-head">
        <rect x="96" y="30" width="8" height="25" rx="3" fill="#94a3b8" />
        <circle className="robot-antenna-ball" cx="100" cy="26" r="8" fill="url(#antennaGlow)" filter="url(#glow)" />
        <circle cx="100" cy="26" r="4" fill="#fff" opacity="0.5" />

        <rect x="40" y="50" width="120" height="70" rx="20" fill="url(#headGrad)" filter="url(#shadow)" />
        <rect x="52" y="58" width="96" height="50" rx="14" fill="url(#screenGrad)" />

        <circle cx="78" cy="80" r="10" fill="#0f172a" />
        <circle className="robot-eye-left" cx="78" cy="80" r="7" fill="#34d399" filter="url(#glow)" />
        <circle cx="76" cy="77" r="2.5" fill="#fff" opacity="0.6" />

        <circle cx="122" cy="80" r="10" fill="#0f172a" />
        <circle className="robot-eye-right" cx="122" cy="80" r="7" fill="#34d399" filter="url(#glow)" />
        <circle cx="120" cy="77" r="2.5" fill="#fff" opacity="0.6" />

        <path d="M 85 96 Q 100 108 115 96" stroke="#34d399" strokeWidth="3" fill="none" strokeLinecap="round" />

        <rect x="30" y="68" width="14" height="28" rx="7" fill="#818cf8" stroke="#6366f1" strokeWidth="1.5" />
        <rect x="156" y="68" width="14" height="28" rx="7" fill="#818cf8" stroke="#6366f1" strokeWidth="1.5" />
      </g>
    </svg>
  );
});

Robot.displayName = 'Robot';

export default Robot;
