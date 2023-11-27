import { useState, useEffect } from 'react';

const useScrollVisible = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById(elementId)?.offsetTop;

      if (elementPosition && scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId]);

  return isVisible;
};

export default useScrollVisible;
