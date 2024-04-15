import React, { useEffect } from "react"
import c from './elements.module.css';
import Prism from "prismjs";
import { Highlight, themes } from "prism-react-renderer"


interface Props {
    children: React.ReactNode;
    language: string;
    content: string;
}

export const Fence = ({ language, content }: Props) => {
    useEffect(() => {
        Prism.highlightAll();
    });
    const code = content.trim();
    return (
        <div className={c.fence}>
            <div className={c.fenceHeader}>
                {language}
            </div>
            <Highlight theme={themes.vsDark} code={code} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre style={style} className={c.pre}>
                        {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    <span className={c.unselectable}>{(i + 1).toString().padStart(3, " ")} </span>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                        ))}
                    </pre>
                )}
            </Highlight>

        </div>
    )
}

/*
            <pre className={c.pre}>
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
            */