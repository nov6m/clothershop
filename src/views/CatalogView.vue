<template>
  <div class="catalog">
    <h3>Каталог товаров</h3>
    <catalog-item v-for="({image, type, left}, index) of catalogList"
    :key="index+image"
    :image="image"
    :type="type"
    :left="left"
    ></catalog-item>
  </div>
</template>

<script>
import catalogList from '@/constants/catalogList'
import CatalogItem from '@/components/CatalogItem.vue'

export default {
  components: {
    CatalogItem
  },
  setup () {
    return {
      catalogList
    }
  }
}
</script>

<style lang="scss">
  h3 {
    text-align: center;
    font-size: 54px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .catalog {
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 30px;
    color: white;
  }
</style>
