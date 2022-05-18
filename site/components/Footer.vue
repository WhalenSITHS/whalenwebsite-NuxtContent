<template>
  <footer>
    <div class="footer-wrapper">
      <a
        href="mailto:mwhalen3@schools.nyc.gov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="icon footer-link"
          ><fa class="footer-icon" icon="envelope-square" />
          <span class="visually-hidden"
            >E-mail Me (opens in new tab)></span
          ></span
        ></a
      >
      <a
        href="https://www.facebook.com/michael.whalen.180"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        ><span class="icon footer-link"
          ><fa class="footer-icon" :icon="['fab', 'facebook-square']" />
          <span class="visually-hidden"
            >Facebook Link(opens in new tab)></span
          ></span
        ></a
      >
      <a
        href="https://twitter.com/whalensiths"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        ><span class="icon footer-link"
          ><fa class="footer-icon" :icon="['fab', 'twitter-square']" />
          <span class="visually-hidden"
            >Tweet Me (opens in new tab)></span
          ></span
        ></a
      >
      <a
        href="https://github.com/WhalenSITHS"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        ><span class="icon footer-link"
          ><fa class="footer-icon" :icon="['fab', 'github-square']" />
          <span class="visually-hidden"
            >My Github (opens in new tab)></span
          ></span
        ></a
      >
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
.visually-hidden {
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(
    1px 1px 1px 1px
  ); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
  clip: rect(
    1px,
    1px,
    1px,
    1px
  ); /*maybe deprecated but we need to support legacy browsers */
  clip-path: inset(
    50%
  ); /*modern browsers, clip-path works inwards from each corner*/
  white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
}
</style>
