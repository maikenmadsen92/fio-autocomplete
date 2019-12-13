<template>
  <div id="app">
    <autocomplete :label="label" v-on:itemClicked="itemIsClicked" v-on:sync="valueChanged" :dataitems="itemsData"/>
  </div>
</template>

<script>
import autocomplete from './fio-autocomplete.vue'

export default {
  name: 'app',
  components: {
    autocomplete
  },
   data () {
    return {
      label: 'Write a name',
      itemsData: []
    }
  },

  methods: {
    valueChanged: function (val) {

      this.itemsData = [];

      this.itemsData = [
        {'header': 'Girls name'},
        {'text': 'Amelia', 'value': 'here is a value'},
        {'text': 'Alexa', 'value': 'here is a value'},
        {'text': 'Ariana', 'value': 'here is a value'},
        {'text': 'Annabelle', 'value': 'here is a value'},
        {'text': 'Alexandra', 'value': 'here is a value'},
        {'header': 'Boys name'},
        {'text': 'Antonio', 'value': 'here is a value'},
        {'text': 'Andrew', 'value': 'here is a value'},
        {'text': 'Alexander', 'value': 'here is a value'},
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
