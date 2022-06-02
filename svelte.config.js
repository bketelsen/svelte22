import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const rehypePlugins = [
	rehypeSlug,
	[
		rehypeAutolinkHeadings,
		{
			behavior: 'prepend',
			content: {
				type: 'element',
				tagName: 'span',
				properties: {
					className: [
						'mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1'
					]
				},
				children: [
					{
						type: 'text',
						value: '#'
					}
				]
			}
		}
	]
];
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or  used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: rehypePlugins
		})
	],

	kit: {
		prerender: {
			default: true
		},
		adapter: adapter(),

		// Allows reading from files in the root directory. Necessary for loading the README on the homepage, but nothing else.
		vite: {
			server: {
				fs: {
					allow: ['.']
				}
			}
		}
	}
};

export default config;
