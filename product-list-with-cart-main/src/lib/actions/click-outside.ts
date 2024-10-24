/**
 * Creates an event listener that calls the callback whenever a click event occurs outside of the provided node.
 * @param node the node to watch for outside clicks
 * @param callback the function to call when a click occurs outside of the node
 * @returns an object with a single method, `destroy`, that can be called to remove the event listener.
 */
function clickOutside(node: HTMLElement, callback: (event: MouseEvent) => void) {
	/**
	 * Handles click events and invokes the callback if the click occurs outside the specified node.
	 * @param event - The mouse event triggered by the click.
	 */
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) callback(event);
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export default clickOutside;
