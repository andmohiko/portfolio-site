<template>
  <section class="about-page">
    <About />
  </section>
</template>

<script>
import About from "~/components/About.vue";

export default {
  transition: "slide-left",
  components: {
    About
  }
};
</script>

<style scoped lang="scss">
.about-page {
  height: auto;
}
</style>