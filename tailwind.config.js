module.exports = {
  mode: 'jit',
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: theme => ({
			...theme('colors'),
			'primary': '#033C49',
			'secondary': '#F9811E',
			'danger': '#e3342f',
		   }),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
