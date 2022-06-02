<script>
	import PostCard from './PostCard.svelte';
	export let posts = [];
	export let category = '';
	export let title = 'Blog';
	$: categoryTitle = category ? `Category: ${category}` : title;
</script>

<div class="relative bg-base-100 pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
	<div class="absolute inset-0">
		<div class="bg-base-200 h-1/3 sm:h-2/3" />
	</div>
	<div class="relative max-w-7xl mx-auto">
		<div class="text-center">
			<h2 class="text-3xl tracking-tight font-extrabold text-base-content sm:text-4xl">
				{categoryTitle}
			</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl italic text-accent sm:mt-4">
				Because it was too long for a tweet
			</p>
		</div>
		<div
			class="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-none"
		>
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</div>
</div>
