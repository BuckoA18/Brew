export const initRouter = (navigate) => {
	// Listening for a user navigating thru an active history
	window.addEventListener("popstate", navigate);

	// Listening for a click on elements wth [data-link]
	document.addEventListener("click", (e) => {
		e.preventDefault();

		const link = e.target.closest("[data-link]");
		if (!link) return;
		const url = link.getAttribute("href");

		// Pushing the url to the active history
		window.history.pushState(null, null, url);

		// Rendering page based on routes
		navigate();
	});
};
