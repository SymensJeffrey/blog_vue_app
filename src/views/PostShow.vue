<template>
  <div class="show">
    <h1>{{ post.id }}</h1>
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <p> <img v-bind:src="post.image"> </p>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Show Page",
      post: {}
    };
  },
  created: function() {
    this.showPost();
  },
  methods: {
    showPost: function () {
      console.log("showing...");
      console.log(this.$route)
      axios.get(`/posts/${this.$route.params.id}`).then(response => {
          console.log(response.data);
          this.post = response.data;
        })
      },
    }
  };
</script>