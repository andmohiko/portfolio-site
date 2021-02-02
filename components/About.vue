<template>
  <div class="about-container">
    <div class="about">
      <div class="profile">
        <div class="profile-icon">
          <a href="https://twitter.com/andmohiko">
            <img src="../assets/profilepich.png" alt="profilepic" />
          </a>
        </div>
        <div class="profile-content">
          <p class="profile-name">andmohiko</p>
          <p class="profile-text">
            <span>M2(コンピュータサイエンス)</span>
            <span>メンヘラテクノロジー</span>
            <span>AIESEC in Japan MCBCXP</span>
            <span>Python / Machine Learning / NLP / Vue.js / Typescript / Rails</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-container {
  height: auto;
  // width: 100%;
  max-width: 850px;
  padding: 100px 0 30px 0;

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
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  }
}

.about {
  height: auto;
  width: 100%;
  // background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 30px;
  line-height: 28px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.3);
  text-align: center;

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
}

.profile {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  &-icon {
    img {
      height: 200px;
      width: 200px;
      margin: 30px 50px 30px 0;
      border-radius: 100%;
    }
  }
  &-content {
    color: #ffffff;
    // display: flex;
    // justify-content: center;
    // align-items: left;
    // margin-left: 0;
    text-align: left;
    span {
      display:block;
    }
  }
  &-name {
    font-weight: bold;
    font-size: 2rem;
    margin: 2rem 0;
  }
  &-text {
    font-size: 1rem;
  }
}

</style>
