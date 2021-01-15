import React, { useRef } from 'react';
import clsx from 'clsx';

import { useStickyHeader } from './hooks/useStickyHeader';

import './ContentCard.css';

const isIE = window.MSInputMethodContext && document.documentMode;

export default function ContentCard({
  style,
  className = '',
  isStickyHead,
  headerContent,
  children,
}) {
  const topSentinelRef = useRef();
  const bottomSentinelRef = useRef();

  const isHeaderStuck = isStickyHead && !isIE ? useStickyHeader(topSentinelRef, bottomSentinelRef) : false;

  return (
    <div
      style={style}
      className={`content-card ${className}`}
    >
      {isStickyHead && (
        <div ref={topSentinelRef} className="content-card__sentinel content-card__sentinel--top" />
      )}

      {headerContent && (
        <div
          className={clsx('content-card__header', {
            'content-card__header--sticky': isStickyHead,
            'content-card__header--sticky-stuck': isHeaderStuck,
          })}
        >
          {headerContent}
        </div>
      )}

      <div className="content-card__body">
        {children}
      </div>

      {isStickyHead && (
        <div ref={bottomSentinelRef} className="content-card__sentinel content-card__sentinel--bottom" />
      )}
    </div>
  );
}
