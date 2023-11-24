import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css'

export const Layout = () => {
    const { isLoggedIn } = useAuth();
    return (
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <header className={css.header}>
        <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

       {isLoggedIn && ( <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>)}

    </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    );
  };
