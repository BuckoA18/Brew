import View from "./View";
import { html } from "../helpers";

class LogDrinkView extends View {
	_query;

	get _parentElement() {
		return document.querySelector(".main-view");
	}

	addHandlerNewLog(handler) {
		const parentElement = this._parentElement;
		if (!parentElement) return;

		this._parentElement.addEventListener("click", (e) => {
			const item = e.target.closest(".log__item");
			if (!item) return;

			handler(item.dataset.id);
		});
	}

	addHandlerToggleSearchBar() {
		const parentElement = this._parentElement;
		if (!parentElement) return;

		this._parentElement.addEventListener("click", (e) => {
			const button = e.target.closest(".search-bar__button");
			if (!button) return;

			const input = this._parentElement.querySelector(".search-bar__input");
			if (!input) return;
			input.classList.toggle("search-bar__input--closed");
		});
	}

	addHandlerGetQuery(handler) {
		const parentElement = this._parentElement;
		if (!parentElement) return;

		this._parentElement.addEventListener("input", (e) => {
			const query =
				this._parentElement.querySelector(".search-bar__input").value;
			handler(query);
		});
	}

	addHandlerGetShortcutId(handler) {
		const parentElement = this._parentElement;
		if (!parentElement) return;

		this._parentElement.addEventListener("click", (e) => {
			const shortcut = e.target.closest(".log__shortcut-btn");
			if (!shortcut) return;
			const id = shortcut.dataset.id;
			if (!id) return;

			handler(id);
		});
	}

	_generateMarkup() {
		const markup = html`
			<header class="header">
				<div class="header__container container">
					<h1 class="header__title">Log your drink</h1>
					<div class="search-bar"></div>
				</div>
			</header>
			<div class="log container">
				<div class="log__shortcuts"></div>
				<ul class="log__list"></ul>
			</div>
		`;
		return markup;
	}
}

export default new LogDrinkView();
