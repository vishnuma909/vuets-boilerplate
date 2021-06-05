module.exports = {
  runtimeCompiler: true,

  pages: {
    index: {
      entry: 'src/main.ts'
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
