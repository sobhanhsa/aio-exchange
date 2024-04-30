import type { Config } from "tailwindcss";
// const plugin = require('tailwindcss/plugin')
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'secondary':'#777E90',
        'secondarySoft':'#B1B5C3',
        'bg': '#ffffff',
        'bgSoft': '#F7F7F7',
        'primary':'#3772FF'
        
      },
    },
  },

  plugins: [
    // plugin(function ({addUtilities}) {
    //   addUtilities({
    //     '.card-shadow': {
    //       'box-shadow': 'auto',
    //     }
    //   })
    // })
  ]
};
export default config;
