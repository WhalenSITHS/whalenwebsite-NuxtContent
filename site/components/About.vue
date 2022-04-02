<template>
  <section class="about">
    <div class="about-text-wrapper">
      <h2 class="about-header">Hello, I'm Mike Whalen</h2>
      <h3 class="about-secondary">
        I teach high school students to develop full stack web apps
      </h3>
      <h4 class="about-tertiary">
        Students learn to build applications using modern tech stacks through
        project based learning
      </h4>
    </div>
    <div class="about-image-wrapper">
      <img
        src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,q_auto,w_900/v1614174845/Pokemon/Screenshot_2020-05-25_PKMN_DUEL_nmiruw.png"
        alt="Iphone containing pokemon battling"
        class="about-img"
      />
      <h3 class="about-img-owner">Pokemon Battle Simulator</h3>
      <h4 class="about-img-owner">William Anderson 2020</h4>
      <nuxt-link to="/" class="btn header-btn-secondary">
        See Our Work
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.about {
  height: 90vh;
  width: 80vw;
  margin: 5rem auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.about-text-wrapper,
.about-image-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 45%;
}

.about-header,
.about-secondary,
.about-tertiary,
.about-img,
.about-img-owner {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.about-header,
.about-secondary,
.about-tertiary {
  text-align: left;
}
.about-img {
  width: 100%;
  object-fit: cover;
}
</style>
