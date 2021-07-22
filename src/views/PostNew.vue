<template>
  <div class="home">
    <h1> Create new Post </h1>
    <div>
      <p>Title: <input type="text" v-model="newPostParams.title"></p>
      <p>Post: <input class="box" type="text" v-model="newPostParams.body"></p>
      <p>Image: <input type="text" v-model="newPostParams.image"></p>
      <button v-on:click="createPost()">Post</button>

    </div>
  </div>
</template>

<style>
.box { 
  width: 350px; height: 100px; border: 1px solid #999999; padding: 5px; 
  }</style>

<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        newPostParams: {},
      };
    },
    created: function () {
    },
    methods: {
      createPost: function () {
        console.log("creating....")
        axios
          .post("/posts", this.newPostParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/posts");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
    },
  };
</script>

