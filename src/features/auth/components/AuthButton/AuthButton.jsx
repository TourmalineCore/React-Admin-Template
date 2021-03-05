import './AuthButton.css';

export default function AuthButton({
  style = {},
  type = 'button',
  children,
  className = '',
  disabled = false,
  onClick = () => {},
}) {
  return (
    <div>
      <button
        style={style}
        type={type} // eslint-disable-line
        className={`auth-button__button ${className}}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
