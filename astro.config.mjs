// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	site: 'https://lab-tecnosocial.github.io',
	base: '/yupay-web',
	integrations: [mdx(), sitemap()],
});
