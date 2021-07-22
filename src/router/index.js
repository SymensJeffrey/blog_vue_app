import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test from '../views/test.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostIndex from "../views/PostIndex.vue";
import PostsNew from "../views/PostNew.vue";
import PostShow from "../views/PostShow.vue";
import PostEdit from "../views/PostEdit.vue";


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/test', name: 'Test', component: Test },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/posts", name: "PostsIndex", component: PostIndex },
  { path: "/posts/new", name: "PostsNew", component: PostsNew },
  { path: "/posts/:id", name: "PostShow", component: PostShow },
  { path: "/posts/:id/edit", name: "PostEdit", component: PostEdit },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
