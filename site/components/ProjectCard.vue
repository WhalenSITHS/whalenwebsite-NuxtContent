<template>
  <div class="project-card">
    <nuxt-link class="project-card-link" :to="`/projects/${project}`">
      <div class="project-img-container">
        <img class="project-img" :src="imgSrc" :alt="altText" />
      </div>

      <h2 class="project-card-title">{{ title }}</h2>
      <ul class="stack-list">
        <Logo v-for="tech in techStack" :key="tech" :source="tech" />
      </ul>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgSrc: String,
    altText: String,
    techStack: Array,
    projectPage: String,
    project: String,
  },
}
</script>

<style>
@media screen and (max-width: 900px) {
  .project-card {
    width: 100%;
  }
}
@media (hover: hover) {
  .project-card:hover .project-card-link,
  .project-card:visited .project-card:active,
  .project-card:link {
    background-color: var(--secondary);
    /* color: black; */
  }
  .project-card:hover .project-img {
    height: 30%;
  }
  .project-card:hover .project-card-title {
    transform: translateY(-100%);
    font-size: var(--h2);
  }
  .project-card:hover .stack-list {
    transform: translateY(-100%);
    font-size: var(--h1);
  }
  .project-card:hover .Logo-img {
    transform: translateY(-30%);
    height: 8rem;
    margin: 0.5rem 1rem;
  }
}

.project-card-link,
.project-card:visited .project-card:active,
.project-card:link {
  transition: all 0.3s;
  height: 50rem;
  width: 80%;
  display: flex;
  background-color: #040303;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  margin: 5rem auto;
}
.project-img-container {
  width: 100%;
  height: 70%;
}
.project-img {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
}
.project-card-title {
  margin: 1rem auto;
  padding: 2rem 4rem;
  font-size: var(--h3);
  transition: all 0.3s;
  width: 100%;
}
.stack-list {
  margin: 1rem auto 1rem auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.project-link {
  font-size: var(--h4);

  width: 20rem;
  height: 5rem;
  color: white;
  border: 2px solid transparent;
  padding: 0.5rem 2.2rem;
  text-decoration: none;
  transition: all 0.4s;
  background-color: var(--secondary);
  border-radius: 3rem;
  transition: all 0.3s;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 3rem auto;
}

.project-link:hover {
  transform: scale(1.2);
  box-shadow: 0 10px 0.5rem rgba(color(black), 0.6);
}
.project-link::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s;
}
.project-link:hover::after {
  transform: scaleX(1.5) scaleY(1.6);
  opacity: 0;
}
.project-link:active {
  transform: translateY(-1px);
  transform: scaleX(1.5) scaleY(1.6);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
</style>
