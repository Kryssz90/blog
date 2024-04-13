import * as React from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';


// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: 'Remix Starter' },
  { name: 'description', content: 'Welcome to remix!' },
];

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  return (
    <React.Fragment>
      <h1>
        Krisztián Zsobrák
      </h1>
        Check out my{" "}
      <Link to="/blog">
        Blog
      </Link>.
    </React.Fragment>
  );
}