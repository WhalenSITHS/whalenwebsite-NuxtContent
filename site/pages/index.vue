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
    animateOnScroll() {
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
    },
  },
}
</script>
<style></style>
