import React, { useState } from 'react';

import { faEllipsisV, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ActionsBlockOverlay from './ActionsBlockOverlay';

import './ActionsBlock.css';

const ActionsBlock = (props) => {
  const [showActions, setShowActions] = useState(false);

  const {
    availableActions,
  } = props;

  const appliedAvailableActions = availableActions.filter((action) => !action.isNotPartOfActionBlock);

  return (
    <>
      {
        showActions && (
          <ActionsBlockOverlay onClose={toggleShowActions} />
        )
      }
      <div
        className="actions-block"
        style={{
          // stylelint-disable-next-line
          zIndex: showActions ? 3000 : 1029,
        }}
      >
        {
          showActions && (
          <ul className="actions-block__list">
            {
              appliedAvailableActions.map((action) => {
                const {
                  key,
                  icon,
                  text,
                  onClick,
                  disabled,
                } = action;

                return (
                  <li key={`actions-block__item-${key}`} className="actions-block__item">
                    <button
                      className="actions-block__action-button actions-block__action-button--wide"
                      type="button"
                      disabled={disabled}
                      onClick={() => onActionClick(onClick)}
                    >
                      <span className="actions-block__action-title">
                        {text}
                      </span>
                    </button>
                    {icon && (
                    <button
                      className="actions-block__action-button actions-block__action-button--round"
                      type="button"
                      disabled={disabled}
                      onClick={() => onActionClick(onClick)}
                    >
                      {icon}
                    </button>
                    )}
                  </li>
                );
              })
            }
            {
              !appliedAvailableActions.length && (
                <li className="actions-block__item">
                  <span className="actions-block__no-actions">
                    no actions
                  </span>
                </li>
              )
            }
          </ul>
          )
        }
        <button
          type="button"
          className="actions-block__toggler"
          onClick={toggleShowActions}
        >
          {
              showActions ? (
                <FontAwesomeIcon
                  fixedWidth
                  icon={faTimes}
                  className="actions-block__icon"
                />
              ) : (
                <>
                  <FontAwesomeIcon
                    fixedWidth
                    icon={faChevronDown}
                    className="actions-block__icon actions-block__icon--desktop"
                  />
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="actions-block__icon actions-block__icon--mobile"
                  />
                </>
              )
            }
          <span className="actions-block__toggler-text">Actions</span>
        </button>
      </div>
    </>
  );

  function onActionClick(onClick) {
    toggleShowActions();
    if (onClick) onClick();
  }

  function toggleShowActions() {
    setShowActions(!showActions);
  }
};

export default ActionsBlock;
