<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/posts">Posts</router-link> |
      <router-link to="/posts/new">New Post</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/logout">Logout</router-link>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/posts">Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/posts/new">New Post</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Authentication
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/signup">Signup</a></li>
                  <li v-if="!isLoggedIn()"><a class="dropdown-item" href="/login">Login</a></li>
                  <li v-if="isLoggedIn()"><a class="dropdown-item" href="/logout">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>is logged in? {{ isLoggedIn() }}</p>
      <p> User ID {{ getUserId() }} </p>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }      
    },
    getUserId: function() {
      return localStorage.getItem("user_id");
    }
  }
}
</script>

