import { AppBar, CssBaseline, Link, Toolbar, Typography } from "@mui/material"

export const Menu = () => {
    return (
        <header>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                
                }}>
                    <Typography variant="h6" component="div">
                        krzs.dev
                    </Typography>
                    <div style={{
                        display: "flex",
                        gap: "2rem",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "flex-end"
                    }}>
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/about">About</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}

