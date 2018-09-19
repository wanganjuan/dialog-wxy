<template>
  <div id="app">
    <div id="xx"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    console.log(this.$alert)
  },
  mounted () {
    var MyComponent = Vue.extend({
      template: '<p class="123">Hello1!</p>'
    })
    // new MyComponent({el: '#xx'})
    const instance = new MyComponent({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    this.$alert({mes: 'xxx'})
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
