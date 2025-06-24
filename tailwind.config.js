/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
      },
      fontWeight: {
        weight: '700',
      },
      fontSize: {
        number: '2rem',
      },
      colors: {
        theme1: {
          bg: 'hsl(222, 26%, 31%)',
          toggle: 'hsl(223, 31%, 20%)',
          screen: 'hsl(224, 36%, 15%)',
          keyBlue: 'hsl(225, 21%, 49%)',
          shadowBlue: 'hsl(224, 28%, 35%)',
          keyHover: 'hsl(225, 21%, 69%)',
          keyRed: 'hsl(6, 63%, 50%)',
          shadowRed: 'hsl(6, 70%, 34%)',
          keyRedHover: 'hsl(6, 63%, 70%)',
          keyLight: 'hsl(30, 25%, 89%)',
          shadowLight: 'hsl(28, 16%, 65%)',
          textDark: 'hsl(221, 14%, 31%)',
          textWhite: 'hsl(0, 0%, 100%)',
        },
        theme2: {
          bg: 'hsl(0, 0%, 90%)',
          toggle: 'hsl(0, 5%, 81%)',
          screen: 'hsl(0, 0%, 93%)',
          keyCyan: 'hsl(185, 42%, 37%)',
          shadowCyan: 'hsl(185, 58%, 25%)',
          keyHover: 'hsl(185, 42%, 57%)',
          keyOrange: 'hsl(25, 98%, 40%)',
          shadowOrange: 'hsl(25, 99%, 27%)',
          keyOrangeHover: 'hsl(25, 98%, 60%)',
          keyLight: 'hsl(45, 7%, 89%)',
          shadowGray: 'hsl(35, 11%, 61%)',
          textDark: 'hsl(60, 10%, 19%)',
          textWhite: 'hsl(0, 0%, 100%)',
        },
        theme3: {
          bg: 'hsl(268, 75%, 9%)',
          toggle: 'hsl(268, 71%, 12%)',
          screen: 'hsl(268, 71%, 12%)',
          keyViolet: 'hsl(281, 89%, 26%)',
          shadowMagenta: 'hsl(285, 91%, 52%)',
          keyVioletHover: 'hsl(281, 89%, 46%)',
          keyVioletHover2: 'hsl(251, 69%, 66%)',
          keyCyan: 'hsl(176, 100%, 44%)',
          shadowCyan: 'hsl(177, 92%, 70%)',
          keyCyanHover: 'hsl(176, 100%, 84%)',
          keyDark: 'hsl(268, 47%, 21%)',
          shadowDark: 'hsl(290, 70%, 36%)',
          textYellow: 'hsl(52, 100%, 62%)',
          textDark: 'hsl(198, 20%, 13%)',
          textWhite: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
}

