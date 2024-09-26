/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d3b55b',
        secondary: '#002f33',
        accent: '#343434',
        win: '#07AB34',
        lose: '#E21717'
      }
    }
  },
  plugins: []
}
