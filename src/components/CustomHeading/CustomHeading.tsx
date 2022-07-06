import { ReactNode } from 'react';
import './CustomHeading.css';

function CustomHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="custom-heading">{children}</div>
  );
}

export default CustomHeading;
