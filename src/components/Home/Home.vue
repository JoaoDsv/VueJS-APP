<!-- HTML -->
<template>

  <!-- App wrapper -->
  <div class="app-wrapper">

    <!-- App Nav Router -->
    <ul class="app-nav">
      <li>
        <router-link class="app-nav__item" :to="{ name: 'postList' }">DAILY POSTS LIST</router-link>
      </li>
      <li>
        <router-link class="app-nav__item" :to="{ name: 'about' }">ABOUT US</router-link>
      </li>
    </ul>

    <!-- App Header -->
    <div class="app-header">
      <h1 class="app-title">ProductHunt</h1>
      <div class="app-tagline">
        The best new products, every day
        <br />
        <span class="app-tagline__tp" >- TP2 -</span>
      </div>
    </div>

    <!-- App Content -->
    <router-view></router-view>

    <!-- App Footer -->
    <div class="app-footer">
      Joao Da Silva Marly - P2019
    </div>


  </div>
</template>

<!-- JS -->
<script>

import { mapGetters, mapActions } from 'vuex'
import PostList from '../PostList/PostList.vue'

export default {

  // Component's display functions
  computed: {
    // From store
    ...mapGetters([])
  },

  // Component's other functions
  methods: {
    // From store
    ...mapActions([])
  }
}


</script>

<!-- CSS -->
<style lang="stylus" src="./Home.styl" scoped></style>
