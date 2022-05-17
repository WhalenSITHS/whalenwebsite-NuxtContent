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
      const tlH = this.$gsap.timeline({
        delay: 0.1,
      })

      tlH.from('.header-animation', {
        duration: 0.3,
        opacity: 0,
        stagger: 0.2,
        // x: -350,
      })
      tlH.from(
        '.header-image',
        {
          duration: 1,
          y: 600,
          rotate: 90,
          ease: 'expo.out',
        },
        '<.2'
      )
      /*  tlH.from(
        '.header-animation-2',
        {
          duration: 0.3,
          opacity: 0,
          stagger: 0.2,
        },
        '<.2'
      ) */

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
          delay: 0.1,
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
          delay: 0.2,
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
          delay: 0.3,
          duration: 0.3,
        },
        '<'
      )

      const tlComm = this.$gsap.timeline({
        scrollTrigger: '.comm',
        delay: 0.1,
      })
      tlComm.from('.comm-animation', {
        duration: 0.8,
        opacity: 0,
        /*   ease: 'Power1.easeInOut', */
        stagger: 0.1,
      })
    },
  },
}
</script>
<style></style>
