<script>
	import { siteAuthor } from '$lib/config';
	export let byte;
	import { DateTime } from 'luxon';
	const created = DateTime.fromISO(byte.created);
</script>

<a href={byte.url} class="">
	<div class="card w-96 bg-base-100 shadow-lg hover:shadow-2xl">
		<div class="card-body">
			<h2 class="card-title">{created.toISODate()}</h2>
			<h2 class="card-title">{byte.title}</h2>
			<p>{byte.summary}</p>
		</div>
	</div>
</a>
