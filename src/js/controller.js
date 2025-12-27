import * as model from "./model";
import IntakeView from "./views/IntakeView";
import AddDrinkView from "./views/AddDrinkView";
import ProgressBarView from "./views/ProgressBarView";
import DailyDrinksView from "./views/DailyDrinksView";
import { initRouter } from "./router";

const controllDashboard = () => {
	IntakeView.render(model.state);
	ProgressBarView.render(model.state);
	DailyDrinksView.render(model.state);
};

const controllAddDrink = () => {
	AddDrinkView.render(model.state);
};

const controllRouter = () => {
	const path = window.location.pathname;

	switch (path) {
		case "/":
			controllDashboard();
			break;
		case "/add":
			controllAddDrink();
			break;
		default:
			console.error("404: Page not found");
	}
};

const init = async () => {
	// Fetch data
	await model.fetchDrinks();

	initRouter(controllRouter);
	controllRouter();
};

init();
