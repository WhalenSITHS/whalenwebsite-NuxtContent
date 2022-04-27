<template>
  <div class="article-card">
    <Nuxt-link to="index" class="article-card-img-wrapper">
      <img
        src="https://images.unsplash.com/photo-1650303923845-fea02ee7a52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="test image"
        class="article-card-img"
      />
    </Nuxt-link>
    <div class="article-tag-wrapper">
      <h4 class="article-tag">Education</h4>
      <h5 class="article-card-date">12-17-2022</h5>
    </div>
    <Nuxt-link class="article-card-title-wrapper" to="index">
      <h2 class="article-card-title">
        Why I Switched to CSS Custom Properties and You Should Too
      </h2>
    </Nuxt-link>

    <h3 class="article-card-author">Michael Whalen</h3>
  </div>
</template>

<script>
export default {}
</script>

<style>
.article-card {
  height: 45rem;
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
  background-color: blue;
  color: white;
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
  font-weight: 700;
  text-align: left;
}
.article-card-author {
  font-size: var(--h5);
  margin-bottom: 2rem;
  text-align: left;
}
</style>
