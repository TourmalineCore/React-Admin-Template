import React, { useState } from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './AuthField.css';

export default function AuthField({
  inputId,
  icon,
  type = 'text',
  placeholder,
  value = '',
  isInvalid = false,
  validationMessage,
  onChange = () => {},
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div
      className={clsx('auth-field', {
        'auth-field--invalid': isInvalid,
      })}
    >
      <label className="auth-field__icon" htmlFor={inputId}>
        <FontAwesomeIcon icon={icon} />
      </label>

      <div className="auth-field__input-box">
        {isInvalid && (
          <div className="auth-field__error">
            {validationMessage}
          </div>
        )}

        <input
          id={inputId}
          className="auth-field__input"
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {type === 'password' && (
          <button
            className="auth-field__show-password"
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <FontAwesomeIcon className="auth-field__view" icon={isPasswordVisible ? faEyeSlash : faEye} />
          </button>
        )}
      </div>
    </div>
  );
}
