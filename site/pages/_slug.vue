<template>
  <article class="article">
    <h1 class="article-title">{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
}
</script>

<style>
.article {
  width: 70vw;
  margin: 5rem auto;
}
.article-title {
  margin: 2rem auto;
}
.nuxt-content {
  font-size: var(--h4);
  line-height: 1.5;
}
.nuxt-content * {
  margin: 3rem auto;
}
</style>
