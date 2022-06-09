<template>
  <the-info-header></the-info-header>
  <div class="header-menu">
    <div class="header-menu__wrapper">
      <div class="header-menu__logo">
        <a href="/"><img src="../assets/image/logos/logo.jpg"></a>
        <a href="/" class="header-menu__name-company">LetMeDie</a>
      </div>
      <div class="header-menu__nav nav">
        <nav>
          <router-link class="nav__item" :class="{active: article == isActive}" v-for="({name: name, path: path, article: article}, index) of menuLinks" :key="index" :to="path" exact-active-class="active">
            {{name}}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import TheInfoHeader from '@/components/TheInfoHeader.vue'
import menuLinks from '@/constants/menuLinks'
import { ref } from '@vue/reactivity'
export default {
  components: {
    TheInfoHeader
  },
  setup () {
    const isActive = ref('')
    return {
      menuLinks,
      isActive
    }
  }
}
</script>

<style lang="scss">
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .header-menu {
    border-top: 1px white solid;
    border-bottom: 1px white solid;
    padding: 15px 10px;

    &__wrapper {
      width: 95vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__name-company {
      text-decoration: none;
    }
    &__name-company:hover,
    &__name-company:visited,
    &__name-company:link,
    &__name-company:active {
      color: white;
      font-size: 30px;
      margin-left: 10px;
    }
    &__logo {
      display: flex;
      align-items: center;
    }
  }
  .nav {

    &__item {
      text-decoration: none;
      font-size: 20px;
      padding: 30px 15px;
    }

    &__item:hover,
    &__item:visited,
    &__item:link,
    &__item:active {
      color: white;
    }
    &__item:hover,
    .active {
      background-color: #e82b31;
    }
  }
</style>
