import React from 'react';
import c from './elements.module.css'

interface Props {
    content: string;
}

export const Code = ({ content }: Props) => {
    return <span className={c.inlineCode}>{content}</span>
}