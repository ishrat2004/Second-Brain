/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        gradient: 'gradient 1s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      colors:{ 
        gray:{ 
          100:"#eeeeef", 
          200:"#e6e9ed", 
          600:"#95989c"
        },
        purple:{ 
          200:"#d9ddee",
          500:"#9492db", 
          600:"#7164c0"
        }
      }
    },
  },
  plugins: [],
}

