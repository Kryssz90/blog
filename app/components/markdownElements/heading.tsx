import { PropsWithChildren } from "react";

interface Props {
    level: number;
}


type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


const getTagForLevel = (level: number) :HeadingLevels => {
    switch (level) {
        case 1: return "h1";
        case 2: return "h2";
        case 3: return "h3";
        case 4: return "h4";
        case 5: return "h5";
        case 6: return "h6";
        default: return "h1";
    }
}

const getHeadingSignAmount = (level: number) => {
    switch (level) {
        case 1: return "#";
        case 2: return "##";
        case 3: return "###";
        case 4: return "####";
        case 5: return "#####";
        case 6: return "######";
        default: return "#";
    }
}

const getHeadingStyle = (level: number) => {
    switch (level) {
        case 1: return {
            fontSize: "2.5rem",
            fontWeight: 700,
            marginTop: "1.5rem",
            marginBottom: "1rem",
        };
        case 2: return {
            fontSize: "2rem",
            fontWeight: 700,
            marginTop: "1rem",
            marginBottom: "0.8rem",
        };
        case 3: return {
            fontSize: "1.5rem",
            fontWeight: 700,
            marginTop: "0.8rem",
            marginBottom: "0.6rem",
        };
        case 4: return {
            fontSize: "1.25rem",
            fontWeight: 700,
            marginTop: "0.6rem",
            marginBottom: "0.4rem",
           
        };
        case 5: return {
            fontSize: "1.25rem",
            fontWeight: 700,
            marginTop: "0.6rem",
            marginBottom: "0.4rem",
        };
        case 6: return {
            fontSize: "1rem",
            fontWeight: 700,
            marginTop: "0.6rem",
            marginBottom: "0.4rem",
        };
        default: return {
            fontSize: "2.5rem",
            fontWeight: 700,
            marginTop: "1.5rem",
            marginBottom: "1rem",
        };
    }
}


export const Heading = ({ children, level }: PropsWithChildren<Props>) => {
    const Heading = getTagForLevel(level);
    return <Heading
        style={getHeadingStyle(level)}
    >
       <span style={{color: "#454545"}}>{getHeadingSignAmount(level)}</span> {children}
    </Heading>
    
}