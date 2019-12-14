<template>
  <section class="portfolio-container">
    <div class="title">
      <h1>PORTFOLIO</h1>
    </div>
    <div class="portfolio-content">
      <div class="portfolio-card">
        <a href="https://www.work-school.com/courses/5/">
          <img src="../assets/portfolios/ws-ds-min.png" alt="workschool data scientist course" />
        </a>
        <h2>Workschool データサイエンティストコース</h2>
        <p>
          オンライン学習サービスのデータサイエンティストコースの教材を作りました。
          <br />PythonでPandasを使ってデータを分析したりscikit-learnで機械学習してみるという内容になってます。
        </p>
      </div>

      <div class="portfolio-card">
        <a href="http://ajdevteam.netlify.com">
          <img src="../assets/portfolios/ajdevteam-min.png" alt="ajdevteam" />
        </a>
        <h2>AJ開発チームのホームページ</h2>
        <p>
          アイセックジャパンの開発チームのホームページを作りました(非公式)
          <br />Bootstrapを使いました。
        </p>
      </div>

      <div class="portfolio-card">
        <a href="/">
          <img src="../assets/portfolios/ps-min.png" alt="portfolio-site" />
        </a>
        <h2>ポートフォリオサイト</h2>
        <p>
          自分のブログ&ポートフォリオサイトを作りました。
          <br />Nuxt.js+Contentful+Netlifyを使ってます。
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio-container {
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 100px 30px 30px 30px;

  background-image: url(../assets/bg_portfolio-min.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  color: #fff;
  // text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);
}

.title {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 2.2rem;
    margin: 1.5rem 0 4rem 0;
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  }
}

.portfolio-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.portfolio-card {
  width: 480px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgb(57, 72, 85);
  border-radius: 5px;
  padding: 15px 25px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 240px;
    max-width: 360px;
    text-align: center;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  p {
    color: #e1e1e1;
    margin: 10px 0;
    line-height: 1.2rem;
  }
}
</style>