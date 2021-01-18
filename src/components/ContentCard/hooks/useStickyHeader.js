import { useEffect, useState } from 'react';

export const useStickyHeader = (topSentinelRef, bottomSentinelRef) => {
  const [isHeaderStuck, setIsHeaderStuck] = useState(false);

  useEffect(() => {
    const topObserver = new IntersectionObserver((records) => {
      for (const record of records) {
        const targetInfo = record.boundingClientRect;
        const rootBoundsInfo = record.rootBounds;

        // Started sticking.
        if (targetInfo.bottom < rootBoundsInfo.top) {
          setIsHeaderStuck(true);
        }

        // Stopped sticking.
        if (targetInfo.bottom >= rootBoundsInfo.top && targetInfo.bottom < rootBoundsInfo.bottom) {
          setIsHeaderStuck(false);
        }
      }
    }, { threshold: [0], root: null });

    const bottomObserver = new IntersectionObserver((records) => {
      for (const record of records) {
        const targetInfo = record.boundingClientRect;
        const rootBoundsInfo = record.rootBounds;
        const ratio = record.intersectionRatio;

        // Started sticking.
        if (targetInfo.bottom > rootBoundsInfo.top && ratio === 1) {
          setIsHeaderStuck(true);
        }

        // Stopped sticking.
        if (targetInfo.top < rootBoundsInfo.top && targetInfo.bottom < rootBoundsInfo.bottom) {
          setIsHeaderStuck(false);
        }
      }
    }, { threshold: [1], root: null });

    topObserver.observe(topSentinelRef.current);
    bottomObserver.observe(bottomSentinelRef.current);

    return () => {
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return isHeaderStuck;
};
