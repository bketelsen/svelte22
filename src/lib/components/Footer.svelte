<script>
  import Socials from './Socials.svelte';

	import { twitter, twitch, youtubePlay, github } from 'svelte-awesome/icons';
	import Icon from 'svelte-awesome';

	import { siteAuthor } from '$lib/config';
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
	<div class="grid grid-flow-col gap-4">
		<a href="/api/rss.xml" rel="external" class="link link-hover">RSS</a>
		<a href="/blog/category" class="link link-hover">Categories</a>
		<a href="/now" class="link link-hover">Now</a>
		<a href="/uses" class="link link-hover">Uses</a>
		<a href="/liam" class="link link-hover">Liam</a>
	</div>
	<div>
<Socials></Socials>
	</div>
	<div>
		<p>Copyright © {new Date().getFullYear()} - {siteAuthor}</p>
	</div>
</footer>
