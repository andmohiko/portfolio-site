<template>
  <section class="about-page">
    <div class="about-container" id="about">
      <About />
    </div>
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
.about-container {
  height: auto;
}
</style>