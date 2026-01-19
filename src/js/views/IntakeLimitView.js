import { html } from "../utilities/helpers";
import View from "./View";

class IntakeLimitView extends View {
	get _parentElement() {
		return document.querySelector(".intake-limit");
	}

	_generateMarkup() {
		const markup = html`
			<span class="intake-limit__label subtle"
				><span class="intake-limit__value">${this._data.caffeineLeft}</span> mg
				untill daily limit
			</span>
		`;
		return markup;
	}
}
// add 56 mg over the limit if the daily limit is over
export default new IntakeLimitView();
