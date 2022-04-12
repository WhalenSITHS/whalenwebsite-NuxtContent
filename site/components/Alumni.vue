<template>
  <div class="author-box">
    <h2 class="alum">
      {{ author }}
    </h2>
    <h3 class="school">{{ school }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    school: String,
  },
}
</script>

<style>
.alum {
  font-size: var(--h4);
  margin-bottom: 1rem;
}
.school {
  font-size: var(--h5);
  color: var(--secondary);
  font-style: italic;
}
</style>
