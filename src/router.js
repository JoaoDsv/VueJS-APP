import VueRouter from 'vue-router'
import Vue from 'vue'

import Post from '@/components/Post/Post.vue'
import About from '@/components/About/About.vue'
import PostList from '@/components/PostList/PostList.vue'


// VueJS application use vue-router for routing
Vue.use(VueRouter)

// Build routes object
const routes = [
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/',
    name: 'postList',
    component: PostList,
  },
]

// Init router with routes params
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})

export default router
