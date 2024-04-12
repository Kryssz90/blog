import React from 'react';
import classes from './BlogItem.module.css';
import { Link, useNavigate } from '@remix-run/react';

interface Props {
    title: string;
    date: string;
    description: string;
    slug: string;
    tagName?: string;
}


/**
 * Return the date in 2005-12-31 format
 * @param date The date to format
 */
const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
}

export const BlogItem = ({title, date, description, slug, tagName = "div"}: Props) => {
    const Tag = tagName as keyof JSX.IntrinsicElements;
    const navigate = useNavigate();
    return (
        <Tag className={classes.blogItem} onClick={() => {
            navigate(`/blog/${slug}`);
        }}>
            <p className={classes.blogItemDate}>{formatDate(date)}</p>
            <h2 className={classes.blogItemTitle}>{title}</h2>
            <p>{description}</p>
            
        </Tag>
    )
}