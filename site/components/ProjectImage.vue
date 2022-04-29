<template>
  <img class="project-splash-image" :src="getImage" :alt="getAlt" />
</template>

<script>
export default {
  props: {
    imageSrc: String,
    altText: String,
  },
  computed: {
    getImage: function () {
      return this.imageSrc
    },
    getAlt: function () {
      return this.altText
    },
  },
}
</script>

<style>
.project-splash-image {
  width: 80rem;
}
@media screen and (max-width: 900px) {
  .project-splash-image {
    width: 90%;
  }
}
</style>
