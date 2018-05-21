<template>

  <div class="single-post-wrapper">
    <div class="single-post-container">

      <figure class="single-post-container__thumbnail" :style="{ backgroundImage: `url(${post.screenshot_url['300px']})` }"></figure>

      <div class="single-post-container__name single-post-container__part">
        {{post.name}}
      </div>

      <div class="single-post-container__votes single-post-container__part">
        {{post.votes.length}} upvotes
      </div>

      <div class="single-post-container__tag single-post-container__part">
        {{post.tagline}}
      </div>
    </div>
  </div>

</template>


<script>

import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {

  // Component will mount
  beforeMount(){
    // Fetch data
    this.getOnePost();
  },

  // Component's data
  data() {
    return {
      postId: this.$route.params.id,
      post: {
        votes: []
      },
    }
  },

  // Component's rendering functions
  computed: {},

  // Component's other functions
  methods: {
    // Get informations of one specific post depending on the ID in the URL
    getOnePost() {
      axios.get(`https://api.producthunt.com/v1/posts/${this.postId}`)
        .then((response) => {
          this.post = response.data.post
          console.log(this.post)
        })
    },
  },
}

</script>


<!-- CSS -->
<style lang="stylus" src="./Post.styl" scoped></style>
</style>
