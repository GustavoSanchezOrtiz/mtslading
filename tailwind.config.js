/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        // Paleta Corporativa Industrial MTS
        industrial: {
          950: "#09090b", // Negro profundo de fondo principal
          900: "#121215", // Gris carbón para tarjetas y contenedores
          800: "#1e1e24", // Gris intermedio para bordes y separadores
          700: "#2d2d35", // Gris para estados hover y superficies secundarias
          400: "#a1a1aa", // Gris claro para texto secundario / metadatos
          100: "#f4f4f5", // Blanco suave para tipografía principal
        },
        // Acento Corporativo MTS (Logo #e0bc34 y Botón Primario #66530F)
        mts: {
          logo: "#e0bc34",
          brass: "#66530F",
          brassHover: "#7A6312",
          gold: "#f59e0b",
          amber: "#eab308",
          yellow: "#facc15",
          highlight: "#fbbf24",
        },
        border: "hsl(var(--border, 240 3.7% 15.9%))",
        input: "hsl(var(--input, 240 3.7% 15.9%))",
        ring: "hsl(var(--ring, 47 74% 36%))",
        background: "hsl(var(--background, 240 10% 3.9%))",
        foreground: "hsl(var(--foreground, 0 0% 98%))",
        primary: {
          DEFAULT: "hsl(var(--primary, 47 74% 23%))",
          foreground: "hsl(var(--primary-foreground, 0 0% 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 240 3.7% 15.9%))",
          foreground: "hsl(var(--secondary-foreground, 0 0% 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 240 3.7% 15.9%))",
          foreground: "hsl(var(--muted-foreground, 240 5% 64.9%))",
        },
      },
    },
  },
  plugins: [],
};
