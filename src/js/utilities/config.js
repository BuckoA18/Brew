export const CAFFEINE_BAR_CIRCUMFERENCE = 879;
export const CAFFEINE_THRESHOLD = 50;
export const CAFFEINE_HALF_LIFE = 0.1;
export const VALIDATION_RULES = {
	AGE: {
		MIN: 12,
		MAX: 120,
	},
	WEIGHT: {
		MIN: 30,
		MAX: 300,
	},
	NAME_CHAR_CAP: 30,
};

export const SURVEY_SCHEMA = [
	{
		id: "intro",
		step: 1,
		title: "Let's personalize your experience",
	},
	{
		id: "bodyweight",
		step: 2,
		input: "number",
		title: "What is your current weight?",
		units: ["kg", "lb"],
	},
	{
		id: "age",
		step: 3,
		input: "number",
		title: "How old are you?",
	},
	{
		id: "factors",
		step: 4,
		title: "Metabolic Profile",
		options: ["Smoking", "Pregnancy", "Contraceptives"],
	},
];
