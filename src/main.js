import Vue from 'vue'
import App from './App.vue'

import VueI18n from 'vue-i18n'
//
Vue.use(VueI18n)

Vue.config.productionTip = false

// 准备翻译的语言环境信息
const messages = {
  zh: {
    message: {
      name: '科比',
      hobby: "打篮球"
    }
  },
  en: {
    message: {
      name: 'kobe bryant',
      hobby: "basketball"
    }
  }
}

const lang = localStorage.getItem("lang") || "en";
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: lang, // 设置地区 en、zh
  messages, // 设置地区信息
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
