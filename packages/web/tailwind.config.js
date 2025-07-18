/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('@youtube-memo-app/tailwind-config'),
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ]
};