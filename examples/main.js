import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import i18nMessage from './lib/i18n'

import EchoUI from './../packages'

Vue.use(EchoUI);
Vue.config.productionTip = false
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh-CN',
  silentTranslationWarn: true,
  missing: (locale, key) => {
    return key
  },
  messages: i18nMessage
})

// router.afterEach(route => {
//   let _title = route.meta.pageTitle ? route.meta.pageTitle : ''
//   setHtmlPageTitle(_title)
// })

// const setHtmlPageTitle = function (newTitle) {
//   if (pageTitleDom) {
//     let _newTitle = newTitle ? i18n.t(newTitle) + ' | ' + i18n.t('text.bolgName') : i18n.t('text.bolgName')
//     pageTitleDom.innerText = _newTitle
//   }
// }

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
