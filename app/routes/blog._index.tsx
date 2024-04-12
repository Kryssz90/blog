
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { BlogItem } from "~/components/BlogItem";

import { fetchBlogFilesFrontMatters } from "~/services/markdown.server";



export async function loader({ params }: LoaderFunctionArgs) {

    const [status, state, list] = await fetchBlogFilesFrontMatters<
        {
            title: string;
            date: string;
            description: string;
            slug: string;
        }
    >(`md/blog`,);
    if (status !== 200 || !list) {
        throw Error(`Error (${status}) ${state}: Failed to fetch list of articles.`);
    }

    return json({ list }, { headers: { 'cache-control': 'public, max-age=7200' } });
}

export default function Index() {
    const { list } = useLoaderData<typeof loader>();
    const navigate = useNavigate();
    return <>
        <h1 >
            Blog
        </h1>
        <ul>
            {list.map((article, index) => (
                <BlogItem title={article.title} date={article.date} description={article.description} slug={article.slug} key={index} tagName="li" />                
            ))}
        </ul>
    </>
}