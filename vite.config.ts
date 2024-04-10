import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup"
import tsconfigPaths from "vite-tsconfig-paths";
import remarkGfm from 'remark-gfm'

installGlobals();

export default defineConfig({
  plugins: [mdx({
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  }), remix(), tsconfigPaths() ],
});
