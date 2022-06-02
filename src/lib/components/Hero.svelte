<script>
	import Socials from './Socials.svelte';

	export let title;
	export let description;
	export let image;
</script>

<section class="text-base-content body-font">
	<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
		<img
			class="lg:w-4/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
			alt="hero"
			src={image}
		/>
		<div class="text-center lg:w-2/3 w-full">
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-base-content">{title}</h1>
			<p class="mb-8 leading-relaxed">{description}</p>

			<div class="flex justify-center">
				<a role="button" href="/blog" class="btn btn-primary">Blog</a>
				<a role="button" href="/bytes" class="ml-4 btn btn-secondary">Bytes</a>
			</div>
		</div>
	</div>
</section>
