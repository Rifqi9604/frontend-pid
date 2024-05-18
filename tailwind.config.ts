import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purple: {
          50: '#F0F1FD',
          100: '#D2D3F8',
          200: '#BCBEF5',
          300: '#9DA1F1',
          400: '#8A8EEE',
          500: '#6D72EA',
          600: '#6368D5',
          700: '#4D51A6',
          800: '#3C3F81',
          900: '#2E3062',
        },
        blue: {},
        pink: {},
        neutral: {},
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        'light-green': {
          extend: 'light',
          colors: {
            primary: {
              50: '#EFF9EF',
              100: '#CEECCD',
              200: '#B6E2B4',
              300: '#95D592',
              400: '#81CD7D',
              500: '#61C15D',
              600: '#58B055',
              700: '#458942',
              800: '#356A33',
              900: '#295127',
              DEFAULT: '#61C15D',
              foreground: '#FFFFFF',
            },
            secondary: {
              50: '#FFEFEA',
              100: '#FFCFBE',
              200: '#FFB79F',
              300: '#FE9673',
              400: '#FE8258',
              500: '#FE632E',
              600: '#E75A2A',
              700: '#B44621',
              800: '#8C3619',
              900: '#6B2A13',
              DEFAULT: '#FE632E',
              foreground: '#FFFFFF',
            },
            warning: {},
            danger: {},
            success: {},
          },
        },
      },
    }),
  ],
};
export default config;
