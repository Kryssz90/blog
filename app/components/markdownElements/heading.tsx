import { PropsWithChildren } from "react";
import Typography from '@mui/material/Typography';

interface Props {
    level: number;
}


type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface ConfigType {
    variant: HeadingLevels;
    component: HeadingLevels;
}

const getTagForLevel = (level: number) :ConfigType => {
    switch (level) {
        case 1: return {variant: "h3", component: "h1"};
        case 2: return {variant: "h4", component: "h2"};
        case 3: return {variant: "h5", component: "h3"};
        case 4: return {variant: "h6", component: "h4"};
        case 5: return {variant: "h6", component: "h5"};
        case 6: return {variant: "h6", component: "h6"};
        default: return {variant: "h1", component: "h1"};
    }
}


export const Heading = ({ children, level }: PropsWithChildren<Props>) => {
    const {variant, component} = getTagForLevel(level);
    return <Typography variant={variant} component={component}
        sx={{
            fontFamily: '"Chakra Petch", sans-serif',
        }}
    >
        {children}
    </Typography>
    
}