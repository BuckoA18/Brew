import * as model from "./model";
import IntakeView from "./views/IntakeView";
import AddDrinkView from "./views/AddDrinkView";
import { initRouter } from "./router";
import { ROUTES } from "./config";

const controllIntake = () => {};

const controllAddDrink = (id) => {
	console.log(id);
};

const controllRouter = () => {
	const path = window.location.pathname;
	const view = ROUTES[path];

	view.render(model.state.drinks);

	// Only attach event listener if the AddDrinkView is loaded
	if (view === AddDrinkView) {
		AddDrinkView.addHandlerAddDrink(controllAddDrink);
	}
};

const init = async () => {
	// Fetch data
	await model.fetchDrinks();

	initRouter(controllRouter);
	controllRouter();
};

init();
