<template>
  <button class="theme-switch" @click="toggleTheme">
    <ThemeIcon :icon="modeIcon" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      mode: 'Dark',
      colors: ['Light', 'Dark'],
      modeIcon: 'sun',
    }
  },
  methods: {
    toggleTheme() {
      if (this.mode === 'Dark') {
        this.mode = 'Light'
        this.modeIcon = 'moon'
        console.log('Light')
      } else {
        this.mode = 'Dark'
        this.modeIcon = 'sun'

        console.log('Dark')
      }
      this.$colorMode.preference = this.mode
    },
  },
}
</script>

<style>
.theme-switch {
  width: 10rem;
  height: 10rem;
  margin: 2rem auto;
  border-radius: 50%;
  border: none;
  background-color: var(--secondary);
}
</style>
