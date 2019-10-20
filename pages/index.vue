<template>
  <section class="top">
    <div class="top-container" id="top">
      <h1>andmohiko</h1>
      <h2>
        <a href="https://twitter.com/andmohiko">@andmohiko</a>
      </h2>
    </div>

    <div class="about-container" id="about">
      <About />
    </div>

    <div class="blog-container" id="blog">
      <Blog />
    </div>

    <div class="portfolio-container" id="portfolio">
      <Portfolio />
    </div>

    <div class="contact-container" id="contact">
      <Contact />
    </div>
  </section>
</template>

<script>
import About from "~/components/About.vue";
import Blog from "~/components/Blog.vue";
import Portfolio from "~/components/Portfolio.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    About,
    Blog,
    Portfolio,
    Contact
  }
};
</script>

<style scoped lang="scss">
.top-container {
  height: 700px;
  width: 100%;
  background-image: url(../assets/bg_top.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
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
    color: #fff;
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
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-wrap: wrap;
}

.contact-container {
  height: 250px;
}
</style>