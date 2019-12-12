<template>
  <div id="app">
    <autocomplete v-on:sync="valueChanged" :dataitems="itemsData"/>
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
        // {'header': 'Pige navne'},
        // {'text': 'Amalie'},
        // {'text': 'Anne'},
        // {'text': 'Anna'},
        // {'text': 'Alma'},
        // {'text': 'Asta'},
        // {'header': 'Drenge navne'},
        // {'text': 'Brian'},
        // {'text': 'Benny'},
        // {'text': 'Biver'},
      ]
    }
  },

  methods: {
    valueChanged: function (val) {

      this.itemsData = [];

      this.itemsData = [
        {'header': 'Pige navne'},
        {'text': 'Amalie'},
        {'text': 'Anne'},
        {'text': 'Anna'},
        {'text': 'Alma'},
        {'text': 'Asta'}
      ]
    }
    
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
</style>
