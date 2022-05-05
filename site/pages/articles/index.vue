<template>
  <section class="articles-wrapper">
    <ArticlePreview
      v-for="article in articles"
      :key="article.title"
      :article="article"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    }
  },
  async fetch() {
    this.articles = await this.$content('articles')
      .sortBy('slug', 'desc')
      .fetch()
  },
}
</script>

<style>
.articles-wrapper {
  width: 80vw;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 900px) {
  .articles-wrapper {
    width: 90vw;
    flex-direction: column;
  }
}
</style>
