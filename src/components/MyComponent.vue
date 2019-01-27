<template>
  <div>
    {{dateNow}}<br>
     <btn-conter v-bind:title="msg"/>
     <parent/>
    </div>
</template>
<script>
import BtnConter from "./BtnConuter.vue";
import Parent from "./Parent.vue";
export default {
  name: "MyComponent",
  components:{
    BtnConter,
    Parent
  },
  data: function() {
    return {
      dateNow: new Date(),
      msg: 'hi vue js'
    };
  }
};
</script>
