<template>
  <header>
    <div class="header-wrapper">
      <div class="text-container">
        <h1 class="header-primary">Full Stack Educator</h1>
        <h2 class="header-secondary">Staten Island Technical HS</h2>
        <nuxt-link to="/" class="btn header-btn-primary">Resources</nuxt-link>
        <nuxt-link to="/" class="btn header-btn-secondary"
          >See Our Work</nuxt-link
        >
      </div>
      <img
        src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,q_auto,w_1200/v1611365531/Bao/test_c6zrj6.png"
        alt="Image of 3 iPhones with student work"
        class="header-image"
      />
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
header {
  height: 90vh;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-wrapper {
  margin: 1rem auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;

  height: 100%;
}
.header-primary {
  font-size: var(--h1);
  margin: 1rem auto;
}
.header-secondary {
  font-size: var(--h2);
  margin: 2rem auto;
  color: var(--secondary);
}
.header-image {
  width: 45%;
  object-fit: cover;
}
.header-btn-primary,
.header-btn-secondary {
  margin: 2rem auto;
  width: 28rem;
  height: 6.5rem;
  padding: 2rem 3rem;
  font-size: var(--h3);
  border-radius: 4rem;
}
.header-btn-primary {
  background-color: var(--tertiary);
  color: var(--dark-text);
}
.header-btn-secondary {
  background-color: var(--secondary);
}
</style>
