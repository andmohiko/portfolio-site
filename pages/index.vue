<template>
  <section class="home-page">
    <div class="top-container">
      <h1>andmohiko.dev</h1>
      <!-- <p>学生エンジニア</p> -->
      <div class="links">
        <a href="https://twitter.com/andmohiko">
          <img src="@/assets/twitter.png" alt="twitter" />
        </a>
        <a href="https://github.com/andmohiko">
          <img src="@/assets/github.png" alt="github" />
        </a>
      </div>
    </div>
    <div class="about-container" id="about">
      <About />
    </div>
    <!-- <div class="portfolios-container" id="portfolios">
      <div class="title">
        <h2>Portfolios</h2>
      </div>
      <div class="portfolios-content">
      </div>
    </div> -->
    <!-- <div class="skills-container" id="skills">
      <div class="title">
        <h2>Skills</h2>
      </div>
      <div class="skills">
        <div class="skills-name">
          Python<br>
          Machine Learning<br>
          Natural Language Processing<br>
          Vue.js<br>
          Typescript<br>
          Rails<br>
          Docker<br>
        </div>
        <div class="skills-level">
          ★★★★★<br>
          ★★★★★<br>
          ★★★★★<br>
          ★★★★☆<br>
          ★★★★☆<br>
          ★★☆☆☆<br>
          ★★★☆☆<br>
        </div>
      </div>
    </div> -->
    <div class="blog-container">
      <div class="title">
        <h2>Blog</h2>
      </div>
      <div class="blog-content">
        <card
          v-for="post in posts"
          v-bind:key="post.fields.slug"
          :title="post.fields.title"
          :body="post.fields.body"
          :slug="post.fields.slug"
          :publishedAt="post.fields.publishedAt"
        />
      </div>
    </div>
  </section>
</template>

<script>
import About from "~/components/About.vue";
import Card from "~/components/card.vue";
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  transition: "slide-left",
  components: {
    About,
    Card
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishedAt"
      })
      .then(entries => {
        return {
          posts: entries.items.slice(0,3)
        };
      })
      .catch(console.error);
  }
};
</script>

<style scoped lang="scss">
.home-page {
  // height: auto;
  // width: 100%;
  // padding: 100px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
}

.top-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);

  color: #ffffff;
  h1 {
    font-size: 32px;
    margin: 50px 0;
  }
  p {
    font-size: 16px;
  } 
}

.links {
  img {
    height: 22px;
    width: 22px;
    margin-right: 25px;
  }
}

.title {
  color: #ffffff;
  h2 {
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 2rem;
    padding: 0.3rem 0;
    // border-bottom: 1px solid #ddd;
  }
}

.about-container {
  // height: calc(100vh - 80px);
  size: cover;
  width: 100%;
  // background-image: url(../assets/bg-top-min.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

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

.portfolios-container {
  height: auto;
  width: 100%;
  padding: 30px;
}

.skills-container {
  height: auto;
  width: 100%;
  padding: 30px;
}

.skills {
  color: #ffffff;
  display: flex;
  flex-direction: row;
  &-name {
    min-width: 400px;
  }
  &-level {
    min-width: 100px;
  }
}

.blog-container {
  height: auto;
  display: flex;
  flex-direction: column;
  height: auto;
  // width: 100%;
  max-width: 1000px;
  margin: 100px 0;
  padding: 30px;

  @media screen and (min-width: 1000px) {
    margin-left: calc(100vw/2 - 500px);
  }
}

.index {
  display: flex;
  flex-wrap: wrap;
}
</style>