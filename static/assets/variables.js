const variables = {
  media: {
    sm: '(max-width: 500px)',
    md: '(max-width: 840px)',
    lg: '(max-width: 1250)',
    xlg: '(min-width: 1250px)',
  },

  transition: (properties = 'all', time = '0.2') => `transition: ${properties} ${time}s`,

  colors: {
    black: '#333',
    darkgrey: '#404d5b',
    medgrey: '#868D91',
    lightgrey: '#ccc',
    almostwhite: '#c9cdd0',

    brightblue: '#4495db',
    lightblue: '#78c1ff',

    skills: {
      html: '#ec6433',
      css: '#3c9ad6',
      javascript: '#f4d944',
      react: '#71bfdb',
      sketch: '#e59946',
      bootstrap: '#50457b',
      sass: '#b25786',
      jquery: '#2e6daa',
      python: '#223c55',
      flask: '#fff',
      figma: '#60C290',
      nextjs: '#fff',
      mongodb: '#69B241',
    },
  },
};

export default variables;
