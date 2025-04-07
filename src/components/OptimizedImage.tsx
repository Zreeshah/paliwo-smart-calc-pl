
import React, { useEffect, useRef } from 'react';
import { getOptimizedImagePath, lazyLoadImage, imagePlaceholder } from '@/utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  loading = 'lazy',
  priority = false,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const optimizedSrc = getOptimizedImagePath(src);
  
  useEffect(() => {
    if (!priority && imageRef.current && loading === 'lazy') {
      lazyLoadImage(imageRef.current);
    }
  }, [priority, loading]);

  return (
    <img
      ref={imageRef}
      src={priority ? optimizedSrc : imagePlaceholder(width, height)}
      data-src={!priority ? optimizedSrc : undefined}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${!priority ? 'opacity-0 transition-opacity duration-300' : ''}`}
      loading={loading}
      onLoad={(e) => {
        if (e.currentTarget.classList.contains('opacity-0')) {
          e.currentTarget.classList.remove('opacity-0');
        }
      }}
    />
  );
};

export default OptimizedImage;
