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
  /* background-color: white;
  color: black; */
  padding: 3rem 5rem;
}
.article-title {
  margin: 5rem auto;

  font-weight: 700;
}
.nuxt-content {
  font-size: var(--h4);
  line-height: 1.5;
}
.nuxt-content * {
  margin: 3rem auto;
}
.nuxt-content h1,
h2 {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
