<template>

  <div class="home">
    <h1> Posts </h1>
    <p>Search: <input v-model="search_term"></p>
    <div v-for="post in filterBy(posts, search_term, 'title') ">
      <p> {{ post.id }} </p>
      <h3> {{ post.title }} </h3>
      <p> {{ post.body }} </p>
      <router-link v-bind:to="`/posts/${post.id}`">
        <p> <img v-bind:src="post.image"> </p>
      </router-link>
      <p> ---------------------------------------------------------------- </p>
    </div>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";
  import Vue2Filters from "vue2-filters";
  export default {
    mixins: [Vue2Filters.mixin],
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        posts: [],
        search_term: ""
      };
    },
    created: function () {
      this.indexPosts ();
    },
    methods: {
      indexPosts: function () {
          console.log("indexing...")
          axios.get("http://localhost:3000/posts").then(response => {
          console.log(response.data);
          this.posts = response.data;
        })
      },
    }
  };
</script>

