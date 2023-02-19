module.exports = {
  content: ['./src/html/**/*.html'],
  theme: {
    extend: {
      screens: {
        min999: '999px',
        max999: {'max': '999px'},
      },
      fontFamily: {
        MonumentExtended: ['Monument Extended'],
      },
      colors: {
        nameColor: '#ffffff',
      },
      backgroundImage: {
        'lazy-load-bg': "url(data:image/gif;base64,R0lGODlhCgAIAIABAN3d3f///yH5BAEAAAEALAAAAAAKAAgAAAINjAOnyJv2oJOrVXrzKQA7)",
      },
    },
  }
}