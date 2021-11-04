module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        body: 'var(--color-body)',
        alt: "var(--color-alt)",
        lines: 'var(--color-lines)'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      display: ['group-hover'],
    },
  },
  plugins: [],
}
