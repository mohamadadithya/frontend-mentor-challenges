<script lang="ts">
	import CartPanel from '$lib/components/CartPanel.svelte';
	import Container from '$lib/components/Container.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import products from '$lib/data.json';
	import { cart } from '$lib/stores/cart.svelte';

	$inspect(cart.items);
</script>

<svelte:head>
	<title>Frontend Mentor | Product list with cart</title>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
</svelte:head>

<section class="min-h-dvh py-8">
	<Container>
		<h1 class="text-4xl font-redhat-bold mb-8">Desserts</h1>
		<div class="grid lg:grid-cols-[1fr_0.6fr] xl:grid-cols-[1fr_0.5fr] gap-6 items-start">
			<div class="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
				{#each products as product}
					<ProductCard {product} />
				{/each}
			</div>
			<div class="sticky top-5">
				<CartPanel />
			</div>
		</div>
	</Container>
</section>
