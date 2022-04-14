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
        JavaScript:
          'https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/js_yjli5z.png',
        NodeJS:
          'https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/node2_cifopi.png',
        MongoDB:
          'https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/mongo_mx4lbb.png',
        CSS: 'https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,w_300/v1613094438/Logos/CSS3_logo_and_wordmark.svg_hhsmud.png',
        Vite: 'https://res.cloudinary.com/dbopxlpuy/image/upload/f_auto,q_auto/v1649768534/Logos/vite_nyqmpf.svg',
        Nuxt: 'https://res.cloudinary.com/dbopxlpuy/image/upload/f_auto,q_auto/v1649768534/Logos/Nuxt_logo_jcmwuu.svg',
        Tailwind:
          'https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,q_auto,w_512/v1649770103/Logos/tailwind_uou0cq.svg',
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
  height: 3.5rem;
  margin: 0.5rem 2rem;
}
</style>
