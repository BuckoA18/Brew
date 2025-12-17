import IntakeView from "./views/IntakeView";
import AddDrinkView from "./views/AddDrinkView";
import BottomBarView from "./views/BottomBarView";

const views = {
	IntakeView: IntakeView,
	AddDrinkView: AddDrinkView,
};

const controllPageNav = (nextView) => {
	const view = views[nextView];
	view.render();
};

const init = () => {
	BottomBarView.addHandlerClick(controllPageNav);
};

init();
