<template>
  <section class="portfolio-container">
    <div class="title">
      <h1>PORTFOLIO</h1>
    </div>
    <div class="portfolio-content">
      <div class="portfolio-card">
        <img src="../assets/portfolios/ajdevteam.png" alt="ajdevteam" />
        <h2>AJ開発チームのホームページ</h2>
        <p>アイセックジャパンの開発チームのホームページを作りました(非公式)</p>
      </div>
      <div class="portfolio-card">
        <img src="../assets/portfolios/portfolio-site.png" alt="portfolio-site" />
        <h2>ポートフォリオサイト</h2>
        <p>自分のブログ&ポートフォリオサイトを作りました。</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio-container {
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 100px 30px 30px 30px;

  background-image: url(../assets/bg_portfolio.jpg);
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
  width: 400px;
  height: 300px;
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
    max-height: 180px;
    max-width: 350px;
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
  }
}
</style>