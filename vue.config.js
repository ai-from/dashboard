module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/common.scss";`
      }
    }
  }
}