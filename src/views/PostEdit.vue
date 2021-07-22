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
  created: function() {
    this.getPost();
  },
  methods: {
    updatePost: function () {
      console.log("updating...")
      axios.patch(`/posts/${this.$route.params.id}`, this.editPostParams).then((response) => {
        console.log(response.date)
        this.$router.push("/posts/" + this.$route.params.id);
      })
    },
    getPost: function() {
      console.log("getting post...")
      axios.get(`/posts/${this.$route.params.id}`).then(response => {
          console.log(response.data);
          this.post = response.data;
          this.editPostParams = response.data
        })
      },
    }
  };
</script>