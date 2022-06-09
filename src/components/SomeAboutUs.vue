<template>
  <div class="about-container">
    <div v-for="({nameIcon, name, about}, index) of someAboutUs"
    :key="index+nameIcon" class="about-container__item">
      <img :src="require(`@/assets/image/icons/${nameIcon}`)">
      <div class="about-container__text">
        <h3>{{name}}</h3>
        <div>
          {{about}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import someAboutUs from '@/constants/someAboutUs'
export default {
  setup () {
    return {
      someAboutUs
    }
  }
}
</script>

<style lang="scss">
  .about-container {
    display: flex;
    justify-content: center;
    margin-bottom: 150px;
    &__item>img {
      width: 72px;
      aspect-ratio: 1;
    }
    &__item {
      min-width: 212px;
      max-width: 262px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__item:not(:last-child) {
      margin-right: 40px;
    }
    &__text {
      color: white;
      text-align: center;
    }
    &__text>h3 {
      font-size: 22px;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 20px;
    }
    &__text>div {
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
</style>
