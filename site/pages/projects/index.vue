<template>
  <section class="student-work">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :techStack="project.techStack"
      :imgSrc="project.image"
      :project="project.project"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    this.projects = await this.$content('projects')
      .sortBy('year', 'desc')
      .fetch()
  },
}
</script>

<style>
.student-work {
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  list-style: none;
  padding: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5vw;
}
@media screen and (max-width: 900px) {
  .student-work {
    grid-template-columns: repeat(1, 1fr);
    width: 90vw;
  }
}
</style>
