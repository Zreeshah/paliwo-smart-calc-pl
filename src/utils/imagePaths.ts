
// Utility function to ensure image paths are correct regardless of environment
export const getImagePath = (imageName: string): string => {
  return `/lovable-uploads/${imageName}`;
};
