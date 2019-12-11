<template>
  <div>
   
    <div class="form__group">
      <input type="email" id="email" class="form__field" placeholder="Your Email">
      <label for="email" class="form__label">Your Email</label>
    </div>
   
    <div> hej {{dateItemsList}}</div>
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

      this.dateItemsList = this.$props.dataitems;
    }
  },

  created () {
    this.dateItemsList =  this.$props.dataitems
  },
  
  methods: {
    
  }
}
</script>

<style scoped>
.form__group {
  position: relative;
  padding: 15px 0 15px;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.form__field {
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

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
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

.form__field:focus ~ .form__label {
  position: absolute;
  top: 3px;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #9b9b9b;
}

.form__field:focus ~ .form__label {
  color: #009788;
  left: 20px;
}

</style>