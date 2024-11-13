/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'open-sans-regular': ['OpenSans-Regular'],
				'open-sans-bold': ['OpenSans-Bold'],
				'museo-sans-bold': ['MuseoSansRounded700'],
				'comfortaa-regular': ['Comfortaa-Regular'],
				'comfortaa-bold': ['Comfortaa-Bold'],
				'segoe-ui-regular': ['SegoeUI-Regular'],
				'segoe-ui-bold': ['SegoeUI-Bold'],
				'gibson-semibold': ['Gibson-SemiBold'],
			},
			colors: {
				// Neutros
				white: '#FFFFFF',
				black: '#000000',
				'gray-light': '#F8F8F8',
				'gray-medium': '#A4AFB7',
				'gray-dark': '#707070',
				'gray-extra-dark': '#4D4F5C',
				'gray-muted': '#808080',

				// Primarios
				'primary-red': '#FF6752',
				'primary-orange': '#D65C15',
				'primary-yellow': '#FEB53A',
				'secondary-yellow': '#FFE530',
				'highlight-orange': '#FFCC55',

				// Azules
				'blue-dark': '#015F91',
				'blue-light': '#4487FF',
				'blue-muted': '#A89EFF',

				// Tonos intermedios
				'transparent-blue': '#4487FF57',
				'transparent-purple': '#3220CE80',
				'transparent-orange': '#FD68454D',
				'muted-purple': '#3220CE29',
				'muted-blue': '#2C1DAD29',
				'muted-black': '#00000029',

				// Extras
				'alert-red': '#FE6845',
				'soft-red': '#FD6845',
				'background-light': '#F3F6FB',
			},
		},
	},
	plugins: [],
};
