<template>
  <footer>
    <div class="footer-wrapper">
      <a
        href="mailto:mwhalen3@schools.nyc.gov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="icon footer-link"
          ><fa class="footer-icon" icon="envelope-square" /></span
      ></a>
      <a
        href="https://www.facebook.com/michael.whalen.180"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        ><span class="icon footer-link"
          ><fa class="footer-icon" :icon="['fab', 'facebook-square']" /></span
      ></a>
      <a
        href="https://twitter.com/whalensiths"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        ><span class="icon footer-link"
          ><fa class="footer-icon" :icon="['fab', 'twitter-square']" /></span
      ></a>
      <a
        href="https://github.com/WhalenSITHS"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        ><span class="icon footer-link"
          ><fa class="footer-icon" :icon="['fab', 'github-square']" /></span
      ></a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer {
  height: 20vh;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer-wrapper {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.footer-link {
  font-size: var(--h2);
  margin: 1rem 1rem;
  color: white;
}
.footer-icon {
  font-size: var(--h1);
}
</style>
