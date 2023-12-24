import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
    },
    screens: {
      '2xl': {
        'max': '1479px'
      },
      'xl': {
        'max': '1379px'
      },
      'lg': {
        'max': '1279px'
      },
      'md': {
        'max': '1023px'
      },
      'sm': {
        'max': '766px'
      },
      'xs': {
        'max': '566px'
      },
      '2xs': {
        'max': '480px'
      },
    },
  },
  plugins: [],
}
export default config