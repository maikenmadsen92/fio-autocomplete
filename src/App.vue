<template>
  <div id="app">
    <autocomplete :dataitems="itemsData"/>
  </div>
</template>

<script>
import autocomplete from './components/autocomplete.vue'

export default {
  name: 'app',
  components: {
    autocomplete
  },
   data () {
    return {
      itemsData: [
        {'header': 'Pige navne'},
        {'text': 'Amalie'},
        {'text': 'Anne'},
        {'text': 'Anna'},
        {'text': 'Alma'},
        {'text': 'Asta'},
        {'header': 'Drenge navne'},
        {'text': 'Anders'},
        {'text': 'Andreas'},
        {'text': 'Allan'},
      ]
    }
  },
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
</style>
