import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        'calc-4': 'calc(100vh - 4rem)',
        'calc-5': 'calc(100vh - 5rem)',
        'calc-6': 'calc(100vh - 6rem)',
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'gradient-y': 'gradient-y 5s ease infinite',
        'gradient-xy': 'gradient-xy 5s ease infinite',
        'spin-slow': 'spin 7s linear infinite',
        'fade-out-on-scroll': 'fade-out-on-scroll 0.5s forwards',
        'scale-card1-on-scroll': 'scale-card1-on-scroll linear forwards',
        'scale-card2-on-scroll': 'scale-card2-on-scroll linear forwards',
        'scale-card3-on-scroll': 'scale-card3-on-scroll linear forwards',
        'scale-card4-on-scroll': 'scale-card4-on-scroll linear forwards',
        'scale-card5-on-scroll': 'scale-card5-on-scroll linear forwards',
        'scale-card6-on-scroll': 'scale-card6-on-scroll linear forwards',
        'scale-card7-on-scroll': 'scale-card7-on-scroll linear forwards',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'fade-out-on-scroll': {
          '0%': {
            'opacity': '1',
            'scale': '1',
            'filter': 'blur(0)',
          },
          '20%': {
            'z-index': '-1'
          },
          '50%': {
            'opacity': '0',
            'z-index': '-1'
          },
          '100%': {
            'scale': '4',
            'filter': 'blur(20px)',
            'opacity': '0',
            'z-index': '-1'
          }
        },
        'scale-card1-on-scroll': {
          to: {
            'scale': '0.70',
          }
        },
        'scale-card2-on-scroll': {
          to: {
            'scale': '0.75',
          }
        },
        'scale-card3-on-scroll': {
          to: {
            'scale': '0.80'
          }
        },
        'scale-card4-on-scroll': {
          to: {
            'scale': '0.85'
          }
        },
        'scale-card5-on-scroll': {
          to: {
            'scale': '0.90'
          }
        },
        'scale-card6-on-scroll': {
          to: {
            'scale': '0.95',
          }
        },
        'scale4-card7-on-scroll': {
          to: {
            'scale': '1.0'
          }
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          "foreground": "#000000",
          "secondary": "#F4F4F5",
        },
      },
      dark: {
        colors: {
          "foreground": "#FFFFFF",
          "secondary": "#27272A"
        },
      },
    },
  }),
  ],
}
export default config
