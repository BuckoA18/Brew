import View from "./View";
import { html } from "../helpers";

class SearchShortcutsView extends View {
	_data;
	get _parentElement() {
		return document.querySelector(".log__shortcuts");
	}

	_generateMarkup(data) {
		this._data = data;

		const markup = this._data
			.map((shortcut) => {
				return html`<button
					class="log__shortcut-btn"
					data-id="${shortcut.toLowerCase()}"
				>
					${shortcut}
				</button> `;
			})
			.join("");
		return markup;
	}
}

export default new SearchShortcutsView();
