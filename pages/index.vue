<template>
  <section class="top-page">
    <div class="top-container" id="top">
      <h1>andmohiko</h1>
    </div>
  </section>
</template>

<script>
</script>

<style scoped lang="scss">
.top-container {
  height: calc(100vh - 80px);
  size: cover;
  width: 100%;
  background-image: url(../assets/bg-top.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);

  h1 {
    font-weight: bold;
    font-size: 80px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 26px;
    position: relative;
    top: 40px;
  }

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.7;
  }
}

.about-container {
  height: auto;
}

.blog-container {
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-container {
  height: auto;
}

.contact-container {
  height: auto;
}

.index {
  display: flex;
  flex-wrap: wrap;
}
</style>