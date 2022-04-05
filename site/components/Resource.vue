<template>
  <div class="resource-card">
    <img :src="getImage" :alt="altText" class="resource-img" />
    <h2 class="resource-title">{{ title }}</h2>
    <p class="resource-text">
      {{ text }}
    </p>
    <a class="resource-btn" :href="link" target="_blank">Visit</a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    image: String,
    alt: String,
    link: String,
  },

  computed: {
    getImage: function () {
      return require(`~/assets/public/${this.image}.png`)
    },
    altText: function () {
      return this.alt
    },
    getLink: function () {
      return this.link
    },
  },
}
</script>

<style>
.resource-card {
  width: 21%;
  display: flex;
  height: 40vh;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: var(--primary);
  border-radius: 10px;
  margin: 3rem auto;
}
.resource-img {
  margin-top: 1rem;
  width: 100%;
  height: 50%;
  object-fit: cover;
}
.resource-title {
  font-size: var(--h4);
  margin: 1rem 0;
  text-align: left;
}
.resource-text {
  font-size: var(--h5);
  margin: 1rem 0;
  text-align: center;
}
.resource-btn {
  font-size: var(--h4);
  width: 15rem;
  height: 3.5rem;
  color: var(--white);
  border: 2px solid transparent;
  padding: 0.3rem 2rem;
  text-decoration: none;
  transition: all 0.4s;
  background-color: transparent;
  border-radius: 3rem;
  transition: all 0.3s;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem auto;
  background-color: var(--secondary);
}

.resource-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 0.5rem rgba(color(black), 0.6);
}
.resource-btn::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s;
}
.resource-btn:hover::after {
  transform: scaleX(1.5) scaleY(1.6);
  opacity: 0;
}
.resource-btn:active {
  transform: translateY(-1px);
  transform: scaleX(1.5) scaleY(1.6);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
</style>
