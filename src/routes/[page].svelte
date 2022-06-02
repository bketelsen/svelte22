<script context="module">
	export const load = async ({ params }) => {
		try {
			const page = await import(`../lib/pages/${params.page}.md`);

			return {
				props: {
					PageContent: page.default,
					meta: { ...page.metadata, slug: params.page }
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
	export let PageContent;
	export let meta;
</script>

<svelte:head>
	<title>{meta.title} | Brian Ketelsen</title>
	<meta data-key="description" name="description" content={meta.excerpt} />
</svelte:head>

<div class="bg-base-100 overflow-hidden">
	<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="hidden lg:block bg-base-200 absolute top-0 bottom-0 left-3/4 w-screen" />
		<div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
			<div>
				<div class="text-base text-primary font-semibold tracking-wide uppercase breadcrumbs">
					<ul>
						<li>
							<a href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="w-4 h-4 mr-2 stroke-current"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
									/></svg
								>
								Home
							</a>
						</li>
						<li>
							{meta.title}
						</li>
					</ul>
				</div>
				<h3
					class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-base-content sm:text-4xl"
				>
					{meta.title}
				</h3>
			</div>
		</div>
		<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
			<div class="relative lg:row-start-1 lg:col-start-2">
				<svg
					class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="de316486-4a29-4312-bdfc-fbce2132a2c1"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect
								x="0"
								y="0"
								width="4"
								height="4"
								class="text-primary-content"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
				</svg>
				<div class="relative text-base mx-auto max-w-prose lg:max-w-none">
					<figure>
						<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
							<img
								class="rounded-lg shadow-lg object-cover object-center"
								src={meta.coverImage}
								alt="Whitney leaning against a railing on a downtown street"
								width="1184"
								height="1376"
							/>
						</div>
						{#if meta.coverCaption}
							<figcaption class="mt-3 flex text-sm text-gray-500">
								<!-- Heroicon name: solid/camera -->
								<svg
									class="flex-none w-5 h-5 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="ml-2">{meta.coverCaption}</span>
							</figcaption>
						{/if}
					</figure>
				</div>
			</div>
			<div class="mt-8 lg:mt-0">
				<div class="text-base max-w-prose mx-auto lg:max-w-none">
					<p class="text-lg text-gray-500">{meta.excerpt}</p>
				</div>
				<div
					class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
				>
					<svelte:component this={PageContent} />
				</div>
			</div>
		</div>
	</div>
</div>
