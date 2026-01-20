import { html } from "../utilities/helpers";
import View from "./View";

class IntakeLimitView extends View {
	get _parentElement() {
		return document.querySelector(".intake-limit");
	}

	_generateMarkup() {
		const { caffeineLeft } = this._data;

		const markup = html`
			<span class="intake-limit__label subtle"
				><span class="intake-limit__value">${Math.abs(caffeineLeft)}</span>
				mg ${caffeineLeft < 0 ? "over" : "untill"} daily limit
			</span>
		`;
		return markup;
	}
}

export default new IntakeLimitView();
