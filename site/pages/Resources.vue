<template>
  <section class="resources">
    <h2 class="filter">Filter By</h2>
    <ul class="sort">
      <ResourcePill
        color="All"
        title="All"
        @button-click="showJS(resources.resources)"
      />
      <ResourcePill
        color="JS"
        title="JavaScript"
        @button-click="showJS(JSResources)"
      />
      <ResourcePill
        color="CSS"
        title="CSS"
        @button-click="showJS(CSSResources)"
      />
      <ResourcePill
        color="Design"
        title="Design"
        @button-click="showJS(DesignResources)"
      />
      <ResourcePill
        color="Content"
        title="Content Creators"
        @button-click="showJS(CreatorResources)"
      />
      <ResourcePill
        color="Dev"
        title="Development"
        @button-click="showJS(DevResources)"
      />
    </ul>

    <div class="resource-section">
      <Resource
        v-for="resource in All"
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
    this.All = this.resources.resources
    this.CSSResources = this.resources.resources.filter((el) =>
      el.tag.includes('css')
    )
    this.JSResources = this.resources.resources.filter((el) =>
      el.tag.includes('js')
    )
    this.DevResources = this.resources.resources.filter((el) =>
      el.tag.includes('development')
    )
    this.CreatorResources = this.resources.resources.filter((el) =>
      el.tag.includes('creator')
    )
    this.DesignResources = this.resources.resources.filter((el) =>
      el.tag.includes('design')
    )
  },
  methods: {
    showJS: function (sortBy) {
      this.All = sortBy
    },
  },
}
</script>

<style>
.filter {
  color: var(--secondary);
  font-weight: 700;
}
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
  justify-content: space-around;
  width: 60vw;
  margin: 3rem auto;
  border-bottom: 3px solid #e3e5d7;
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
