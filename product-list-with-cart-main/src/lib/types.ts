interface Product {
	id: number;
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
	name: string;
	category: string;
	price: number;
}

interface CartItem {
	quantity: number;
	total_price: number;
	item: Product;
}

export type { Product, CartItem };
