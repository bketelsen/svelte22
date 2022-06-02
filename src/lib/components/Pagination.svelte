<script>
	import { postsPerPage } from '$lib/config';

	export let currentPage;
	export let totalPosts;
	export let path = '/blog/page';

	let pagesAvailable;
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage);

	const isCurrentPage = (page) => page == currentPage;
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
		<div class="btn-group">
			{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page}
				<a href="{path}/{page}" role="button" class="btn {isCurrentPage(page) ? 'btn-active' : ''}"
					>{page}</a
				>
			{/each}
		</div>
	{/if}
{/key}
