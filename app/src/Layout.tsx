import React from 'react';
import Copyright from './Copyright';
import { Outlet } from '@remix-run/react';
import classes from './Layout.module.css';

export default function Layout({ children}: { children: React.ReactNode }) {
  return (
    <main className={classes.main}>
        {children}
        <Copyright />
    </main>
  );
}
