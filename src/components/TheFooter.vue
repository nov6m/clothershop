<template>
  <div class="footer">
    <div class="footer__socials">
      <a href="#"><img src="@/assets/image/icons/facebook.png" width="23" height="23"></a>
      <a href="https://vk.com/fffff" target="blank"><img src="@/assets/image/icons/vk.png" width="27" height="27"></a>
      <a href="#"><img src="@/assets/image/icons/twitter.png" width="23" height="23"></a>
      <a href="https://ok.ru" target="blank"><img src="@/assets/image/icons/odnoklassniki.png" width="27" height="27"></a>
    </div>
    <div class="footer__policy">
      © 2022 LetMeDie
    </div>
  </div>
</template>

<style lang="scss">
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__socials {
      margin-top: 10px;
      display: flex;
      align-items: center;
    }
    &__socials>a:not(:last-child) {
      margin-right: 20px;
    }

    &__policy {
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 700;
      color: white;
      margin: 20px 0;
    }
  }
</style>
