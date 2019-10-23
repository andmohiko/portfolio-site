<template>
  <section class="about-container">
    <div class="about-header">
      <h2>ABOUT</h2>
    </div>

    <div class="about-content">
      <a href="https://twitter.com/andmohiko">
        <img src="../assets/profilepich.png" alt="profilepic" />
      </a>

      <h3>プロフィール</h3>
      <p>INTJ</p>
      <h3>専攻</h3>
      <p>コンピュータサイエンス</p>
      <h3>興味</h3>
      <p>機械学習, 自然言語処理, レコメンドシステム, データサイエンス</p>
      <h3>好きなこと</h3>
      <p>世界平和, ポケモン, ミニマリズム</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-container {
  height: auto;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

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

.about-header {
  height: 250px;
  width: 100%;

  background-image: url(../assets/bg_about.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);

  h2 {
    font-weight: bold;
    font-size: 30px;
    margin: 40px;
  }
}

.about-content {
  height: auto;
  // width: 80%;
  // margin-left: 10%;
  // margin-right: 10%;
  // margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 12px;
  line-height: 28px;
  color: #fff;

  h3 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 11px;
    margin-bottom: 20px;
  }
}
</style>