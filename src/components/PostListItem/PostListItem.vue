<template>

  <li class="item">
    <router-link class="item-router-link" :to="{name: 'post', params: {id: post.id}}">

      <figure class="thumbnail" :style="{ backgroundImage: `url(${post.screenshot_url['300px']})` }"></figure>
      <div class="infos">

        <h2 class="infos-name">{{ post.name }}</h2>
        <span class="votes-count">{{ post.votes_count }} upvotes</span>
        <h3 class="tagline">{{ post.tagline }}</h3>
      </div>

    </router-link>
  </li>

</template>


<script>

export default {
  // Props from parent component
  props: ['post']
}

</script>

<style lang="stylus" src="./PostListItem.styl" scoped></style>
