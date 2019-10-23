<template>
  <section class="portfolio-page">
    <div class="portfolio-container" id="about">
      <Portfolio />
    </div>
  </section>
</template>

<script>
import Portfolio from "~/components/Portfolio.vue";

export default {
  transition: "slide-left",
  components: {
    Portfolio
  }
};
</script>

<style scoped lang="scss">
.portfolio-container {
  height: auto;
}
</style>