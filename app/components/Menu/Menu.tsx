import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import classes from "./Menu.module.css";

export const Menu = () => {
    return (
        <header className={classes.header}>
            <h5>krzs.dev</h5>
            <nav className={classes.nav}>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};
