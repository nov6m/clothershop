<template>
  <div class="contacts">
    <h3>Контакты</h3>
    <div class="contacts__info">
      <div class="description">
        <div class="description__text">
          <div>
            Свяжитесь с нами в случае возникновения какой-либо проблемы.
          </div>
        </div>
        <div class="description__text">
         <div>
            Мы обязательно ответим и постараемся помочь в случае ошибки
         </div>
        </div>
      </div>
      <div class="contacts__adress">
        <div class="red"><img src="@/assets/image/icons/phone.png" width="23" height="23">+79854952261</div>
        <div><img src="@/assets/image/icons/placeholder.png" width="23" height="23">LetMeDie, г. Оренбург, ул. Пролетарская 4</div>
        <div class="red"><img src="@/assets/image/icons/skype.png" width="23" height="23">cheap2708</div>
        <div class="red"><img src="@/assets/image/icons/email.png" width="23" height="23">letmesupp@mail.ru</div>
      </div>
    </div>
  </div>
  <div class="link-with-us">
    <h3>Связаться с нами</h3>
    <form action="" class="form">
      <div><input type="text" required class="form__input" placeholder="Имя"><span>*</span></div>
      <div><input type="text" required class="form__input" placeholder="E-mail"><span>*</span></div>
      <div><textarea name="" id="" cols="30" rows="10" required class="form__input textarea" placeholder="Ваше сообщение"></textarea><span>*</span></div>
      <button class="form__button">Отправить</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .red {
    color: rgb(232, 43, 49);
  }
  .contacts {
    color: white;
    margin-bottom: 150px;
    &__info {
      display: flex;
      justify-content: space-around;
    }
    &__adress {
      width: 30vw;
    }
    &__adress>div>img {
      margin-right: 15px;
    }
    &__adress>div {
      margin-bottom: 10px;
    }
  }
  .contacts>h3 {
    font-size: 54px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 60px;
  }
  .description {
    width: 35vw;
    &__text {
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 30px;
      margin-bottom: 30px;
      border: 1px solid rgb(232, 43, 49);
      padding: 20px;
    }
  }
  .link-with-us {
    color: white;
  }
  .link-with-us>h3 {
    font-size: 54px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 60px;
  }
  .form {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 100px;
    &__button {
      transition: all 0.3s;
      display: block;
      width: 140px;
      font-size: 16px;
      background-color: rgb(232, 43, 49);
      border: none;
      padding: 12.5px 15px;
      color: white;
      font-weight: bold;
      margin-bottom: 25px;
    }
    &__button:hover {
      transition: all 0.3s;
      background-color: rgb(226, 102, 106);
      outline: 1px solid white;
      outline-offset: -4px;
    }
    &__input {
      width: 290px;
      height: 40px;
      margin-bottom: 10px;
      font-size: 20px;
      padding: 5px 10px;
    }
    &__input+span {
      color: rgb(232, 43, 49);
      font-size: 22px;
      position: absolute;
      top: 10px;
      right: 0;
    }
  }
  .form>div {
    position: relative;
  }
  .textarea {
    height: 90px;
    resize: none;
    width: 292px;
  }
</style>
