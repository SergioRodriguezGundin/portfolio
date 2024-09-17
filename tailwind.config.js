module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx,astro}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
    extend: {
      fontFamily: {
        "prompt": ['Prompt', 'sans-serif'],
      },
      fontSize: {
        'sm': 'var(--font-size-sm, clamp(0.7rem, 0vi + 0.7rem, 0.7rem))',
        'base': 'var(--font-size-base, clamp(0.88rem, 0.06vi + 0.86rem, 0.94rem))',
        'md': 'var(--font-size-md, clamp(1.09rem, 0.16vi + 1.05rem, 1.25rem))',
        'lg': 'var(--font-size-lg, clamp(1.37rem, 0.29vi + 1.29rem, 1.66rem))',
        'xl': 'var(--font-size-xl, clamp(1.71rem, 0.5vi + 1.58rem, 2.21rem))',
        '2xl': 'var(--font-size-2xl, clamp(2.14rem, 0.81vi + 1.93rem, 2.93rem))',
        '3xl': 'var(--font-size-3xl, clamp(2.67rem, 1.25vi + 2.36rem, 3.9rem))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient": {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient": "gradient 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}