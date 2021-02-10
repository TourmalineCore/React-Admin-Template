import './CustomHeading.css';

export default function CustomHeading({
  children,
}) {
  return (
    <div className="custom-heading">{children}</div>
  );
}
