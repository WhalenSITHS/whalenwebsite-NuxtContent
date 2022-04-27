<template>
  <nav class="desk-nav">
    <nuxt-link to="/" id="home-btn">MIKEWHALEN.TECH</nuxt-link>
    <ul class="link-wrapper">
      <nuxt-link to="/StudentWork" class="nav-item-desk"
        >Student Work</nuxt-link
      >
      <nuxt-link to="/Articles" class="nav-item-desk">Articles</nuxt-link>
      <nuxt-link to="/Resources" class="nav-item-desk">Resources</nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DeskNav',
}
</script>
<style>
.desk-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  margin: 1rem auto;
}

@media screen and (max-width: 800px) {
  .desk-nav {
    display: none;
  }
}
.link-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}
.nav-item-desk {
  font-size: var(--h3);
}
.nav-item-desk:link,
.nav-item-desk:visited {
  list-style: none;
  margin: 1rem 0;
  padding: 1rem 2rem;
  color: var(--white);
  text-decoration: none;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
}
@media screen and (max-width: 1440px) {
  .link-wrapper {
    width: 50%;
  }
}
.nav-item-desk:hover,
.nav-item-desk:active {
  background-position: 100%;
  color: black;
}
#home-btn {
  text-decoration: none;
  transition: all 0.4s;
  margin: 1rem 0;
  padding: 1rem 0;
  font-size: var(--h3);
  color: var(--secondary);
  font-family: 'Bungee', cursive;
  position: relative;
}
#home-btn::after {
  content: '';
  height: 4px;
  transform: scaleX(0);
  transition: transform 0.25s ease;
  transform-origin: left;
  left: 0;
  bottom: -4px;
  width: 100%;
  display: block;
  position: absolute;
}
#home-btn:hover::after {
  background-color: var(--secondary);
  transform: scaleX(1);
}
</style>
