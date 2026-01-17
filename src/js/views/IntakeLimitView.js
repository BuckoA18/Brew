import { html } from "../utilities/helpers";
import View from "./View";

class IntakeLimitView extends View {
	get _parentElement() {
		return document.querySelector(".intake-limit");
	}

	_generateMarkup(data) {
		const markup = html`
			<span class="intake-limit__label subtle">234 mg untill daily limit </span>
		`;
		return markup;
	}
}

export default new IntakeLimitView();
