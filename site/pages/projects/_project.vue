<template>
  <section class="project-container">
    <h1 class="project-title">{{ article.title }}</h1>

    <ProjectImage :imageSrc="article.image" :altText="article.altText" />
    <h3 class="created-by">Created By</h3>
    <ul class="developers">
      <Alumni
        v-for="alumni in article.developers"
        :key="alumni.name"
        :author="alumni.name"
        :school="alumni.school"
      />
    </ul>

    <p class="project-desc">{{ article.description }}</p>
    <ul class="project-links-wrapper">
      <GitLink :sourceLink="article.github" />
      <SiteLink :sourceLink="article.siteLink" />
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('projects', params.project).fetch()
    return { article }
  },
}
</script>

<style>
.project-container {
  width: 80rem;
  margin: 3rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.project-title {
  margin: 3rem auto;
}
.developers {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 3rem auto;
}
.project-desc {
  font-size: var(--h4);
  width: 100%;
  line-height: 1.5;
}
.created-by {
  margin: 3rem auto;
}
.project-links-wrapper {
  margin: 2rem auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
@media screen and (max-width: 900px) {
  .project-container {
    width: 90vw;
  }
}
</style>
