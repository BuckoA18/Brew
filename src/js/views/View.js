class View {
	render() {
		this._parentElement.innerHTML = "";
		this._parentElement.insertAdjacentHTML(
			"afterbegin",
			this._generateMarkup()
		);
	}
}

export default View;
