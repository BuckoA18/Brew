import View from "./View";
import { html } from "../utilities/helpers";

class Survey extends View {
	get _parentElement() {
		return document.querySelector(".main-view");
	}

	_generateMarkup() {
		const markup = html`
			<main class="survey">
				<form class="steps"></form>
			</main>
		`;
		return markup;
	}

	addHandlerSurveyNav(handler) {
		this._parentElement
			.querySelector(".steps")
			.addEventListener("submit", (e) => {
				e.preventDefault();

				const nextButton = this._parentElement.querySelector(".steps__button");
				if (!nextButton) return;

				const input = e.target.querySelector(".steps__input");

				if (input) {
					const type = input.name;
					const formData = new FormData(e.target);
					const value = +formData.get(name);
					console.log(value);
					return handler({ type, value });
				}

				handler();
			});
		handler();
	}
}

export default new Survey();
