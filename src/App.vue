<template>
  <div id="app">
  <div style="text-align:center;">
    <button @click="changeLang('zh')">中文</button>
    <button @click="changeLang('en')">英文</button>
  </div>
    <h1>Hello Vue-i18n </h1>
    <p>
      {{ $t("message.name") +  ' ' + $t("message.hobby") }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    changeLang(lang){
      console.log('changeLang:' + lang);
      localStorage.setItem('lang',lang)
      location.reload();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
