<template>
  <div id="http-request-comp">
    <b-alert>ccc</b-alert>
    <p>{{this.$route.params.id}}</p>
    <router-link :to="{ name: 'login', params: { id: 123 }}">Login</router-link>
    <br>
    <router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link>
    <!-- Nested Named Views -->
    <router-view/>
    <router-view name="helper"/>
  </div>
</template>
<script>
export default {
  name: "User",
  props: ["id"]
};
</script>
