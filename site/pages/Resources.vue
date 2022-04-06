<template>
  <section class="resources">
    <ul class="sort">
      <ResourcePill color="All" title="All" />
      <ResourcePill color="JS" title="JavaScript" @button-click="showJS()" />
      <ResourcePill color="CSS" title="CSS" />
      <ResourcePill color="Design" title="Design" />
      <ResourcePill color="Content" title="Content Creators" />
      <ResourcePill color="Dev" title="Development" />
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
      showAll: true,
      showDev: false,
      showDesign: false,
      showJs: false,
      showCss: false,
      showCreator: false,
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
    this.DesignResources = this.resources.resources.filter(
      (el) => el.tag[0] === 'design'
    )
  },
  methods: {
    showJS: function () {
      this.All = this.JSResources
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
