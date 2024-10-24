import type { CartItem, Product } from '$lib/types';

class Cart {
	#items = $state<CartItem[]>([]);
	#totalItems = $derived(this.calculate(this.items.map((item) => item.quantity)));
	#totalPrice = $derived(this.calculate(this.items.map((item) => item.total_price)));

	private calculate(nums: number[]) {
		return nums.reduce((a, b) => a + b, 0);
	}

	add(product: Product) {
		this.#items.push({
			item: product,
			quantity: 1,
			total_price: product.price
		});
	}

	delete(item: CartItem) {
		this.#items.splice(this.#items.indexOf(item), 1);
	}

	deleteAll() {
		this.#items = [];
	}

	handleQuantity(mode: 'increment' | 'decrement', cartItem: CartItem) {
		if (mode === 'increment') {
			cartItem.quantity++;
			cartItem.total_price += cartItem.item.price;
		} else if (mode === 'decrement') {
			if (cartItem.quantity > 1) {
				cartItem.quantity--;
				cartItem.total_price -= cartItem.item.price;
			} else {
				cart.items.splice(cart.items.indexOf(cartItem), 1);
			}
		}
	}

	get items() {
		return this.#items;
	}

	get totalItems() {
		return this.#totalItems;
	}

	get totalPrice() {
		return this.#totalPrice;
	}
}

const cart = new Cart();

export { cart };
