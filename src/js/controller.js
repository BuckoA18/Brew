import IntakeView from "./views/IntakeView";
import AddDrinkView from "./views/AddDrinkView";
import BottomBarView from "./views/BottomBarView";

const controllPageNav = () => {
	BottomBarView._handleContentSwitch();
};

const init = () => {
	controllPageNav();
};

init();
