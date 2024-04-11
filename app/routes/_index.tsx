import * as React from 'react';
import type { MetaFunction } from '@remix-run/node';
import { Link as RemixLink } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: 'Remix Starter' },
  { name: 'description', content: 'Welcome to remix!' },
];

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Krisztián Zsobrák
      </Typography>
        Check out my{" "}
      <Link to="/blog" color="secondary" component={RemixLink}>
        Blog
      </Link>.
    </React.Fragment>
  );
}
