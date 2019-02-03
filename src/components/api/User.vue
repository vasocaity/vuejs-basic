<template>
  <div id="http-request-comp">
    <b-alert>ccc</b-alert>
    <p>{{this.$route.params.id}}</p>
  </div>
</template>
<script>
export default {
  name: "User",
  props: ["id"],
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    next()
  }
};
</script>
