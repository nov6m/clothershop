<template>
  <div class="container">
    <div class="container__info info">
      <div class="info__phone">
        <img src="@/assets/image/icons/phone.png" width="20" height="20">
        <div class="red">+79854952261</div>
      </div>
      <div class="info__adress">
        <img src="@/assets/image/icons/placeholder.png" width="20" height="20">
        <div class="white">LetMeDie, г. Оренбург, ул. Пролетарская 4</div>
      </div>
      <div class="info__mail">
        <img src="@/assets/image/icons/email.png" width="20" height="20">
        <div class="red">letmesupp@mail.ru</div>
      </div>
      <div class="info__skype">
        <img src="@/assets/image/icons/skype.png" width="20" height="20">
        <div class="red">cheap2708</div>
      </div>
    </div>
    <div class="container__socials">
      <a href="#"><img src="@/assets/image/icons/facebook.png" width="23" height="23"></a>
      <a href="https://vk.com/fffff" target="blank"><img src="@/assets/image/icons/vk.png" width="27" height="27"></a>
      <a href="#"><img src="@/assets/image/icons/twitter.png" width="23" height="23"></a>
      <a href="https://youtube.com" target="blank"><img src="@/assets/image/icons/youtube.png" width="27" height="27"></a>
    </div>
  </div>
</template>

<style lang="scss">
  .container {

    &__info,
    &__socials {
      margin-top: 10px;
      margin-bottom: 35px;
    }
    &__socials {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__socials>a:not(:last-child) {
      margin-right: 20px;
    }
    &__socials>a:hover {
      transition: all 0.5s;
      transform: scale(0.8);
    }
    &__socials>a {
      transition: all 0.5s;
      transform: scale(1);
    }
  }
  .info {
    display: flex;
    justify-content: center;
    &__phone,
    &__adress,
    &__mail {
      margin-right: 10px;
    }
    &__phone,
    &__adress,
    &__mail,
    &__skype {
      display: flex;
      align-items: center;
    }
    &__phone>img,
    &__adress>img,
    &__mail>img,
    &__skype>img {
      margin-right: 5px;
    }
  }
  .red {
    color: #e82b31;
  }
  .white {
    color: white;
  }
</style>
