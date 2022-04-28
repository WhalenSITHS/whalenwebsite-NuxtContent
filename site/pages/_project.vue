<template>
  <section class="project-container">
    <h1 class="project-title">{{ work.title }}</h1>

    <ProjectImage :imageSrc="work.image" :altText="work.altText" />
    <h3 class="created-by">Created By</h3>
    <ul class="developers">
      <Alumni
        v-for="alumni in work.developers"
        :key="alumni.name"
        :author="alumni.name"
        :school="alumni.school"
      />
    </ul>

    <p class="project-desc">{{ work.description }}</p>
    <ul class="project-links-wrapper">
      <GitLink :sourceLink="work.github" />
      <SiteLink :sourceLink="work.siteLink" />
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const work = await $content('projects', params.project).fetch()
    return { work }
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
</style>
