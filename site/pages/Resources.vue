<template>
  <section class="resources">
    <ul class="sort">
      <ResourcePill color="All" title="All" />
      <ResourcePill color="JS" title="JavaScript" />
      <ResourcePill color="CSS" title="CSS" />
      <ResourcePill color="Design" title="Design" />
      <ResourcePill color="Content" title="Content Creators" />
      <ResourcePill color="Dev" title="Development" />
    </ul>

    <div class="resource-section">
      <Resource
        v-for="resource in resources.resources"
        :key="resource.name"
        :title="resource.name"
        :image="resource.thumbnail"
        :link="resource.link"
        :alt="resource.alt"
        :tag="resource.tag"
        :text="resource.description"
      ></Resource>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resources: [],
      All: [],
      CreatorResources: [],
      DevResources: [],
      CSSResources: [],
      DesignResources: [],
      JSResources: [],
    }
  },
  async fetch() {
    this.resources = await this.$content('resources').fetch()
    this.CSSResources = this.resources.resources.filter(
      (el) => el.tag[0] === 'css'
    )
    this.JSResources = this.resources.resources.filter((el) => el.tag === 'js')
    this.DevResources = this.resources.resources.filter(
      (el) => el.tag[0] === 'development'
    )
    this.CreatorResources = this.resources.resources.filter(
      (el) => el.tag[0] === 'creator'
    )
    this.DesignResources = this.resources.resources.filter(
      (el) => el.tag[0] === 'design'
    )
  },

  computed: {
    sortResources(sortType) {
      if (this.sortType === 'All') return this.resources
      else {
        this.resources.resources.filter((el) => el.tag[0] === `${sortType}`)
      }
    },
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
.sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  margin: 3rem auto;
}
.section-title {
  font-size: var(--h1);
  margin: 3rem auto;
}
.resource-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80vw;
  margin: 7rem auto;
}
</style>
