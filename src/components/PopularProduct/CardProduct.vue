<template>
  <div class="card">
    <img :src="require(`@/assets/image/product-image/popular/${imageLink}`)">
    <div class="card__info">
      <div class="description">
        <h3 class="description__type">{{type}}</h3>
        <div class="description__info" v-html="infoProduct">
        </div>
      </div>
      <div class="description">
        <div class="description__price">
          {{price}} руб
        </div>
        <button class="description__button-send">Заказать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageLink', 'type', 'infoProduct', 'price']
}
</script>

<style lang="scss">
  .card {
    background-color: #fff;
    height: 560px;

    &__info {
      height: 312px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .card>img {
    min-width: 212px;
    max-width: 262px;
    width: 100%;
    aspect-ratio: 1;
  }
  .description {
    &__type {
      font-size: 24px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-align: center;
      margin-bottom: 20px;
    }
    &__info,
    &__price,
    &__button-send {
      font-family: sans-serif;
      text-align: center;
    }
    &__info {
      font-size: 16px;
    }
    &__price {
      font-size: 20px;
      margin-bottom: 30px;
    }
    &__button-send {
      transition: all 0.3s;
      display: block;
      width: 140px;
      font-size: 16px;
      margin: 0 auto;
      background-color: rgb(232, 43, 49);
      border: none;
      padding: 12.5px 15px;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 25px;
    }
    &__button-send:hover {
      transition: all 0.3s;
      background-color: rgb(226, 102, 106);
      outline: 1px solid white;
      outline-offset: -4px;
    }
  }
</style>
