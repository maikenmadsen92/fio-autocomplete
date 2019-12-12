<template>
  <div id="app">
    <autocomplete :label="label" v-on:itemClicked="itemIsClicked" v-on:sync="valueChanged" :dataitems="itemsData"/>
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
      label: 'Skriv et navn',
      itemsData: [
        {'header': 'Pige navne'},
        {'text': 'Amalie', 'value': 'here is a value'},
        {'text': 'Anne', 'value': 'here is a value'},
        {'text': 'Anna', 'value': 'here is a value'},
        {'text': 'Alma', 'value': 'here is a value'},
        {'text': 'Asta', 'value': 'here is a value'},
        {'header': 'Drenge navne'},
        {'text': 'Brian', 'value': 'here is a value'},
        {'text': 'Benny', 'value': 'here is a value'},
        {'text': 'Biver', 'value': 'here is a value'},
      ]
    }
  },

  methods: {
    valueChanged: function (val) {

      this.itemsData = [];

      this.itemsData = [
        {'header': 'Pige navne', 'value': 'here is a value'},
        {'text': 'Amalie', 'value': 'here is a value'},
        {'text': 'Anne', 'value': 'here is a value'},
        {'text': 'Anna', 'value': 'here is a value'},
        {'text': 'Alma', 'value': 'here is a value'},
        {'text': 'Asta', 'value': 'here is a value'}
      ]
    },

    itemIsClicked: function (val) {
      console.log('items is clicked ' + JSON.stringify(val))
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
