<template>
  <div class="home">
    <h1> Home Page </h1>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
      };
    },
    created: function () {
    },
    methods: {
  },
};
</script>

