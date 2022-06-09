<template>
  <div class="container" @click="closeModal">
    <img :src="require(`@/assets/image/product-image/range/${image}`)">
  </div>
</template>

<script>
export default {
  props: ['image'],
  emits: ['close'],
  setup (_, { emit }) {
    const closeModal = function () {
      emit('close')
    }
    return {
      closeModal
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: rgba(54, 54, 54, 0.432);
    top: 0;
    left: 0;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10%;
    left: 35%;
    width: 30vw;
  }
  img,
  .container {
    position: absolute;
  }
</style>
