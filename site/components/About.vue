<template>
  <section class="about">
    <div class="about-text-wrapper">
      <h2 class="about-header about-animation">Hello, I'm Mike Whalen</h2>
      <h3 class="about-secondary about-animation">
        I teach high school students to develop full stack web apps
      </h3>
      <h4 class="about-tertiary about-animation">
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
      <a
        href="https://pkmnsim.netlify.app/"
        target="_blank"
        class="btn header-btn-secondary"
      >
        Check It Out
      </a>
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
  margin-top: 4rem;
  margin-bottom: 3rem;
  line-height: 1.5;
}
.about-header {
  color: var(--secondary);
  font-weight: 700;
  font-size: var(--h1);
  margin-top: 0;
}
.about-secondary {
  font-size: var(--h2);
}
.about-tertiary {
  font-size: var(--h3);
  color: var(--tertiary);
}
.about-img {
  margin-top: 0;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 900px) {
  .about {
    flex-direction: column;
    align-items: center;
    width: 95vw;
    height: auto;
  }
  .about-text-wrapper,
  .about-image-wrapper {
    margin: 2rem auto;
    width: 90%;
  }
  .about-header,
  .about-secondary,
  .about-tertiary {
    text-align: center;
  }
}
</style>
