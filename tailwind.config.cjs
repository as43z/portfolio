const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'title': '#580075',
        'subtitle': '#333333',
        'background': '#E1E1E1',
        'font-footer': '#5F5F5F'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        sm: '0.75rem',
        l: '60px',
        '67': '67px'
      },
      screens: {
        'ss': '250px',
      },
    }
  },

  plugins: []
};

module.exports = config;