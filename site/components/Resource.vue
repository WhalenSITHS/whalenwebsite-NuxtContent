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
    tag: Array,
  },
  data() {
    return {
      colors: {
        All: 'fa icon="laptop-code" ',
        js: `:icon="['fab', 'youtube']"`,
        css: '#bfdbfe',
        design: '#F87171',
        creator: '#BBF7D0',
        development: '#F5D0FE',
      },
    }
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
    getColor() {
      return 'background-color: ' + this.colors[`${this.tag[0]}`]
    },
    getBorder() {
      return 'border-top: 20px solid ' + this.colors[`${this.tag[0]}`]
    },
  },
}
</script>

<style>
.resource-card {
  width: 21%;
  display: flex;
  height: 39rem;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: var(--primary);
  border-radius: 10px;
  margin: 5rem auto;
  transition: all 0.3s;
}
@media screen and (max-width: 1300px) {
  .resource-card {
    height: 36rem;
    width: 27%;
  }
}
@media screen and (max-width: 900px) {
  .resource-card {
    width: 38%;
  }
}
@media screen and (max-width: 700px) {
  .resource-card {
    width: 60%;
  }
}
.resource-card:hover {
  transform: translateY(-5px);
}
.resource-img {
  margin-top: 1rem;
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px;
}
.resource-title {
  font-size: var(--h4);
  margin: 1rem 0;
  text-align: center;
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
  color: white;
  border: 2px solid transparent;
  padding: 0.3rem 2rem;
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
  margin: 1rem auto;
}

.resource-btn:hover {
  transform: scale(1.2);
  box-shadow: 0 10px 0.5rem rgba(color(black), 0.6);
}
.resource-btn::after {
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
