<template>
  <div>
    <Header />
    <About />
    <Community />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    /*  animateOnScroll() {
      this.$gsap.from('.about-animation', {
        duration: 0.5,
        opacity: 0,
        x: -150,
        ease: 'Power1.easeInOut',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.about',
        },
      })
    }, */
    animateOnScroll() {
      const tl = this.$gsap.timeline({
        scrollTrigger: '.about',
        delay: 0.1,
      })
      tl.from('.about-animation', {
        duration: 0.3,
        opacity: 0,
        x: -150,
        ease: 'Power1.easeInOut',
        stagger: 0.1,
      })
      tl.from(
        '.about-img',
        {
          opacity: 0,
          duration: 0.5,
          ease: 'Power1.easeInOut',
        },

        '<'
      )
      tl.from(
        '.about-img-owner',
        {
          opacity: 0,
          duration: 0.5,
          x: 150,
          //stagger: 0.1,
          ease: 'Power1.easeInOut',
        },
        '<'
      )
      tl.from(
        '.about-btn-animation',
        {
          opacity: 0,

          duration: 0.3,
        },
        '<'
      )
    },
  },
}
</script>
<style></style>
