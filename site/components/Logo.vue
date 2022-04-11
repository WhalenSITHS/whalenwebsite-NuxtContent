<template>
  <img class="Logo-img" :src="getSource" :alt="getAlt" />
</template>

<script>
export default {
  props: {
    source: String,
  },
  data() {
    return {
      stacks: {
        Vue: 'https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/Vuelogo_kif8pr.png',
        Firebase:
          'https://res.cloudinary.com/dbopxlpuy/image/upload/f_auto,q_auto/v1613094438/Logos/firebase_byc1b1.webp',

        SCSS: 'https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094439/Logos/Sass_Logo_Color_r1mv6v.png',
      },
    }
  },

  computed: {
    getSource() {
      return this.stacks[`${this.source}`]
    },
    getAlt() {
      return `${this.source} Logo`
    },
  },
}
</script>

<style>
.Logo-img {
  height: 4rem;
}
</style>
