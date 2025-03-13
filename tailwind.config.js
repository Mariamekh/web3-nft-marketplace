module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8E44AD",
        secondary: "#222",
        dark: "#121212",
        textPrimary: "#FFFFFF",
        textSecondary: "#A0A0A0",
        borderGray: "#444",
      },
      fontSize: {
        xl: "4rem",
        lg: "2.5rem",
        base: "1.2rem",
      },
      borderRadius: {
        full: "9999px",
        xl: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
