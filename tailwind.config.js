/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  themes: [
    {
      mytheme: {
        primary: '#6018dd',

        secondary: '#f9c2a2',

        accent: '#87e86f',

        neutral: '#37293d',

        'base-100': '#f3f5f7',

        info: '#597de8',

        success: '#5ee8c6',

        warning: '#f9cd3e',

        error: '#ed4a52',
      },
    },
  ],
  plugins: [],
};
