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
.git-link,
.git-link:link,
.git-link:visited {
  font-size: var(--h3);
  text-decoration: none;
  color: #fff;
  border-bottom: 3px solid transparent;
  padding: 0.5rem 2rem;
  transition: all 0.3s;
}
.git-link:hover {
  border-bottom: 3px solid #fff;
}
</style>
