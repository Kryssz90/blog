import { Card, CardContent, Typography } from "@mui/material";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { Markdown } from "~/components/Markdown";
import { fetchBlogFilesFrontMatters } from "~/services/markdown.server";

/**
 * Return the date in 2005-12-31 format
 * @param date The date to format
 */
const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
}


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
        <Typography variant="h3" component="h1">
            Blog
        </Typography>
        <ul>
            {list.map((article, index) => (
                <Card component="li" key={index} sx={{ m: 3, cursor: "pointer" }} onClick={() => {
                    navigate(`/blog/${article.slug}`);
                }}>
                    <CardContent>
                        <Typography variant="caption" component="p">
                            {formatDate(article.date)}
                        </Typography>
                        <Typography variant="h4" component="h2">
                            {article.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {article.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </ul>
    </>
}