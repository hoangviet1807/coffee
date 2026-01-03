/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,tsx}'],
	plugins: [typography],
	theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Poppins as default sans
      },
    },
      backgroundImage: {
      'banner': "url('./public/banner.jpg')",
    },
  },
}
