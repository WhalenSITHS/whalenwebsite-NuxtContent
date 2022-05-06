<template>
  <article class="article">
    <ThemeSwitcher />
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
  background-color: var(--article-background);
  color: var(--article-text);
  padding: 3rem 5rem;
  transition: all 0.3s;
}
@media screen and (max-width: 800px) {
  .article {
    width: 90vw;
    padding: 2rem 1.5rem;
  }
}
.article-title {
  margin: 5rem auto;

  font-weight: 700;
}

@media screen and (max-width: 900px) {
  .article-title {
    margin: 3rem auto;
    font-size: var(--h2);
    font-weight: 700;
  }
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
