import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";

import Unfonts from 'unplugin-fonts/vite'
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

installGlobals();

export default defineConfig({
  plugins: [
    Unfonts({
      google: {
        families: ['Crimson Pro', 'Open Sans', 'Material+Icons', '"Chakra Petch"'],
      },
    }),


    remix(),
    netlifyPlugin(),

    tsconfigPaths()],
});
