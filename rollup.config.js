import mdx from '@mdx-js/rollup'

/** @type {import('rollup').RollupOptions} */
const config = {
  // …
  plugins: [
    // …
    mdx({/* jsxImportSource: …, otherOptions… */})
  ]
}

export default config