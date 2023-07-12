// eslint-disable-next-line no-undef
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {

		extend: {
			gridTemplateColumns: {
				// Columns size to cards header into home
				home: 'repeat(2, 0.6fr) 1fr;',
			},
			boxShadow: {
				// Shadow standar to card component
				card: '0 1px 4.79317px rgba(0, 0, 0, 0.25)',
				// card: "0 4.79317px 4.79317px rgba(0, 0, 0, 0.25)",
				searchBar: "0px 3.2304px 3.2304px rgba(0, 0, 0, 0.25);",
				navBar: "0px 4px 10px rgba(0, 0, 0, 0.25);",
				searchByQR: "0px 2.64865px 2.64865px rgba(0, 0, 0, 0.25);",
				shadowQRScan: "0 0 0 9999px rgba(52, 120, 215, 0.7)",
			},
			colors: {
				// green  
				"green-001": "#5EE8C1",
				"green-002": "#9EF1DA",
				"green-003": "#F9FAFB",
				"green-004": "#CFFFF1",
				"green-005": "#C6FCED",
				"green-006": "#F0FFFB",
				"green-007": "#30CEA1",
				"green-008": "#39CAA1",


				// blue
				"blue-001": "#0A2F5B",
				"blue-002": "#3478d7",
				"blue-003": "#8EBDFF",
				"blue-004": "#D5E3F7",
				"blue-005": "#7C8DB5",
				"blue-006": "#D9D9D9",
				"blue-007": "#99A9BB",
				"blue-008": "#3478D7",
				"blue-009": "#5E7795",
				"blue-010": "#0A2F5BE5",
				"blue-011": "#D6E7FF80",

				// yellow
				"yellow-001": "#FEF900",
				"yellow-002": "#F9F7AE",
				"yellow-003": "#FE993b",
				"yellow-004": "#FFE5B2",
				"yellow-005": "#E5BE40",
				// purple
				"purple-001": "#5954D2",
				"purple-002": "#BEBCEC",
				"purple-003": "#EEEDFF",
				"purple-004": "#9B5EE8",
				"purple-005": "#5955D1",
				"purple-006": "#CFCDFF",
				"purple-007": "#E6EDFF",
				"purple-008": "#9747FF",
				"purple-009": "#CCCBF8",


				// pink
				"pink-002": "#EA00FE",

				// red
				"red-error": "#EB4335",
				"red-button": "#F84B4B",
				"red-001": "#F84B4B33",
				"red-002": "#D9B8B9",

				// white
				"white-001": "#F9FAFB",
				"white-002": "#FFFFFF",
				"white-003": "#F3F3F3",

				//gray
				"gray-001": "#666161",
				"gray-disabled": "#D4D4D4",
			},
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1300px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
			'3xl': '1600px',
		},
	},
	plugins: [],
};
