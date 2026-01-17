import { html } from "../utilities/helpers";
import View from "./View";

class CaffeineMonitorView extends View {
	get _parentElement() {
		return document.querySelector(".caffeine-monitor");
	}

	_generateMarkup(data) {
		const markup = html`
			<span class="caffeine-monitor__label subtle">~67mg in the system</span>
			<div class="caffeine-monitor__bar">
				<svg
					class="caffeine-monitor__bar-svg"
					viewBox="0 0 100 10"
					preserveAspectRatio="none"
				>
					<rect class="caffeine-monitor__fill" width="50" height="10" rx="5" />
				</svg>
			</div>
			<div class="caffeine-monitor__sleep">
				<span class="caffeine-monitor__label subtle">Safe to sleep at</span>
				<span class="caffeine-monitor__value">22:30 (1:45)</span>
			</div>
		`;
		return markup;
	}
}

export default new CaffeineMonitorView();
