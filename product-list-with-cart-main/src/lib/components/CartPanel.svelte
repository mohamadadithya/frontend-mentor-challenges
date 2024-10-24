<script lang="ts">
	import { cart } from '$lib/stores/cart.svelte';
	import { formatPrice } from '$lib/helpers';
	import Tree from '$lib/images/icons/icon-carbon-neutral.svg';
	import { fly, slide } from 'svelte/transition';
	import CartItem from './CartItem.svelte';
	import { onMount } from 'svelte';
	import emptyIllustration from '$lib/images/illustrations/empty-cart.svg';
	import X from '$lib/images/icons/icon-remove-item.svg';
	import ConfirmModal from './ConfirmModal.svelte';

	let isMounted = $state(false),
		modalEl = $state<HTMLDialogElement>();

	onMount(() => (isMounted = true));
</script>

{#snippet totalRow()}
	<div class="flex items-center justify-between">
		<p>Order Total</p>
		<p class="text-2xl font-redhat-bold">{formatPrice(cart.totalPrice)}</p>
	</div>
{/snippet}

{#if isMounted}
	<div
		transition:fly={{ y: 20, duration: 350, delay: 350 }}
		class="cart-panel bg-white p-6 rounded-xl"
	>
		<p class="text-2xl font-redhat-bold text-primary">Your Cart ({cart.totalItems})</p>
		{#if cart.totalItems > 0}
			<div transition:slide={{ duration: 350 }}>
				{#each cart.items as item}
					<CartItem {item}>
						{#snippet rightColumn()}
							<button
								onclick={() => cart.delete(item)}
								type="button"
								class="aspect-square size-6 p-1 border-2 border-rose-300 rounded-full grid place-items-center"
							>
								<img class="pointer-events-none w-full" src={X} alt="Delete" />
							</button>
						{/snippet}
						{#snippet besidePrice()}
							<p class="text-rose-500 font-redhat-semibold">
								{formatPrice(item.total_price)}
							</p>
						{/snippet}
					</CartItem>
				{/each}
			</div>
			<div transition:slide={{ duration: 350 }}>
				<div class="my-6">
					{@render totalRow()}
				</div>
				<div class="bg-rose-50 p-5 rounded-lg flex items-center gap-3">
					<img src={Tree} alt="Carbon Neutral" />
					<p class="text-sm text-center">
						This is <span class="font-redhat-semibold">carbon-neutral</span> delivery
					</p>
				</div>
				<button
					onclick={() => modalEl?.showModal()}
					transition:fly={{ y: 20, duration: 350, delay: 350 }}
					type="button"
					class="w-full mt-5 primary-btn p-4">Confirm Order</button
				>
			</div>
		{:else}
			<div in:fly={{ y: 20, duration: 350, delay: 500 }} class="text-center mt-6">
				<img class="mx-auto" src={emptyIllustration} alt="Empty Cart" />
				<p class="mt-5 font-redhat-semibold text-rose-500">Your added items will appear here</p>
			</div>
		{/if}
	</div>
{/if}

<ConfirmModal {totalRow} />
