<template>
  <section class="about-container">
    <div class="title">
      <h1>ABOUT</h1>
    </div>

    <div class="about-content">
      <div class="about-icon">
        <a href="https://twitter.com/andmohiko">
          <img src="../assets/profilepich.png" alt="profilepic" />
        </a>
      </div>
      <div class="about-profile">
        <h2>プロフィール</h2>
        <p>
          M1(コンピュータサイエンス)
          <br />TRUNK / JX通信社 / D2C / DMM
          <br />TRIGGER2015 / AIESEC in Japan WALC
          <br />INTJ
        </p>
        <h2></h2>
        <p></p>
        <h2>興味のある技術</h2>
        <p>機械学習, 自然言語処理, レコメンドシステム, データサイエンス</p>
        <h2>好きなこと</h2>
        <p>世界平和, ポケモン, ミニマリズム, イギリス</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-container {
  height: auto;
  width: 100%;
  padding: 100px 30px 30px 30px;

  background-image: url(../assets/bg-about.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
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
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.2);
  }
}

.about-content {
  height: auto;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 1.2rem;
  line-height: 28px;
  color: #fff;

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
}

.about-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 180px;
    width: 180px;
    margin: 30px 0;
    border-radius: 100%;
  }
}
</style>