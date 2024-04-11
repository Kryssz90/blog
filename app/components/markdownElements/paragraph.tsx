import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';
export const Paragraph = ({ children }: PropsWithChildren<{}>) => {
    return <Typography variant="body1" component="p">
        {children}
    </Typography>
}