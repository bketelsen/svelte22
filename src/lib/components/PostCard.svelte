<script>
	import { siteAuthor } from '$lib/config';
	export let post;
	$: primaryCategory = post.categories[0] || '';
</script>

<div class="flex flex-col rounded-lg shadow-lg hover:shadow-2xl overflow-hidden">
	<div class="flex-shrink-0">
		<img class="h-48 w-full object-cover" src={post.coverImage} alt="" />
	</div>
	<div class="flex-1 bg-base-100 p-6 flex flex-col justify-between">
		<div class="flex-1">
			<p class="text-sm font-medium text-primary">
				<a href="/blog/category/{primaryCategory}" class="uppercase hover:underline">
					{primaryCategory}
				</a>
			</p>
			<a href="/blog/{post.slug}" class="block mt-2">
				<p class="text-xl font-semibold text-base-content">{post.title}</p>
				<p class="mt-3 text-base text-base-content">{post.excerpt}</p>
			</a>
		</div>
		<div class="mt-6 flex items-center">
			<div class="flex-shrink-0">
				<a href="/about">
					<span class="sr-only">{siteAuthor}</span>
					<img class="h-10 w-10 rounded-full" src="/favicon.png" alt="Brian" />
				</a>
			</div>
			<div class="ml-3">
				<p class="text-sm font-medium text-base-content">
					<a href="/about" class="hover:underline"> {siteAuthor} </a>
				</p>
				<div class="flex space-x-1 text-sm text-base-content">
					<time datetime="2020-03-10"> Mar 10, 2020 </time>
					<span aria-hidden="true"> &middot; </span>
					<span> 4 min read </span>
				</div>
			</div>
		</div>
	</div>
</div>
