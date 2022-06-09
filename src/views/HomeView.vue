<template>
  <div class="home">
    <div class="home__sale">
      <div class="home__sale_font">
        Готовимся к лету! Скидка на все товары -50%
      </div>
    </div>
    <popular-product class="home__top-product"></popular-product>
    <some-about-us></some-about-us>
  </div>
</template>

<script>
import PopularProduct from '@/components/PopularProduct/PopularProduct.vue'
import SomeAboutUs from '@/components/SomeAboutUs.vue'
import { onBeforeMount } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    PopularProduct,
    SomeAboutUs
  },
  setup () {
    onBeforeMount(() => {
      const store = useStore()
      store.commit('CHANGEISACTIVE', 'home')
    })
  }
}
</script>

<style lang="scss">
  .home {
    &__sale {
      margin-top: 60px;
      margin-bottom: 180px;
      height: 393px;
      background-image: url('@/assets/image/backgrounds/main-background.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      font-size: 42px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      &_font {
        font-family: Georgia, 'Times New Roman', Times, serif;
        width: 30vw;
        min-width: 214px;
        text-align: center;
      }
    }
    &__top-product {
      margin-bottom: 130px;
    }
  }
</style>
