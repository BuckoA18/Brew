import { html } from "../utilities/helpers";

class View {
	_data;

	render(data, params) {
		if (Array.isArray(data) && data.length === 0) return;
		this._data = data;

		const parentElement = this._parentElement;
		if (!parentElement) return;

		this.clear();
		this._parentElement.insertAdjacentHTML(
			"afterbegin",
			this._generateMarkup(data, params),
		);
	}

	renderError(error) {
		console.log(error);
		const markup = html`
			<div class="error">
				<div class="error__container">
					<img src="./public/images/mark.png" alt="alert" class="error__img" />
					<h1 class="error__title">400 - Bad Request</h1>

					<p class="error__description">
						Weight is too low or empty, minimum is: 30kg
					</p>
					<button class="error__button">Ok</button>
				</div>
			</div>
		`;

		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	clear() {
		this._parentElement.innerHTML = "";
	}
}

export default View;
