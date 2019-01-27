<template>
  <div>
    <hr>
    Counter: {{couter}}
    <br>
    <p>Date from Method: "{{ reverseMessageInMethod() }}"</p>
    <p>Date from Computed: "{{ reversedMessageInComputed }}"</p>
    <condition v-bind:couter="couter"/>
    <br>
    <button v-on:click="increate()">click for ++</button>
    <br>FOR LOOP
    <div v-for="(value, key, index) in object" v-bind:key="index+1">{{ index+1 }}. {{ key }}: {{ value }}</div>
  </div>
</template>
<script>
import Condition from "./Condition.vue";
export default {
  name: "BtnConter",
  components: {
    Condition
  },
  props: {
    title: String
  },
  data: function() {
    return {
      couter: 0,
      now: Date.now(),
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      }
    };
  },
  methods: {
    changeDate: function() {
      this.now = Date.now();
    },
    reverseMessageInMethod: function() {
      return Date.now();
    },
    increate: function() {
      this.couter++;
    }
  },
  computed: {
    // a computed getter
    reversedMessageInComputed: function() {
      // `this` points to the vm instance
      return Date.now();
    }
  }
};
</script>
