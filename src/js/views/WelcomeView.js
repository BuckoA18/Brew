import View from "./View";
import { html } from "../utilities/helpers";

class Welcome extends View {
	get _parentElement() {
		return document.querySelector(".main-view");
	}

	_generateMarkup() {
		const markup = html`
			<main class="welcome">
				<div class="welcome__container">
					<img
						src="/images/undraw_coffee-with-friends_ocg2 (1).svg"
						alt="Friends sharing coffee"
						class="welcome__image"
					/>
					<div class="welcome__wrapper">
						<div class="welcome__group welcome__group--info">
							<h1 class="welcome__title">Welcome to Brew</h1>
							<p class="welcome__description">Caffeine tracking made simple</p>
						</div>
						<div class="welcome__group welcome__group--actions">
							<a
								href="/survey"
								data-link
								class="welcome__link welcome__link--start"
								>Get Started</a
							>
							<a
								href="/"
								data-link
								class="welcome__link welcome__link--skip subtle"
								>Skip</a
							>
						</div>
					</div>
				</div>
			</main>
		`;
		return markup;
	}
}

export default new Welcome();
