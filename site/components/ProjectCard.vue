<template>
  <div class="project-card">
    <div class="project-img-container">
      <img class="project-img" :src="imgSrc" :alt="altText" />
    </div>
    <ul class="stack-list">
      <Logo v-for="tech in techStack" :key="tech" :source="tech" />
    </ul>
    <h2 class="project-card-title">{{ title }}</h2>
    <a class="project-link">Learn More</a>
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
  },
}
</script>

<style>
.project-card {
  height: 52rem;
  width: 35%;
  display: flex;
  background-color: #040303;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
}
.project-img-container {
  width: 100%;
  height: 40%;
}
.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-card-title {
  margin: 1rem auto;
  padding: 2rem 4rem;
  border-bottom: 3px solid #fff;
}
.stack-list {
  margin: 1rem auto;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
