import View from "./View";
import { html } from "../utilities/helpers";

class ErrorView extends View {
	get _parentElement() {
		return document.querySelector(".main-view");
	}

	addHandlerCloseError(handler) {
		const closeButton = this._parentElement.querySelector(".error__button");
		if (!closeButton) return;

		closeButton.addEventListener("click", () => {
			handler();
		});
	}

	closeError() {
		const error = this._parentElement.querySelector(".error");
		if (!error) return;

		error.remove();
	}
	_generateMarkup(error) {
		console.log(error);
		const markup = html`
			<div class="error">
				<div class="error__container">
					<img src="/images/mark.png" alt="alert" class="error__img" />
					<h1 class="error__title">${error.code ? error.code : "Error"}</h1>
					<p class="error__description">${error.message}</p>
					<button class="error__button">Ok</button>
				</div>
			</div>
		`;
		return markup;
	}
}

export default new ErrorView();
