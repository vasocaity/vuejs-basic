<template>
  <div id="http-request-comp">
    <button v-on:click="getSource()">get source</button>
    <div v-if="source">
      <ul>
        <li v-for="(item,index) in source" v-bind:key="index">
         <b> {{item.userId}} , {{item.title}}</b><br>
          <p>{{item.body}}</p>
          </li>
      </ul>
    </div>
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
  props: ["id"],
  data: function() {
    return {
      source: []
    };
  },
  methods: {
    getSource: function() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          this.source = response.body;
          // eslint-disable-next-line
          console.log("http get");
        });
    }
  }
};
</script>
