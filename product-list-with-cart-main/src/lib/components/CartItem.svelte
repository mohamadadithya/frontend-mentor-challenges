<script lang="ts">
	import { formatPrice } from '$lib/helpers';
	import type { CartItem } from '$lib/types';
	import { slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	let {
		item,
		image,
		rightColumn,
		besidePrice
	}: {
		item: CartItem;
		image?: Snippet;
		rightColumn?: Snippet;
		besidePrice?: Snippet;
	} = $props();

	const product = $derived(item.item);
</script>

<div transition:slide={{ duration: 350 }} class="flex items-center justify-between py-5 border-b">
	<div class="flex items-center gap-4">
		{#if image}
			{@render image()}
		{/if}
		<div>
			<p class="font-redhat-semibold">{product.name}</p>
			<div class="flex items-center gap-4 mt-2">
				<p class="text-primary font-redhat-semibold">{item.quantity}x</p>
				<div class="flex items-center gap-2">
					<p class="text-rose-400">@{formatPrice(product.price)}</p>
					{#if besidePrice}
						{@render besidePrice()}
					{/if}
				</div>
			</div>
		</div>
	</div>
	{#if rightColumn}
		{@render rightColumn()}
	{/if}
</div>
