import { html } from "../utilities/helpers";
import View from "./View";

class ProgressBarView extends View {
	get _parentElement() {
		return document.querySelector(".progress-bar");
	}

	_generateMarkup() {
		const { caffeine } = this._data.user;

		const markup = html`
			<div class="progress-bar__outer">
				<div class="progress-bar__inner">
					<h1 class="progress-bar__caffeine">${caffeine}</h1>
					<span class="progress-bar__label">mg</span>
				</div>
			</div>
			<svg class="progress-bar__svg" width="300px" height="300px">
				<circle class="progress-bar__circle" cx="150" cy="150" r="140" />
			</svg>
		`;
		return markup;
	}

	updateProgressBar(offset) {
		const progressBar = document.querySelector(".progress-bar__circle");
		progressBar?.style.setProperty("--caff-progress", `${offset}`);
	}
}

export default new ProgressBarView();
