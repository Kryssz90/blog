import { PropsWithChildren } from "react";

interface Props {
    level: number;
}

export const Heading = ({ children, level }: PropsWithChildren) => {
    
    return <h1>{children}</h1>;
}