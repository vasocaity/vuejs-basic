<template>
  <div>
    <hr>
    <h1>PARENT component</h1>
    <div id="blog-posts-events-demo">
      <div :style="{ fontSize: postFontSize + 'em' }">
        <child
          v-for="post in posts"
          v-bind:key="post.id"
          v-on:enlarge-text="onEnlargeText"
          v-bind:post="post"
        />
      </div>
    </div>
    <br>
    searchText Two Way binding: {{seachText}}
    <v-model v-model="seachText"></v-model>
  </div>
</template>
<script>
import Child from "./Child.vue";
import VModel from "./VModel.vue";
export default {
  name: "Praent",
  components: {
    Child,
    VModel
  },
  data: function() {
    return {
      postFontSize: 1,
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      seachText: 'test'
    };
  },
  methods: {
    onEnlargeText: function(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
  }
};
</script>
