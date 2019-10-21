<template>
  <section class="portfolio">
    <h2>PORTFOLIO</h2>
    <p>coming soon</p>
  </section>
</template>

<style scoped lang="scss">
.portfolio {
  height: 200px;
  width: 100%;
  // background-image: url(../assets/bg_about.jpg);
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;

  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  // text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);

  h2 {
    font-weight: bold;
    font-size: 30px;
    margin: 40px;
  }
  img {
    height: 150px;
    width: 150px;
    margin-bottom: 40px;
    border-radius: 100%;
  }
  p {
    margin-bottom: 40px;
  }
}
</style>