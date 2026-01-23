import View from "./View";
import { html } from "../utilities/helpers";

class IntakeView extends View {
	_parentElement = document.querySelector(".main-view");

	_generateMarkup() {
		const markup = html`
			<header class="header">
				<div class="header__content header__content--dashboard">
					<div class="header__container">
						<h2 class="header__title">Brew</h2>
					</div>
				</div>
			</header>

			<div class="intake">
				<div class="progress-bar"></div>
				<div class="intake-limit"></div>
				<div class="caffeine-monitor"></div>

				<div class="daily-log">
					<h2 class="daily-log__title">Today's drinks</h2>
					<ul class="daily-log__list"></ul>
				</div>

				<div class="add-log">
					<a href="/add" data-link
						><button class="add-log__button btn data-link">
							<i class="fa-solid fa-plus"></i></button
					></a>
				</div>
			</div>
		`;
		return markup;
	}
}

export default new IntakeView();
