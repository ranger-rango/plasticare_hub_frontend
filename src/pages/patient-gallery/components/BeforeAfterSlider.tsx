import { useState, useRef, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

interface BeforeAfterSliderProps {
  beforeImage: string;
  beforeImageAlt: string;
  afterImage: string;
  afterImageAlt: string;
  patientName: string;
  procedure: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  beforeImageAlt,
  afterImage,
  afterImageAlt,
  patientName,
  procedure
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => setIsDragging(false));
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', () => setIsDragging(false));

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', () => setIsDragging(false));
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', () => setIsDragging(false));
      };
    }
  }, [isDragging]);

  return (
    <div className="relative w-full h-full group">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden rounded-2xl cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-success/90 backdrop-blur-sm text-success-foreground px-4 py-2 rounded-full font-medium text-sm shadow-soft">
            After
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-muted/90 backdrop-blur-sm text-muted-foreground px-4 py-2 rounded-full font-medium text-sm shadow-soft">
            Before
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-primary shadow-brand cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-brand-hover flex items-center justify-center">
            <Icon name="ArrowLeftRight" size={24} className="text-primary-foreground" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-confident">
        <p className="font-headline text-lg font-semibold text-text-primary mb-1">
          {patientName}
        </p>
        <p className="text-sm text-text-secondary">{procedure}</p>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;