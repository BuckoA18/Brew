import { VALIDATION_RULES } from "./config";
import { setProfile } from "../model";
import * as model from "../model";

export const html = String.raw;

export const getCurrentTime = () => {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	return `${hours}:${minutes}`;
};

export const calcMaxCaffeine = (weight, metabolism) => {
	const max = weight * metabolism;
	return max;
};

export const validateSurvey = async (data) => {
	try {
		const { type, value } = data;
		// Weight checks
		if (type === "weight") {
			const weight = Math.round(parseFloat(value));
			if (weight < VALIDATION_RULES.WEIGHT.MIN)
				throw new Error(
					`Weight is too low or empty, minimum is: ${VALIDATION_RULES.WEIGHT.MIN}`,
				);
			if (weight > VALIDATION_RULES.WEIGHT.MAX)
				throw new Error(
					`Weight is too high, maximum is: ${VALIDATION_RULES.WEIGHT.MAX}`,
				);
			console.log("VALIDATION SUCCESFULL");
			return;
		}

		if (type === "age") {
			const age = Math.round(parseFloat(value));
			if (age < VALIDATION_RULES.AGE.MIN)
				throw new Error(
					`Age is too low or empty, minimum is: ${VALIDATION_RULES.AGE.MIN}`,
				);
			if (age > VALIDATION_RULES.AGE.MAX)
				throw new Error(
					`Age is too high, maximum is: ${VALIDATION_RULES.AGE.MAX}`,
				);
			console.log("VALIDATION SUCCESFULL");
			return;
		}
	} catch (error) {
		throw error;
	}
};

export const createShortcuts = () => {
	model.state.search.shortcuts = [
		"All",
		...new Set(
			model.state.drinks.map((drink) => {
				return drink.category;
			}),
		),
	];
};

export const calcCaffeine = () => {
	const caffeine = model.state.user.dailyDrinks.reduce(
		(accumulator, currentValue) => accumulator + currentValue.caffeine_mg,
		0,
	);
	model.state.user.caffeine = caffeine;
};
