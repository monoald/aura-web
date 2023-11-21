import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://monoald.github.io/',
	base: '/aura-web',
	integrations: [mdx(), sitemap()],
});
