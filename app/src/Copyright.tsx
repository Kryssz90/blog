import { Link } from '@remix-run/react';
import * as React from 'react';

export default function Copyright() {
  return (
    <p style={{
      marginTop: '2rem',
    }}>
      {'Copyright © '}
      <Link to="https://krzs.dev">
        Krisztián Zsobrák
      </Link>{' '}
      {new Date().getFullYear()}.
    </p>
  );
}
