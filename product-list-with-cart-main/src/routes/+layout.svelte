<script lang="ts">
	import '$lib/styles/app.css';

	let { children } = $props();
</script>

<main class="font-redhat bg-rose-50">
	{@render children()}
</main>
