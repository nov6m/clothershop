<template>
  <div class="popular">
    <h1>Популярные товары</h1>
    <div class="popular__container">
      <card-product v-for="({imgPath, type, info, price}, index) of popularProductList"
      :key="index"
      :imageLink="imgPath"
      :type="type"
      :infoProduct="info"
      :price="price"
      class="popular__item"
      ></card-product>
    </div>
  </div>
</template>

<script>
import popularProductList from '@/constants/popularProductList'
import CardProduct from '@/components/PopularProduct/CardProduct.vue'

export default {
  components: {
    CardProduct
  },
  setup () {
    return {
      popularProductList
    }
  }
}
</script>

<style lang="scss">
  .popular {

    &__container {
      display: flex;
      justify-content: center;
    }

    &__item {
      min-width: 212px;
      max-width: 262px;
    }
    &__item:not(:last-child) {
      margin-right: 40px;
    }
  }
  .popular>h1 {
    font-size: 54px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    color: white;
    text-align: center;
    margin-bottom: 70px;
  }
</style>
