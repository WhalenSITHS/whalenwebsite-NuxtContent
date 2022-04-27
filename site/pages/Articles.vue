<template>
  <div></div>
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

<style></style>
