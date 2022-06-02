<script context="module">
	export const load = async ({ fetch }) => {
		const postRes = await fetch(`/api/posts.json`);
		const { posts } = await postRes.json();

		return {
			props: { posts }
		};
	};
</script>

<script>
	import Hero from '../lib/components/Hero.svelte';
	import PostsList from '$lib/components/PostsList.svelte';

	export let posts;
</script>

<svelte:head>
	<title>Brian Ketelsen</title>
</svelte:head>
<Hero
	title="Hi! I'm Brian"
	description="Howdy! I'm a developer advocate and software engineer. I've got a knack for finding interesting new open-source projects. You can find them in the 'Bytes' section. There is plenty of good reading in the 'Blog' section too. Enjoy!"
	image="/images/pages/brian.jpg"
/>

<PostsList {posts} title="Recent Posts" />
