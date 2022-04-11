<template>
  <section class="student-work">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :techStack="project.techStack"
      :imgSrc="project.image"
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
    this.projects = await this.$content('projects').fetch()
  },
}
</script>

<style>
.student-work {
  width: 80vw;
  margin: 3rem auto;
}
</style>
