import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex, escapeSvelte } from "mdsvex";

import { createHighlighter } from 'shiki';

const theme = 'vitesse-dark';
const highlighter = await createHighlighter({
	themes: [theme],
  // When you need to add a new language - add it here
  // languages supported: https://shiki.style/languages
  // ansi formatting help:
  //    - https://raw.githubusercontent.com/shikijs/shiki/refs/heads/main/docs/languages.md
  //    - https://fallendeity.github.io/discord.py-masterclass/markdown-and-ansi/#foreground-colors
  langs: ["asm", "svelte", "cpp", "c", "apl", "javascript", "typescript", "jsx", "sh", "py", "make"],
});



/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: [".svelte", ".md"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      highlight: {
        highlighter: async (code, lang = 'text') => {
          const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
          return `{@html \`${html}\` }`;
        }
      }
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      fallback: "404.html",
    }),
    alias: {
      $lib: "./src/lib",
      $types: "./src/lib/types",
      $posts: "./src/blog-posts",
    },
  },
};

export default config;
