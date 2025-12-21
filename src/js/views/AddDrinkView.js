import View from "./View";
import { html } from "../helpers";

class AddDrinkView extends View {
	_parentElement = document.querySelector(".main-view");

	_data;

	_generateMarkup(data) {
		this._data = data;
		const markup = html`
			<div class="add-drink">
				<ul class="add-drink__list">
					${this._generateListItemsMarkup()}
				</ul>
			</div>
		`;
		return markup;
	}

	_generateListItemsMarkup() {
		return this._data
			.map((drink) => {
				return html`
					<li class="add-drink__list-item" data-id="${drink.id}">
						<i class="add-drink__list-item-icon fa-solid fa-mug-hot fa-xl"> </i>
						<h2 class="add-drink__list-item-title">${drink.name}</h2>
						<span class="add-drink__list-item-caffeine"
							>${drink.caffeine_mg}mg</span
						>
					</li>
				`;
			})
			.join("");
	}

	addHandlerAddDrink(handler) {
		const drinkList = this._parentElement.querySelector(".add-drink__list");

		drinkList.addEventListener("click", (e) => {
			const item = e.target.closest(".add-drink__list-item");
			if (!item) return;

			handler(item.dataset.id);
		});
	}
}

export default new AddDrinkView();
