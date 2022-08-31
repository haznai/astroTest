/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: "Source\\ Sans\\ 3, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      serif:
        'Source\\ Serif\\ 4, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
	borderWidth: {
		'sm': '.0625rem',
		'md': '0.125rem',
		'lg': '0.2rem',
	},
    extend: {
		animation: {
		  blob: 'blob 7s infinite',
		},
		keyframes: {
		  blob: {
			'0%': {
			  transform: 'translate(0px, 0px) scale(1)',
			},
			'33%': {
			  transform: 'translate(30px, -50px) scale(1.1)',
			},
			'66%': {
			  transform: 'translate(-20px, 20px) scale(0.9)',
			},
			'100%': {
			  transform: 'translate(0px, 0px) scale(1)',
			},
		  },
		},
		
	  },
	},
	
  plugins: [],
};
