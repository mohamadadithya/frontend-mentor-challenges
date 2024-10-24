<script lang="ts">
	import { formatPrice } from '$lib/helpers';
	import ChecklistCircle from '$lib/images/icons/icon-order-confirmed.svg';
	import X from '$lib/images/icons/icon-remove-item.svg';
	import { cart } from '$lib/stores/cart.svelte';
	import type { Snippet } from 'svelte';
	import CartItem from './CartItem.svelte';
	import { fly } from 'svelte/transition';

	let {
		totalRow,
		modalEl = $bindable()
	}: { totalRow: Snippet; modalEl: HTMLDialogElement | undefined } = $props();

	function startNewOrder() {
		modalEl?.close();

		const timeout = setTimeout(() => cart.deleteAll(), 500);
		return () => clearTimeout(timeout);
	}
</script>

<dialog class="confirm-modal" bind:this={modalEl}>
	<button
		onclick={() => modalEl?.close()}
		type="button"
		class="aspect-square size-8 absolute top-3 right-3 p-1.5 border-2 border-rose-300 rounded-full grid place-items-center"
		aria-label="Close"
	>
		<img class="pointer-events-none w-full" src={X} alt="Close" />
	</button>
	<img src={ChecklistCircle} alt="Order Confirmed" class="size-14 mb-5" />
	<h2 class="text-4xl font-redhat-bold mb-2.5">Order Confirmed</h2>
	<p class="text-rose-500">We hope you enjoy your food!</p>
	<div class="p-5 pt-1 bg-rose-50 rounded-2xl mt-8">
		{#each cart.items as item}
			{@const product = item.item}
			<CartItem {item}>
				{#snippet image()}
					<img
						class="size-14 aspect-square overflow-hidden rounded-lg object-center object-cover"
						src="/images/products/{product.image.thumbnail}"
						alt={product.name}
					/>
				{/snippet}
				{#snippet rightColumn()}
					<p class="font-redhat-semibold">
						{formatPrice(item.total_price)}
					</p>
				{/snippet}
			</CartItem>
		{/each}
		<div class="mt-6">
			{@render totalRow()}
		</div>
	</div>
	<button
		onclick={startNewOrder}
		transition:fly={{ y: 20, duration: 350, delay: 350 }}
		type="button"
		class="w-full mt-6 primary-btn px-4 py-3">Start New Order</button
	>
</dialog>

<style lang="postcss">
	.confirm-modal {
		@apply opacity-0 bg-transparent w-full max-w-lg rounded-2xl mx-auto overscroll-contain bg-white p-8;

		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out,
			overlay 0.5s ease-out allow-discrete,
			display 0.5s ease-out allow-discrete;

		&::backdrop {
			@apply bg-black/50;

			transition:
				display 0.5s allow-discrete,
				overlay 0.5s allow-discrete,
				background-color 0.5s;
		}

		&[open] {
			@apply opacity-100;

			&::backdrop {
				@apply bg-black/50 overscroll-contain;
			}
		}
	}

	@starting-style {
		.confirm-modal[open] {
			@apply opacity-0;

			&::backdrop {
				@apply bg-black/0;
			}
		}
	}
</style>
