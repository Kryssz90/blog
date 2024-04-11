import { Link } from "@mui/material";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Markdown } from "~/components/Markdown";
import { fetchMarkdownFileFs } from "~/services/markdown.server";

export async function loader({ params }: LoaderFunctionArgs) {
    const {id} = params;
    if (!id) {
        throw Error(`Error: Missing blog id.`);
    }
  const [status, state, article] = await fetchMarkdownFileFs(`md/blog`, id);
  if (status !== 200 || !article) {
    throw Error(`Error (${status}) ${state}: Failed to fetch blog articles.`);
  }

  return json({ article }, { headers: { 'cache-control': 'public, max-age=7200' } });
}

export default function Index() {
  const { article } = useLoaderData<typeof loader>();

  return <>
  <Link href="/blog">Back to all</Link>
    <Markdown content={article.content} />
  </>
}