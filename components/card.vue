<template>
  <article class="card">
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: slug }}" class="card-title">
      <h1>{{ title }}</h1>
    </nuxt-link>
    <div class="card-date">
      <p>{{ (new Date(publishedAt)).toLocaleDateString() }}</p>
    </div>
    <!-- <p class="card_text">{{ body.slice(0,350) }}</p> -->
    <!-- <p class="card_text">{{ v-html="$md.render(body.slice(0,100))" }}</p> -->
    <!-- <div class="card_text" v-html="$md.render(body.slice(0,300))"></div> -->
  </article>
</template>

<script>
import markdownIt from "markdown-it";
export default {
  components: {
    markdownIt
  },
  props: ["title", "slug", "publishedAt", "body"]
};
</script>

<style scoped lang="scss">
.card {
  // width: 700px;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  padding-bottom: 0.5rem;
  border-bottom: 0.5px dashed rgb(57, 72, 85);
  // box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  // border-radius: 5px;
  display: flex;

  // .wrapper {
  //   width: auto;
  //   display: flex;
  //   flex-direction: row;
  justify-content: space-between;
  //   // border-bottom: 0.5px dashed rgb(57, 72, 85);
  //   margin-bottom: 10px;
  // }

  &-title {
    // height: 75px;
    // padding-top: 1rem;
    display: flex;
    text-decoration: none;
    // flex-direction: column;
    // justify-content: center;
    // text-align: center;
    h1 {
      font-size: 1.5rem;
      color: white;
      // margin-bottom: 1rem;
      // text-align: center;
    }
  }
  &-date {
    display: flex;
    height: 25px;
    line-height: 25px;
    // text-align: right;
    p {
      font-size: 1rem;
      // margin: 0;
      color: rgba(255, 255, 255, 0.8);
      text-align: right;
    }
  }
}
// @media screen and (max-width: 800px) {
//   .card {
//     width: 100%;
//   }
// }
.wrapper {
  text-decoration: none;
}
.card_image_container {
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

// .card_date_container {  
// }
.card_image {
  overflow: hidden;

  width: 350px;
  text-align: center;
}
// .card_title {
  
// }
.card_text {
  color: rgb(189, 197, 203);
  margin: 10px 0;
}
// .card_date {
//   font-size: 1rem;
//   margin: 0;
//   color: rgba(255, 255, 255, 0.8);
//   text-align: right;
// }
</style>