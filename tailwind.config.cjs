// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [require("@tailwindcss/typography"),require("daisyui")],
// 	daisyui: {
// 		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
// 		darkTheme: "dark", // name of one of the included themes for dark mode
// 		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
// 	  }
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        lofi: {
          'color-scheme': 'light',

          'base-100': 'oklch(98% 0.003 247.858)',
          'base-200': 'oklch(96% 0.007 247.896)',
          'base-300': 'oklch(92% 0.013 255.508)',
          'base-content': 'oklch(20% 0.042 265.755)',

          primary: 'oklch(64% 0.2 131.684)',
          'primary-content': 'oklch(98% 0.031 120.757)',

          secondary: 'oklch(59% 0.249 0.584)',
          'secondary-content': 'oklch(97% 0.014 343.198)',

          accent: 'oklch(59% 0.249 0.584)',
          'accent-content': 'oklch(97% 0.014 343.198)',

          neutral: 'oklch(27% 0.041 260.031)',
          'neutral-content': 'oklch(98% 0.003 247.858)',

          info: 'oklch(58% 0.158 241.966)',
          'info-content': 'oklch(98% 0.019 200.873)',

          success: 'oklch(60% 0.118 184.704)',
          'success-content': 'oklch(98% 0.014 180.72)',

          warning: 'oklch(66% 0.179 58.318)',
          'warning-content': 'oklch(98% 0.022 95.277)',

          error: 'oklch(59% 0.249 0.584)',
          'error-content': 'oklch(97% 0.014 343.198)',

          '--rounded-box': '1rem',
          '--rounded-btn': '0.25rem',
          '--rounded-badge': '0.5rem',
          '--tab-radius': '0.25rem',
        },
      },
    ],
    darkTheme: 'lofi',
    logs: false,
  },
};
