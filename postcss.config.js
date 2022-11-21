module.exports = {
  "plugins":{
    "autoprefixer":{
      overrideBrowserslist:[
        "Android 4.1",
        "iOS 7.1",
        "Chrome >31",
        "not ie <=11",
        "> 1%",
        "last 2 versions"
      ]
    },
    "postcss-pxtorem":{
      rootValue: 75,
      unitPrecision: 6,
      propList: ['*'],
      replace: true,
      mediaQuery: true,
      minPixeValue: 1,
      exclude: /node_modules/i
    }
  }
}