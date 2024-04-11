import { PropsWithChildren } from "react";
import { List as MUIList, ListItem as ListItemMUI, ListItemText, Box, Stack, ListItemIcon } from '@mui/material';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

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
    
    return <li
        style={{
            paddingLeft: 0,
            marginLeft: "1rem",
        }}
    > {children}</li>
    
}