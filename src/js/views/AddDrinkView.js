import View from "./View";

class AddDinkView extends View {
	_parentElement = document.querySelector(".main-view");

	_generateMarkup() {
		const markup = `
        <div class="add-drink">
					<input
						type="text"
						class="add-drink__input"
						placeholder="espresso..."
					/>
					<ul class="add-drink__list">
						<li class="add-drink__list-item">
							<i
								class="add-drink__list-item-icon fa-solid fa-mug-hot fa-xl"
							></i>
							<h2 class="add-drink__list-item-title">espresso</h2>
							<span class="add-drink__list-item-caffeine">65 mg</span>
						</li>
						<li class="add-drink__list-item">
							<i
								class="add-drink__list-item-icon fa-solid fa-mug-hot fa-xl"
							></i>
							<h2 class="add-drink__list-item-title">filter</h2>
							<span class="add-drink__list-item-caffeine">120 mg</span>
						</li>
						<li class="add-drink__list-item">
							<i
								class="add-drink__list-item-icon fa-solid fa-mug-hot fa-xl"
							></i>
							<h2 class="add-drink__list-item-title">capuccino</h2>
							<span class="add-drink__list-item-caffeine">80 mg</span>
						</li>
						<li class="add-drink__list-item">
							<i
								class="add-drink__list-item-icon fa-solid fa-mug-hot fa-xl"
							></i>
							<h2 class="add-drink__list-item-title">decaf filter</h2>
							<span class="add-drink__list-item-caffeine">2 mg</span>
						</li>
					</ul>
				</div>
                `;
		return markup;
	}
}

export default new AddDinkView();
