<script lang="ts">
	import { formatPrice } from '$lib/helpers';
	import type { Product } from '$lib/types';
	import AddToCart from '$lib/images/icons/icon-add-to-cart.svg';
	import { cart } from '$lib/stores/cart.svelte';
	import { fly } from 'svelte/transition';
	import Plus from '$lib/images/icons/icon-increment-quantity.svg';
	import Minus from '$lib/images/icons/icon-decrement-quantity.svg';
	import { onMount } from 'svelte';

	let {
		product
	}: {
		product: Product;
	} = $props();

	const isAlreadyInCart = $derived(cart.items.some((cartItem) => cartItem.item.id === product.id));
	const cartItem = $derived(cart.items.find((cartItem) => cartItem.item.id === product.id));
	const totalInCart = $derived(cartItem?.quantity || 0);

	let isMounted = $state(false);

	onMount(() => (isMounted = true));
</script>

{#if isMounted}
	<div transition:fly={{ y: 20, duration: 350 }} class="product-card">
		<div class="relative">
			<picture class="product-card__image" class:active={isAlreadyInCart}>
				<source media="(min-width: 1280px)" srcset="/images/products/{product.image.desktop}" />
				<source media="(min-width: 768px)" srcset="/images/products/{product.image.tablet}" />
				<img src="/images/products/{product.image.mobile}" alt={product.name} />
			</picture>
			<div class="absolute bottom-0 w-full">
				{#if isAlreadyInCart && cartItem}
					<div
						transition:fly={{ y: -20, duration: 350 }}
						class="action-wrapper bg-primary text-rose-50 flex items-center justify-between"
					>
						<button
							class="action-wrapper__button"
							type="button"
							data-mode="minus"
							onclick={() => cart.handleQuantity('decrement', cartItem)}
							aria-label="Decrement quantity"
						>
							<img src={Minus} alt="increment quantity" />
						</button>
						<p class="font-redhat-semibold flex-1 text-center">{totalInCart}</p>
						<button
							class="action-wrapper__button"
							type="button"
							data-mode="plus"
							onclick={() => cart.handleQuantity('increment', cartItem)}
							aria-label="Increment quantity"
						>
							<img src={Plus} alt="decrement quantity" />
						</button>
					</div>
				{:else}
					<button
						transition:fly={{ y: -20, duration: 350 }}
						onclick={() => cart.add(product)}
						type="button"
						class="action-wrapper bg-rose-50 border-rose-500 border hover:bg-rose-100 duration-300"
					>
						<img class="size-6" src={AddToCart} alt={product.name} />
						<p class="font-redhat-semibold text-rose-900">Add To Cart</p>
					</button>
				{/if}
			</div>
		</div>
		<div class="mt-10">
			<p class="text-rose-400">{product.category}</p>
			<p class="text-lg text-rose-900 font-redhat-semibold">{product.name}</p>
			<p class="text-rose-700 font-redhat-semibold">{formatPrice(product.price)}</p>
		</div>
	</div>
{/if}

<style lang="postcss">
	.product-card {
		& .product-card__image {
			@apply border-2 border-transparent duration-300 w-full rounded-lg overflow-hidden block;

			& :where(source, img) {
				@apply size-full object-cover object-center;
			}

			&:is(.active) {
				@apply border-primary;
			}
		}
	}

	.action-wrapper {
		@apply absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 rounded-full p-3 w-full max-w-44 flex items-center justify-center gap-2;

		& .action-wrapper__button {
			@apply border aspect-square size-5 rounded-full grid place-items-center;

			& > img {
				@apply pointer-events-none;
			}
		}
	}
</style>
