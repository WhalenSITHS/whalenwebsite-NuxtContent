<template>
  <section class="resources">
    <h2 class="section-title">Development</h2>
    <div class="resource-section">
      <Resource
        v-for="resource in resources.resources"
        :key="resource.name"
        :title="resource.name"
        :image="resource.thumbnail"
        :link="resource.link"
        :alt="resource.alt"
        :text="resource.description"
      ></Resource>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resources: null,
    }
  },
  async fetch() {
    this.resources = await this.$content('resources').fetch()
  },
}
</script>

<style>
.resources {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;
}
.section-title {
  font-size: var(--h1);
}
.resource-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80vw;
  margin: 5rem auto;
}
</style>
