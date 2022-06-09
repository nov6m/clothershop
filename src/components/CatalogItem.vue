<template>
  <div class="item" :style="style">
    <div class="item__description">
      <div>
        {{type}}
      </div>
      <button>Заказать</button>
    </div>
    <div class="item__image">
      <img :src="require(`@/assets/image/product-image/range/${image}`)">
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onBeforeMount } from '@vue/runtime-core'
export default {
  props: ['image', 'type', 'left'],
  setup (props) {
    const style = reactive({
      flexDirection: 'row'
    })
    onBeforeMount(() => {
      if (props.left === 'true') {
        style.flexDirection = 'row-reverse'
      }
    })
    return {
      style
    }
  }
}
</script>

<style lang="scss">
  .item {
    display: flex;
    width: 70vw;
    justify-content: space-between;
    color: white;
    min-width: 735px;

    &__description {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__description>div {
      font-size: 54px;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
    &__description>button {
      transition: all 0.3s;
      display: block;
      width: 140px;
      font-size: 16px;
      background-color: rgb(232, 43, 49);
      border: none;
      padding: 12.5px 15px;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 25px;
      margin-top: 25px;
    }
    &__description>button:hover {
      transition: all 0.3s;
      background-color: rgb(226, 102, 106);
      outline: 1px solid white;
      outline-offset: -4px;
    }
    &__image>img {
      width: 366px;
      aspect-ratio: 1;
    }
  }
</style>
