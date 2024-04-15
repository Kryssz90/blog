import { PropsWithChildren } from "react";
import classes from "./elements.module.css";

interface Props {
    ordered?: boolean;
}

export const List = ({ children, ordered }: PropsWithChildren<Props>) => {
    const ListComponent = ordered ? "ol" : "ul";
    return <ListComponent
        style={{
            listStyleType: ordered ? 'decimal' : 'disc',
            listStylePosition: 'inside',
            
            padding: 0,
            margin: 0,
        }}
    >{children}</ListComponent>
}

export const ListItem = ({ children }: PropsWithChildren<{}>) => {
    return <li className={classes.li}> {children}</li>
    
}