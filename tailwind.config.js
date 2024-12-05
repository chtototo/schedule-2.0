/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,ts,css}"],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto Mono', 'sans-serif'],
      'ubuntu': ['Ubuntu Mono', 'sans-serif'],
    },
    screens: {
      'lg': '1350px',
      'md': '500px',
      'sm': '380px',
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5e5eed",
          "secondary": "#4b5563",
          "accent": "#00ffff",
          "neutral": "#e5e7eb",
          "base-100": "#f3f4f6",
          "info": "#0000ff",
          "success": "#15803d",
          "warning": "#f59e0b",
          "error": "#ff0000",
          "purple": '#ddddee',
          "dark-purple": '#5e5eed',
        },
      },
    ],
  },
}

