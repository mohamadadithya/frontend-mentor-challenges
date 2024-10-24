const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

/**
 * Format a price as a US dollar amount.
 *
 * @param price - A number to be formatted as a US dollar amount.
 *
 * @returns A string representing the given price, formatted as a US dollar amount.
 *
 * @example
 * formatPrice(4.50) // "$4.50"
 * formatPrice(100) // "$100.00"
 */
function formatPrice(price: number) {
	return formatter.format(price);
}

export { formatPrice };
