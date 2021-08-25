module.exports = {
  purge: ['./index,html', ',/src/**/*.{svelte,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'theme-gray': '#36343a',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
