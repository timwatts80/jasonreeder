import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b2239',
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b6cde3',
          300: '#8aabcf',
          400: '#5c84b8',
          500: '#3c639f',
          600: '#2d4c84',
          700: '#233c6b',
          800: '#1d3059',
          900: '#0b2239',
          950: '#081829',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#c8a96a',
          50: '#faf8f3',
          100: '#f4f0e6',
          200: '#e8decc',
          300: '#dac8a8',
          400: '#c8a96a',
          500: '#b89955',
          600: '#a68948',
          700: '#8a7240',
          800: '#715e39',
          900: '#5c4d32',
          950: '#33291b',
          foreground: '#0b2239',
        },
        background: '#f9f9f8',
        foreground: '#1a1a1a',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1a1a1a',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#c8a96a',
          foreground: '#0b2239',
        },
        muted: {
          DEFAULT: '#ececf0',
          foreground: '#717182',
        },
        destructive: {
          DEFAULT: '#d4183d',
          foreground: '#ffffff',
        },
        border: 'rgba(0, 0, 0, 0.1)',
        input: {
          DEFAULT: 'transparent',
          background: '#f3f3f5',
        },
        ring: '#0b2239',
        switch: {
          background: '#cbced4',
        },
        chart: {
          1: 'oklch(.646 .222 41.116)',
          2: 'oklch(.6 .118 184.704)',
          3: 'oklch(.398 .07 227.392)',
          4: 'oklch(.828 .189 84.429)',
          5: 'oklch(.769 .188 70.08)',
        },
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['24px', { lineHeight: '1.3', fontWeight: '400' }],
        'h3': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'base': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '48px',
        '2xl': '80px',
        'section': '80px',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};

export default config;