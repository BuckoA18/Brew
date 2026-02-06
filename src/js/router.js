export const initRouter = (navigate) => {
	window.addEventListener("popstate", () => {
		console.log(
			"--DEBUG-- Backwards/Forwards detected, new url: ",
			window.location.pathname,
		);
		navigate();
	});
	document.addEventListener("click", (e) => {
		const link = e.target.closest("[data-link]");
		if (!link) return;

		e.preventDefault();
		const url = link.getAttribute("href");
		setTimeout(() => {
			window.history.pushState(null, null, url);
			navigate();
		}, 10);
	});
};
