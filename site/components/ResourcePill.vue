<template>
  <a :href="getResource" class="resource-pill" :style="getColor">
    {{ title }}
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
  },
  data() {
    return {
      colors: {
        All: '#A5F3FC',
        JS: '#FEF08A',
        CSS: '#bfdbfe',
        Design: '#F87171',
        Content: '#BBF7D0',
        Dev: '#F5D0FE',
      },
    }
  },
  computed: {
    getColor() {
      return 'background-color: ' + this.colors[`${this.color}`]
    },
  },
}
</script>

<style scoped>
.resource-pill {
  font-size: var(--h4);
  width: 22rem;
  height: 5rem;
  color: #000;

  border: 2px solid transparent;
  padding: 0.5rem 2.4rem;
  text-decoration: none;
  transition: all 0.4s;

  border-radius: 3rem;
  transition: all 0.3s;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.resource-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 0.5rem rgba(color(black), 0.6);
}
.resource-pill::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s;
}
.resource-pill:hover::after {
  transform: scaleX(1.5) scaleY(1.6);
  opacity: 0;
}
.resource-pill:active {
  transform: translateY(-1px);
  transform: scaleX(1.5) scaleY(1.6);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
</style>
