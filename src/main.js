import Vue from 'vue'
import App from './App.vue'

import VueI18n from 'vue-i18n'
//
Vue.use(VueI18n)

Vue.config.productionTip = false

import zh from "./i18n/lang/zh.json";
import en from "./i18n/lang/en.json";
import japan from "./i18n/lang/japan.json";

// 准备翻译的语言环境信息
const messages = {
  zh, en, japan
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
