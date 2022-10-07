module.exports = {
  purge: [
    "../lib/**/*.ex",
    "../lib/**/*.leex",
    "../lib/**/*.eex",
    "../lib/**/*.heex",
    "./js/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
        green: '#22c55e',
				'light-grey': '#212121',
      },
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
