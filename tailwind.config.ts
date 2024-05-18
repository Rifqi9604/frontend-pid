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
        purple: {},
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
            primary: {},
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
