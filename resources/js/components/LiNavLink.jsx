import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import '@components/LiNavLink.css';

function LiNavLink({ to, label, activeOnlyWhenExact = true }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div
      className={`list-group-item list-group-item-action${
        match ? ' active' : ''
      }`}
    >
      <NavLink to={to}>{label}</NavLink>
    </div>
  );
}

export default LiNavLink;
