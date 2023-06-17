// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['interstate', 'sans-serif'],
		},
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
				'green-001': '#5EE8C1',
				'green-002': '#9EF1DA',
				'green-004': '#CFFFF1',
				'green-005': '#C6FCED',
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
