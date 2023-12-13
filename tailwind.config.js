/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1530px",
		},
	  extend: {
		fontFamily: {
			sans: ["'Source Sans 3'", "sans-serif"],
			livory: ["'Livory'", "serif"],
			serif: ["Newsreader", "serif"],
			mono: ["Monaco", "Courier New", "monospace"]
		}
	  }
	},
	plugins: []
  };
  