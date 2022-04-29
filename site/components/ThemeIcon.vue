<template>
  <span class="icon"><fa :icon="icon" /></span>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String,
  },
}
</script>

<style>
.icon {
  font-size: var(--h2);
  color: white;
}
</style>
