import View from "./View";

class BottomBarView extends View {
	_parentElement = document.querySelector(".bottom-bar");

	_handleContentSwitch() {
		this._parentElement.addEventListener("click", (e) => {
			e.preventDefault();
			if (!e.target.closest(".bottom-bar__link")) return;
			const target = e.target.closest(".bottom-bar__link");
			const data = target.dataset.id;
			console.log(data);
		});
	}
}

export default new BottomBarView();
