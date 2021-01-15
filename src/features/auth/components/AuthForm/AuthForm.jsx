import { ReactComponent as BgLeft } from '../../../../assets/img/auth-bg-left.svg';
import { ReactComponent as BgRight } from '../../../../assets/img/auth-bg-right.svg';

import './AuthForm.css';

export default function AuthForm({
  children,
  errorMessages = [],
  onSubmit = () => {},
}) {
  return (
    <div className="auth-form">
      <BgLeft className="auth-form__bg-image auth-form__bg-image--left" />
      <BgRight className="auth-form__bg-image auth-form__bg-image--right" />

      <form className="auth-form__form" onSubmit={onSubmit}>
        <div className="auth-form__messages-box">
          {errorMessages.map((errorMessage) => (
            <div className="auth-form__message">{errorMessage}</div>
          ))}
        </div>

        {children}

        <div className="auth-form__controls">
          <button className="auth-form__button" type="submit">Войти</button>
        </div>
      </form>
    </div>
  );
}
