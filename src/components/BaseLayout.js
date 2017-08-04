import React from 'react';

import { NavLink } from 'react-router-dom';

function BaseLayout ({children}) {
  return (
    <div>
      <div>
        <NavLink to="/">Bank</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
      {children}
    </div>
  );
}

export default BaseLayout;