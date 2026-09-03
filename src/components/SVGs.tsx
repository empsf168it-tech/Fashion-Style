import React from 'react';

// Corner Brackets
export const CornerTL: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    style={style}
  >
    <path d="M0 11.5V0.5H11.5" />
  </svg>
);

export const CornerTR: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    style={style}
  >
    <path d="M0.5 0.5H11.5V11.5" />
  </svg>
);

export const CornerBL: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    style={style}
  >
    <path d="M0 0.5V11.5H11.5" />
  </svg>
);

export const CornerBR: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    style={style}
  >
    <path d="M0.5 11.5H11.5V0.5" />
  </svg>
);

// Checkerboard Grid SVG (viewBox 0 0 36 18, 4 rows of 3.8x3.8 black squares; even rows shifted by 2.25)
export const CheckerboardGrid: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Generate 4 rows of squares
  const squareSize = 3.8;
  const gap = 1.2;
  const squares: React.ReactNode[] = [];

  for (let row = 0; row < 4; row++) {
    const y = row * (squareSize + gap);
    const xShift = row % 2 === 1 ? 2.25 : 0;
    for (let col = 0; col < 6; col++) {
      const x = col * (squareSize + gap * 2) + xShift;
      squares.push(
        <rect
          key={`${row}-${col}`}
          x={x}
          y={y}
          width={squareSize}
          height={squareSize}
          fill="currentColor"
        />
      );
    }
  }

  return (
    <svg
      viewBox="0 0 36 18"
      className={className}
      style={{
        width: 'var(--checker-w)',
        height: 'var(--checker-h)',
        display: 'inline-block',
        verticalAlign: 'middle',
        transform: 'translateY(2px)',
      }}
    >
      {squares}
    </svg>
  );
};

// Wireframe Globe SVG (viewBox 0 0 64 64, stroke 1.2: outer circle r=28, equator line, 2 horizontal ellipses, meridian line, 2 vertical ellipses)
export const WireframeGlobe: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className={className}
    style={{
      width: 'var(--globe)',
      height: 'var(--globe)',
    }}
  >
    {/* Outer circle */}
    <circle cx="32" cy="32" r="28" />
    {/* Equator */}
    <line x1="4" y1="32" x2="60" y2="32" />
    {/* Horizontal ellipses */}
    <ellipse cx="32" cy="32" rx="28" ry="14" />
    <ellipse cx="32" cy="32" rx="28" ry="22" />
    {/* Meridian */}
    <line x1="32" y1="4" x2="32" y2="60" />
    {/* Vertical ellipses */}
    <ellipse cx="32" cy="32" rx="14" ry="28" />
    <ellipse cx="32" cy="32" rx="22" ry="28" />
  </svg>
);
