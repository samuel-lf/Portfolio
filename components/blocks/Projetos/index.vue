<template>
  <section id="projetos" class="section sectionSpace">
    <h2 class="title">Projetos</h2>
    <div class="projects">
      <div
        data-sal="slide-left"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
        class="info"
      >
        <p class="title">Nascimento distribuidora</p>
        <p class="description">Projeto de um site institucional para uma empresa revendedora de produtos agrícolas e agropecuários. O projeto foi idelizado para realizar a exibição dos produtos e tornar a marca mais visível dentro da internet. O projeto foi feito com NuxtJs.</p>
        <p class="description">Conheça o site: <a href="https://www.nascimentodistribuidora.com.br/" target="blank" class="link">clique aqui</a></p>
        <!-- <div class="pages">
          <button class="btnLeft">
            <Arrow />
          </button>
          <button class="btnRight">
            <Arrow />
          </button>
        </div> -->
      </div>
      <picture
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
        class="case"
        >
        <source srcset="~assets/images/projetos/nascimento.webp" type="image/webp">
        <source srcset="~assets/images/projetos/nascimento.png" type="image/png">
        <img src="~assets/images/projetos/nascimento.png" alt="Imagem do site Nascimento distribuidora" class="image">
      </picture>
    </div>
  </section>
</template>

<script>
import Arrow from '~/assets/images/icons/arrow.svg?inline'

export default {
  components: {
    Arrow
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
