<template>
  <section id="habilidades" class="section sectionSpace">
    <h2 class="title">Habilidades</h2>
    <p class="subtitle">Expertise nas ferramentas que me auxiliam no desenvolvimento das soluções mais modernas.</p>
    <div class="container">
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/html5.svg" alt="Logo do HTML 5">
        <p class="technology">HTML 5</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/css3.svg" alt="Logo do CSS 3">
        <p class="technology">CSS 3</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/javascript.svg" alt="Logo do Javascript">
        <p class="technology">Javascript</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/angular.svg" alt="Logo do Angular">
        <p class="technology">Angular 2+</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/react.svg" alt="Logo do React">
        <p class="technology">ReactJS/GatsbyJS</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/vue_js.svg" alt="Logo do VueJS">
        <p class="technology">VueJS/NuxtJS</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="700"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/flutter.svg" alt="Logo do Flutter">
        <p class="technology">Flutter</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="800"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <img class="image" src="~/assets/images/technology/adobexd.svg" alt="Logo do Adobe XD">
        <p class="technology">Adobe XD</p>
      </div>
    </div>
  </section>
</template>

<script>
import sal from "sal.js";
export default {
 mounted() {
  sal();
 }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
