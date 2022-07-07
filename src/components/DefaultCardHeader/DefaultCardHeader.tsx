import { ReactNode } from 'react';
import './DefaultCardHeader.css';

function DefaultCardHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="default-card-header">{children}</div>
  );
}

export default DefaultCardHeader;
