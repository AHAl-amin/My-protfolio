/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#06B6D4",
        accentDark: "#0891B2",
        light: "#F1F5F9",
        darkText: "#0F172A",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#06B6D4",
          "secondary": "#1E293B",
          "accent": "#0891B2",
          "neutral": "#0F172A",
          "base-100": "#F1F5F9",
        },
      },
    ],
  },
}

