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
    this.articles = await this.$content('articles').fetch()
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
</style>
