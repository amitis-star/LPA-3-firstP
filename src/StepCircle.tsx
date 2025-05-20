import React, { useEffect, useState } from "react";

type SegmentedRingProps = {
  current: number;
  total?: number;
};

const SegmentedRing: React.FC<SegmentedRingProps> = ({
  current,
  total = 8,
}) => {
  const size = 64;
  const center = size / 2;
  const outerRadius = 30;
  const innerRadius = 24;
  const gap = 6;
  const segments = Array.from({ length: total });

  const [animatedCurrent, setAnimatedCurrent] = useState(current);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedCurrent(current);
    }, 100);
    return () => clearTimeout(timeout);
  }, [current]);

  const getPath = (startAngle: number, endAngle: number) => {
    const startOuter = polarToCartesian(center, center, outerRadius, endAngle);
    const endOuter = polarToCartesian(center, center, outerRadius, startAngle);
    const startInner = polarToCartesian(
      center,
      center,
      innerRadius,
      startAngle
    );
    const endInner = polarToCartesian(center, center, innerRadius, endAngle);

    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}`,
      `L ${startInner.x} ${startInner.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${endInner.x} ${endInner.y}`,
      `Z`,
    ].join(" ");
  };

  return (
    <div className="relative w-16 h-16">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        <defs>
          <linearGradient
            id="activeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="100%" stopColor="#01986F" />
          </linearGradient>
        </defs>
        {segments.map((_, i) => {
          const angle = 360 / total;
          const startAngle = i * angle + gap / 2;
          const endAngle = (i + 1) * angle - gap / 2;

          return (
            <path
              key={i}
              d={getPath(startAngle, endAngle)}
              fill={i < animatedCurrent ? "url(#activeGradient)" : "#e5e7eb"}
            />
          );
        })}
      </svg>

      {/* Center circle with text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 flex items-center justify-center">
          <span className="text-[18px] font-bold text-gray-800">
            {current}/{total}
          </span>
        </div>
      </div>
    </div>
  );
};

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export default SegmentedRing;
