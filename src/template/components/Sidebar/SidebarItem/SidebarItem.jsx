import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './SidebarItem.css';

export default function SidebarItem({
  tagName = 'div',
  itemRef,
  className,
  icon,
  iconMini,
  label,
  path,
  isActive,
  counter,
  routes = [],
  isNestedRoutesCollapsed = true,
  onItemClick = () => {},
  onNestedBlockCollapseToggle = () => {},
}) {
  const hasNestedElements = routes && !!routes.length;

  const [nestedBlockCollapsed, setNestedBlockCollapsed] = useState(isNestedRoutesCollapsed);

  const TagName = getProperTagName();
  const linkProps = {
    to: path,
  };

  return (
    <>
      <TagName
        ref={itemRef}
        className={clsx('sidebar-item', className, {
          'sidebar-item--has-nested': hasNestedElements,
          'sidebar-item--active': isActive,
        })}
        onClick={handleClick}
        title={label}
        {...linkProps}
      >
        {icon && (
          <span className="sidebar-item__icon-container">
            <FontAwesomeIcon icon={icon} fixedWidth className="sidebar-item__icon" />

            {!!counter && (
              <span className="sidebar-item__counter">{counter}</span>
            )}
          </span>
        )}

        {iconMini && (
          <span className="sidebar-item__mini-container">
            <FontAwesomeIcon icon={iconMini} fixedWidth className="sidebar-item__icon-mini" />
          </span>
        )}

        <span className="sidebar-item__box">
          <span className="sidebar-item__content">{label}</span>

          {hasNestedElements && (
            <FontAwesomeIcon
              fixedWidth
              icon={nestedBlockCollapsed ? faChevronDown : faChevronUp}
              className="sidebar-item__drop-arrow"
            />
          )}
        </span>
      </TagName>

      {hasNestedElements && !nestedBlockCollapsed && (
        <div className="sidebar-item__nested">
          {routes.map((nestedRouteProps) => (
            <SidebarItem
              {...nestedRouteProps}
              key={nestedRouteProps.id || nestedRouteProps.path}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </>
  );

  function handleClick(e) {
    if (hasNestedElements) {
      setNestedBlockCollapsed(!nestedBlockCollapsed);
      onNestedBlockCollapseToggle();

      e.preventDefault();

      return;
    }

    onItemClick();
  }

  function getProperTagName() {
    let resultTagName = tagName;

    if (path) {
      resultTagName = Link;
    }

    if (hasNestedElements) {
      resultTagName = 'div';
    }

    return resultTagName;
  }
}
