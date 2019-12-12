<template>
  <div>
    <div class="input-container">
      <input 
        id="autocomplete-input" 
        class="input-placer" 
        placeholder="Your name"
        @input="valueChangedInInput"
      >
      <label for="email" class="form__label">Your Email</label>
    </div>
    <div> hej {{dateItemsList}}</div>
      <div id="suggestion-container">
        <div class="suggestion-item" v-for="(item, i) in dateItemsList" v-bind:key="i">
          <span v-show="item.header" class="suggestion-header"> {{item.header}} </span>
          <div v-show="item.text" class="suggestion-text-container">
            <span class="suggestion-text" v-html="item.text"></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'autocomplete',
  props: ['dataitems'],
  data () {
    return {
      dateItemsList: []
    }
  },
  watch: {
    dataitems: function () {

      var dataAfterSync = this.$props.dataitems;
      var newStringOfWords = '';
      var dataList = [];

      dataAfterSync.forEach(element => {
        var autoObj = {};

        if(element.header) {
          autoObj['header'] = element.header
        }
        else {

          var searchVal = document.getElementById("autocomplete-input").value;
          var elementTest = element.text;
          var elementTestToSmallCase = elementTest.toLowerCase();
          var searchvalSmallCase = searchVal.toLowerCase();
          var newStringOfWords = '';
          var searchvalSmallCaseFirstUpperCase = searchvalSmallCase.charAt(0).toUpperCase() + searchvalSmallCase.slice(1);
          var newWords = '<b>' + searchvalSmallCaseFirstUpperCase + '</b>';
          newStringOfWords = elementTestToSmallCase.replace(searchvalSmallCase, newWords)
          autoObj['text'] = newStringOfWords

        }
      
        dataList.push(autoObj)

      });

      this.dateItemsList = dataList;
      
    }
  },

  created () {
    this.dateItemsList =  this.$props.dataitems
  },
  
  methods: {
    valueChangedInInput: function () {
      
      var inputval = document.getElementById("autocomplete-input").value;
      this.$emit('sync', inputval)

    }
  }
}
</script>

<style scoped>
.input-container {
  position: relative;
  padding: 15px 0 15px;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.input-placer {
  font-family: inherit;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-left: 20px;
}

.input-placer::placeholder {
  color: transparent;
}

.input-placer:placeholder-shown ~ .form__label {
  font-size: 16px;
  cursor: text;
  top: 20px;
  left: 20px;
}

label {
  position: absolute;
  top: 3px;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #9b9b9b;
  left: 20px;
}

.input-placer:focus ~ .form__label {
  position: absolute;
  top: 3px;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #9b9b9b;
}

.input-placer:focus ~ .form__label {
  color: #009788;
  left: 20px;
}

#suggestion-container {
  overflow-y: auto;
  margin-top: -43px;
  position: relative;
  background-color: white;
  border-width: 0px 1px 1px 1px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-align: left;
}

.suggestion-header {
  padding: 2px 20px 2px 20px;
  font-family: inherit;
  align-items: center;
  display: flex;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  color: #9b9b9b;
}

.suggestion-text-container {
  padding: 5px 20px 5px 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

.suggestion-text {
  font-family: inherit;
}

</style>