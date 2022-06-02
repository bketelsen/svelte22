<script context="module">
	export const load = async ({ fetch }) => {
		const bytesRes = await fetch(`/api/bytes.json`);
		const { bytes } = await bytesRes.json();
		return {
			props: { bytes }
		};
	};
</script>

<script>
	import { siteTitle, siteDescription } from '$lib/config';
	import ByteList from '$lib/components/ByteList.svelte';
	export let bytes;
</script>

<svelte:head>
	<title>Bytes | {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<ByteList {bytes} />
