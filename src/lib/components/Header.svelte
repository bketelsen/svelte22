<script>
	import { siteTitle } from '$lib/config';
	export let navItems;
</script>

<header class="text-base-content bg-base-300 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a href="/" class="flex title-font font-medium items-center text-base-content mb-4 md:mb-0">
			<img src="/favicon.png" alt={siteTitle} height="40" width="40" />

			<span class="ml-3 text-xl">{siteTitle}</span>
		</a>
		<nav
			class="md:ml-auto md:mr-auto flex flex-grow flex-wrap items-center text-base justify-end cursor-pointer"
		>
			{#each navItems as item}
				<a href={item.route}><span class="mr-5 font-bold hover:text-primary">{item.title}</span></a>
			{/each}
		</nav>
	</div>
</header>
