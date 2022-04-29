<template>
  <div class="article-card">
    <Nuxt-link
      :to="`/articles/${article.slug}`"
      class="article-card-img-wrapper"
    >
      <img :src="getImg" alt="test image" class="article-card-img" />
    </Nuxt-link>
    <div class="article-tag-wrapper">
      <h4 class="article-tag" :style="getColor">{{ article.tags[0] }}</h4>
      <h5 class="article-card-date">{{ article.date }}</h5>
    </div>
    <Nuxt-link
      class="article-card-title-wrapper"
      :to="{ name: 'slug', params: { slug: article.slug } }"
    >
      <h2 class="article-card-title">
        {{ article.title }}
      </h2>
    </Nuxt-link>

    <h3 class="article-card-author">{{ article.author }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    article: {},
  },
  data() {
    return {
      colors: {
        JavaScript: '#FEF08A',
        CSS: '#bfdbfe',
        Design: '#F87171',
        Education: '#BBF7D0',
        Development: '#F5D0FE',
        Library: '#FEF08A',
      },
    }
  },
  computed: {
    getImg: function () {
      return this.article.image
    },
    getColor() {
      return 'background-color: ' + this.colors[`${this.article.tags[0]}`]
    },
  },
}
</script>

<style>
.article-card {
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 27%;
  margin: 3rem auto;
}
.article-card-img-wrapper {
  width: 100%;
  display: block;
  height: 40%;
  margin-bottom: 2rem;
}
.article-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.article-tag-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
}
.article-tag {
  color: black;
  width: 40%;
  padding: 5px;
  font-size: var(--h5);
}
.article-card-date {
  width: 40%;
  font-size: var(--h5);
  color: var(--secondary);
  text-align: right;
}
.article-card-title-wrapper,
.article-card-title-wrapper:link,
.article-card-title-wrapper:visited,
.article-card-title-wrapper:active {
  text-decoration: none;
  color: white;
}
.article-card-title {
  font-size: var(--h4);
  margin-bottom: 2rem;

  text-align: left;
}
.article-card-author {
  font-size: var(--h5);
  margin-bottom: 2rem;
  text-align: center;
  background-color: var(--secondary);
  width: 40%;
  padding: 1rem;
}
@media screen and (max-width: 900px) {
  .article-card {
    width: 70vw;
    flex-direction: column;
  }
}
</style>
