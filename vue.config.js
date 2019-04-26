module.exports = {
  css: {
    loaderOptions: {
      less:{
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          'primary-color': '#3490dc'
        }
      }
    }
  },
  pwa: {
    name: 'Klorie'
  }
}
