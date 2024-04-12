import { PropsWithChildren } from 'react';

import classes from './elements.module.css';

export const Paragraph = ({ children }: PropsWithChildren<{}>) => {
    return <p className={classes.paragraph}>
        {children}
    </p>
}