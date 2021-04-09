import { useRef, useEffect } from 'react';

export function useSidebarSwipe({
  sidebarContainerRef,
  isMobileOpened = false,
  onClose,
}) {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    touchStartX.current = null;
    touchEndX.current = null;

    if (isMobileOpened) {
      addOrRemoveEventListeners(true);
    } else {
      addOrRemoveEventListeners(false);
    }

    return () => {
      addOrRemoveEventListeners(false);
    };
  }, [isMobileOpened]);

  return null;

  function addOrRemoveEventListeners(shouldAdd) {
    const eventsData = [
      {
        eventName: 'touchstart',
        onEventAction: handleTouchStart,
      },
      {
        eventName: 'touchmove',
        onEventAction: handleTouchMove,
      },
      {
        eventName: 'touchend',
        onEventAction: handleTouchEnd,
      },
    ];

    if (shouldAdd) {
      eventsData.forEach((x) => sidebarContainerRef.current.addEventListener(
        x.eventName,
        x.onEventAction,
        { passive: true },
      ));
    } else {
      eventsData.forEach(
        (x) => sidebarContainerRef.current.removeEventListener(x.eventName, x.onEventAction),
      );
    }
  }

  function handleTouchStart(e) {
    touchStartX.current = e.targetTouches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.targetTouches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    if (touchStartX.current - touchEndX.current > 100) {
      onClose();
    }
  }
}
