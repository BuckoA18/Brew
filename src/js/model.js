export const state = {
	drinks: [],
	dailyDrinks: [],
	caffeine: 0,
	maxCaffeine: 450,
	progressPerc: 0,
};

export const fetchDrinks = async () => {
	try {
		const response = await fetch("http://localhost:3000/drinks");

		if (!response.ok) throw new Error(`Error: ${response.status}`);
		const data = await response.json();
		state.drinks = data;
	} catch (error) {
		console.error(`Could not fetch data: ${error}`);
	}
};

export const calcProgress = () => {
	const percentage = Math.round((state.caffeine / state.maxCaffeine) * 100);
	state.progressPerc = percentage;
	console.log("progress:", state.progressPerc);
};

export const storeDrink = (id) => {
	const currentDrink = state.drinks.find((drink) => drink.id === id);

	state.caffeine += currentDrink.caffeine_mg;
	// pushing object at the start of the array
	state.dailyDrinks.unshift(currentDrink);

	console.log("caffeine:", state.caffeine);
	calcProgress();
};
