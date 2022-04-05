<template>
  <section class="comm">
    <div class="comm-header-wrapper">
      <h2 class="comm-header">
        Creating <span class="comm-header-span">Meaningful</span> Work
      </h2>

      <p class="comm-desc">
        Starting in 2022, Our advanced courses will be focusing on developing
        applications for our school and the community
      </p>
    </div>

    <div class="comm-wrapper">
      <div class="about-image-wrapper">
        <img
          src="https://res.cloudinary.com/dbopxlpuy/image/upload/c_scale,f_auto,q_auto,w_900/v1649074580/CMS/Screenshot_W_2022-04-04_at_08-15-55_The_SITECH_Times_Official_Website_jmqwwx.png"
          alt="TechTimes Newspaper Front Page"
          class="about-img"
        />
        <h3 class="about-img-owner">Tech Times</h3>
        <a
          href="https://dev.sitechtimes.com/"
          target="_blank"
          class="btn header-btn-secondary"
        >
          Check It Out
        </a>
      </div>
      <p class="comm-text">
        The goal is to mirror a modern development studio and push students to
        master the material through meaningful projects that engage with the
        <span class="comm-span">community</span>. Students will be using modern
        <span class="comm-span">git workflows</span> and ensuring
        <span class="comm-span">accessibility</span> while writing technical
        <span class="comm-span">documentation</span> to ensure their projects
        live beyond their time at SITHS
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.comm {
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  height: 90vh;
  justify-content: space-between;
  align-items: center;
}
.comm-header-wrapper {
  width: 70vw;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.comm-header {
  font-size: var(--h1);
  margin: 5rem auto;
  line-height: 1.5;
  font-weight: 700;
}
.comm-header-span {
  color: var(--secondary);
  font-weight: 700;
}

.comm-desc {
  font-size: var(--h2);
  margin: 1rem auto;
}
.comm-wrapper {
  display: flex;
  width: 80vw;
  margin: 1rem auto;
  justify-content: space-between;
}
.comm-text {
  width: 45%;
  font-size: var(--h3);
  line-height: 1.5;
}
.comm-span {
  color: var(--secondary);
}
@media screen and (max-width: 900px) {
  .comm-wrapper {
    flex-direction: column;
    width: 90vw;
    margin: 3rem auto;
  }
  .comm-header-wrapper {
    width: 100%;
  }
  .comm-header {
    margin: 3rem auto;
  }
  .comm-desc {
    font-size: var(--h3);
    margin: 5rem auto;
  }
  .comm-text {
    margin: 5rem auto 6rem auto;
    width: 100%;
  }
}
</style>
