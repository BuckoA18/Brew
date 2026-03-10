export const CAFFEINE_BAR_CIRCUMFERENCE = 879;
export const CAFFEINE_THRESHOLD = 50;
export const CAFFEINE_HALF_LIFE = 0.1;
export const MAX_STEPS = 4;
export const VALIDATION_RULES = {
	AGE: {
		MIN: 12,
		MAX: 120,
	},
	WEIGHT: {
		MIN: 30,
		MAX: 300,
	},
};

export const SURVEY_SCHEMA = [
	{
		id: "intro",
		step: 1,
		title: "Let's personalize your experience",
	},
	{
		id: "weight",
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
		id: "multipliers",
		step: 4,
		title: "Metabolic Profile",
		multipliers: [
			{
				id: "smoking",
				name: "Smoking",
				multiplier: 0.5,
				description:
					"Triggers enzymes that process caffeine twice as fast. You likely need more coffee to feel the same effect.",
			},
			{
				id: "pregnancy",
				name: "Pregnancy",
				multiplier: 3,
				description:
					"Drastically slows clearance. By the third trimester, caffeine stays in your system three times longer.",
			},
			{
				id: "contraceptives",
				name: "Contraceptives",
				multiplier: 1.5,
				description:
					"Reduces enzyme activity, effectively doubling caffeine's half-life and making its effects last much longer.",
			},
		],
	},
];
