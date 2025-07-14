<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet">
</svelte:head>

<Header></Header>

<div class="p-3 container mx-auto">
	{@render children()}
</div>


