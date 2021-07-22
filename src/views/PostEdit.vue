<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Title: <input type="text" v-model="editPostParams.title"></p>
    <p>Post: <input class="box" type="text" v-model="editPostParams.body"></p>
    <p>Image: <input type="text" v-model="editPostParams.image"></p>
    <button v-on:click="updatePost()">Update</button>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Update Post",
      editPostParams: {}
    };
  },
  created: function() {},
  methods: {
    updatePost: function () {
      console.log("updating...")
    },
  }
};
</script>