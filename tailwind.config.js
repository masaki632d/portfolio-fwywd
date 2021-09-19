module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#fff',
        green: '#008c8d',
        lightGreen: '#6bc2c3',
        lightBlue: '#dff4f5',
        lightBackBlue: '#f1f7f8',
        Orange: '#f2a766',
      },
      backgroundImage: (theme) => ({
        'about-img': "url('../../public/bg-about.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
