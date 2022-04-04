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
        src="https://res.cloudinary.com/dbopxlpuy/image/upload/f_auto,q_auto/v1648839018/iamge_l8hueo.png"
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
  margin: 3.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-wrapper {
  margin: 0 auto;
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
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
  width: 25%;
  height: 100%;
  object-fit: cover;
  transform: rotate(-15deg);
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

.header-btn-primary::after {
  background-color: var(--tertiary);

  color: #fff;
}
.header-btn-secondary::after {
  background-color: var(--secondary);

  color: #fff;
}

@media screen and (max-width: 1300px) {
  .header-wrapper {
    width: 90vw;
  }
}
@media screen and (max-width: 900px) {
  header {
    margin: 0 auto;
    height: 90vh;
    justify-content: flex-start;
  }
  .header-wrapper {
    height: 100%;
  }
  .header-image {
    display: none;
  }
  .text-container {
    align-self: center;
  }
}
</style>
