<template>
  <section class="resources">
    <ul class="sort">
      <ResourcePill color="JS" title="JavaScript" />
      <ResourcePill color="CSS" title="CSS" />
      <ResourcePill color="Design" title="Design" />
      <ResourcePill color="Content" title="Content Makers" />
    </ul>
    <h2 class="section-title">Development</h2>
    <div class="resource-section">
      <Resource
        v-for="resource in DevResources"
        :key="resource.name"
        :title="resource.name"
        :image="resource.thumbnail"
        :link="resource.link"
        :alt="resource.alt"
        :text="resource.description"
      ></Resource>
    </div>
    <h2 class="section-title" id="Design">Design</h2>
    <div class="resource-section">
      <Resource
        v-for="resource in DesignResources"
        :key="resource.name"
        :title="resource.name"
        :image="resource.thumbnail"
        :link="resource.link"
        :alt="resource.alt"
        :text="resource.description"
      ></Resource>
    </div>
    <h2 class="section-title" id="JavaScript">JavaScript</h2>
    <div class="resource-section">
      <Resource
        v-for="resource in JSResources"
        :key="resource.name"
        :title="resource.name"
        :image="resource.thumbnail"
        :link="resource.link"
        :alt="resource.alt"
        :text="resource.description"
      ></Resource>
    </div>
    <h2 class="section-title" id="CSS">CSS</h2>
    <div class="resource-section">
      <Resource
        v-for="resource in CSSResources"
        :key="resource.name"
        :title="resource.name"
        :image="resource.thumbnail"
        :link="resource.link"
        :alt="resource.alt"
        :text="resource.description"
      ></Resource>
    </div>
    <h2 class="section-title" id="Content Makers">
      Content Creators and Libraries
    </h2>
    <div class="resource-section">
      <Resource
        v-for="resource in CreatorResources"
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
      resources: [],
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
      (el) => el.tag === 'css'
    )
    this.JSResources = this.resources.resources.filter((el) => el.tag === 'js')
    this.DevResources = this.resources.resources.filter(
      (el) => el.tag === 'development'
    )
    this.CreatorResources = this.resources.resources.filter(
      (el) => el.tag === 'creator'
    )
    this.DesignResources = this.resources.resources.filter(
      (el) => el.tag === 'design'
    )
  },

  computed: {},
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
