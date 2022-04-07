<template>
  <section class="resources">
    <h2 class="filter">Filter By</h2>
    <!--  <span class="icon about-icon"><fa :icon="['fab', 'youtube']" /></span>
    <span class="icon about-icon"><fa icon="laptop-code" /></span> -->

    <multiselect
      track-by="drop"
      label="drop"
      @input="sortBy(value)"
      class="multi"
      v-model="value"
      :options="options"
    ></multiselect>

    <div class="resource-section">
      <Resource
        v-for="resource in SortedResources"
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
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data() {
    return {
      value: null,
      options: [
        { cat: [], drop: 'All' },
        { cat: [], drop: 'JavaScript' },
        { cat: [], drop: 'CSS' },
        { cat: [], drop: 'Design' },
        { cat: [], drop: 'Development' },
        { cat: [], drop: 'Content Creators' },
      ],
      resources: [],
      AllResources: [],
      SortedResources: [],
      CreatorResources: [],
      DevResources: [],
      CSSResources: [],
      DesignResources: [],
      JSResources: [],
    }
  },
  async fetch() {
    this.resources = await this.$content('resources').fetch()
    this.SortedResources = this.resources.resources
    this.options[0].cat = this.resources.resources
    this.options[2].cat = this.resources.resources.filter((el) =>
      el.tag.includes('css')
    )
    this.options[1].cat = this.resources.resources.filter((el) =>
      el.tag.includes('js')
    )
    this.options[4].cat = this.resources.resources.filter((el) =>
      el.tag.includes('development')
    )
    this.options[5].cat = this.resources.resources.filter((el) =>
      el.tag.includes('creator')
    )
    this.options[3].cat = this.resources.resources.filter((el) =>
      el.tag.includes('design')
    )
  },
  methods: {
    sortBy: function (value) {
      if (value == null) {
        this.SortedResources = this.options[0].cat
      } else {
        this.SortedResources = value.cat
      }
    },
    test: function (value) {
      if (value == null) {
        console.log('test')
      } else {
        console.log(value.cat)
      }
    },
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.about-icon {
  font-size: var(--h2);
  color: red;
  margin: 5%;
}
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
.multi {
  width: 30vw;
  margin: 3rem auto;
  height: 4rem;
}

@media screen and (max-width: 900px) {
  .multi {
    width: 60vw;
  }
}
</style>
