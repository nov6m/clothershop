<template>
  <div class="about">
    <h3>О нас</h3>
    <div class="about__text">
      <div>Наш интернет магазин специализирован на тематике "Dead Inside"</div>
      <div>Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, посредством отправки сообщения администратору официальной страницы</div>
    </div>
    <div class="carusel">
      <a href="#" v-for="({image}, index) of sliderImages" :key="index" class="slider" @click="clickLink(image)">
        <img :src="require(`@/assets/image/product-image/range/${image}`)" class="slider__image">
      </a>
    </div>
    <modal-picture v-if="showModal" :image="curPicture" @close="modalChange"></modal-picture>
  </div>

</template>

<script>
import ModalPicture from '@/components/Modals/ModalPicture.vue'
import { ref } from '@vue/reactivity'
export default {
  components: {
    ModalPicture
  },
  setup () {
    const sliderImages = [
      {
        order: 1,
        image: 'product1.jpg'
      },
      {
        order: 2,
        image: 'product2.jpg'
      },
      {
        order: 3,
        image: 'product3.jpg'
      },
      {
        order: 4,
        image: 'product4.jpg'
      },
      {
        order: 5,
        image: 'product5.jpg'
      },
      {
        order: 6,
        image: 'product6.jpg'
      }
    ]
    const showModal = ref(false)
    const curPicture = ref('')
    const modalChange = function () {
      showModal.value = !showModal.value
    }
    const clickLink = function (image) {
      modalChange()
      curPicture.value = image
    }
    return {
      sliderImages,
      curPicture,
      showModal,
      clickLink,
      modalChange
    }
  }
}
</script>

<style lang="scss">
  .about {
    color: white;

    &__text>div {
      text-align: center;
      font-size: 18px;
      width: 85vw;
      margin: 0 auto;
      margin-bottom: 15px;
    }
    &__text {
      margin-bottom: 60px;
    }
  }
  .about>h3 {
    font-size: 54px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    margin-top: 60px;
    font-weight: normal;
  }

  .slider {
    display: block;
    &__image {
      width: 16.7vw;
      aspect-ratio: 1;
    }
  }
  .carusel {
    margin-bottom: 80px;
    display: flex;
  }
</style>
