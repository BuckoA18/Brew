class View {
	render(state) {
		this._parentElement.innerHTML = "";
		this._parentElement.insertAdjacentHTML(
			"afterbegin",
			this._generateMarkup(state)
		);
	}
}

export default View;
