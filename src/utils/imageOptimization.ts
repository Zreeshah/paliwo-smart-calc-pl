
/**
 * Utility functions for optimizing image loading
 */

/**
 * Returns an image path with proper domain structure for deployment
 * @param path - The image path
 * @returns The complete URL to the image
 */
export const getOptimizedImagePath = (path: string): string => {
  // For paths that already include the full URL, return as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // For lovable-uploads assets, make sure they have the proper path
  if (path.includes('lovable-uploads') && !path.startsWith('/')) {
    return `/${path}`;
  }
  
  return path;
};

/**
 * Lazy loads an image with a simple fade-in effect
 * @param imageElement - The image DOM element to lazy load
 */
export const lazyLoadImage = (imageElement: HTMLImageElement): void => {
  if (!imageElement) return;
  
  // Create an observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the image is in viewport
      if (entry.isIntersecting) {
        // Get the data-src and put it as src
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.classList.add('fade-in');
        }
        // Stop observing the image
        observer.unobserve(img);
      }
    });
  });
  
  // Start observing
  observer.observe(imageElement);
};

/**
 * Generates a placeholder for images before they load
 */
export const imagePlaceholder = (width: number, height: number): string => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`;
};
