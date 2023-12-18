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
			serif: ["'Source Serif 4'", "serif"],
			mono: ["Monaco", "Courier New", "monospace"]
		},
		boxShadow: {
			'3xl': '0 4px 8px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06)'
		}
	  }
	},
	plugins: []
  };
  