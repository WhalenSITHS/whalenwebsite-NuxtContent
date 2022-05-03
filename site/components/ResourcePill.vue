<template>
  <h5 class="resource-pill" :style="getColor">
    {{ title }}
  </h5>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      colors: {
        JavaScript: '#FEF08A',
        CSS: '#bfdbfe',
        Design: '#F87171',
        Creator: '#BBF7D0',
        Development: '#F5D0FE',
        Library: '#FEF08A',
      },
    }
  },
  computed: {
    getColor() {
      return 'background-color: ' + this.colors[`${this.title}`]
    },
  },
}
</script>

<style>
.resource-pill {
  font-size: 1rem;

  height: 3rem;
  color: black;
  border: 2px solid transparent;
  text-decoration: none;
  transition: all 0.3s;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 10rem;
  border-radius: 15px;
}
.resource-pill:hover {
  cursor: normal;
}

/* .resource-pill::after {
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
} */
</style>
