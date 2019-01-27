<template>
  <div>
    {{post}}<br>
    <h3>{{ post.title }}</h3>
    <button v-on:click="$emit('enlarge-text', 0.2)">Enlarge text</button>
    <div v-html="post.content"></div>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ["post", "postFontSize"],
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
