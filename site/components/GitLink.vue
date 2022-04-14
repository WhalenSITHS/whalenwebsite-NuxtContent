<template>
  <a class="git-link" :href="getLink" target="_blank">Github</a>
</template>

<script>
export default {
  props: {
    sourceLink: String,
  },
  computed: {
    getLink: function () {
      return this.sourceLink
    },
  },
}
</script>

<style>
.git-link {
  font-size: var(--h4);
}
</style>
