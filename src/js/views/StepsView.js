import View from "./View";
import { html } from "../utilities/helpers";

class StepsView extends View {
	get _parentElement() {
		return document.querySelector(".steps");
	}

	navigateSurvey(currentStep) {
		const steps = Array.from(
			this._parentElement.querySelectorAll(".steps__card"),
		);
		if (!steps) return;
		steps.forEach((step) => {
			if (+step.dataset.step === currentStep) return;
			step.classList.add("steps__card--hidden");
		});
	}

	_generateMarkup() {
		const markup = html` <div class="steps__card" data-step="1">
				<h2 class="steps__title">Let's personalize your experience</h2>
			</div>
			<div class="steps__card" data-step="2">
				<h1 class="steps__title">
					<label for="bodyweight">What is your current weight?</label>
				</h1>
				<input type="number" id="bodyweight" class="steps__input" />
			</div>
			<div class="steps__card" data-step="3">
				<h1 class="steps__title">
					<label for="age">How old are you?</label>
				</h1>
				<input type="number" id="age" class="steps__input" />
			</div>
			<div class="steps__card" data-step="4">
				<h1 class="steps__title">Metabolic Profile</h1>
				<div class="factors">
					<div class="factors__card factors__card--selected">
						<h2 class="factors__title">Smoking</h2>
					</div>
					<div class="factors__card">
						<h2 class="factors__title">Pregnancy</h2>
					</div>
					<div class="factors__card factors__card--selected">
						<h2 class="factors__title">Contraceptives</h2>
					</div>
				</div>
			</div>
			<div class="steps__card" data-step="5">
				<h2 class="steps__title">You're all set! Let's go</h2>
			</div>`;
		return markup;
	}
}

export default new StepsView();
