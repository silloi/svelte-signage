module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'theme-gray': '#3a3a3a',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
