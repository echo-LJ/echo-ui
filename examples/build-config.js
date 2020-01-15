/*
 * ezsonar build config
 * rootUrl: static resource url
*/
var configs = {
  build: {
    rootUrl: '/doc/',
    apiUrl: 'doc/',
    apiRootUrl: '/',
    staticResourcePathName: 'static',
    historyMode: false
  },
  buildApp: {
    rootUrl: '',  // build-app should use relative url
    apiUrl: 'api/',
    apiRootUrl: '/',
    staticResourcePathName: 'static',
    historyMode: false
  },
  dev: {
    rootUrl: '/',
    apiUrl: 'api/',
    apiRootUrl: '/',
    staticResourcePathName: 'static',
    historyMode: false
  }
}

// var selectENV = 'dev'
// selectENV = 'build'

var selectENV = process.env.NODE_ENV === 'production' ? 'build' : 'dev'

module.exports = {
  rootUrl: configs[selectENV].rootUrl,
  apiUrl: configs[selectENV].apiUrl,
  apiRootUrl: configs[selectENV].apiRootUrl,
  staticResourcePathName: configs[selectENV].staticResourcePathName,
  historyMode: configs[selectENV].historyMode
}
