<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script context="module">
	export const load = async ({ params }) => {
		try {
			const post = await import(`../../lib/posts/${params.post}.md`);

			return {
				props: {
					PostContent: post.default,
					meta: { ...post.metadata, slug: params.post }
				}
			};
		} catch (error) {
			return {
				status: 404,
				error: error.message
			};
		}
	};
</script>

<script>
	export let PostContent;
	export let meta;
	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = meta;
	$: primaryCategory = categories[0] || '';
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<div class="relative py-16 bg-base-100 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="text-lg max-w-3xl mx-auto">
			<h1>
				<span class="block text-base text-center text-primary font-semibold tracking-wide uppercase"
					>{primaryCategory}</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-base-content sm:text-4xl"
					>{title}</span
				>
			</h1>
			{#if coverImage}
				<figure>
					<img class="mt-6 w-full rounded-lg" src={coverImage} alt="" width="1310" height="873" />
				</figure>
			{/if}
			<p class="mt-8 text-xl text-base-content italic leading-8">{excerpt}</p>
		</div>
		<div class="mt-6 prose prose-xl mx-auto">
			<svelte:component this={PostContent} />
		</div>
	</div>
</div>
