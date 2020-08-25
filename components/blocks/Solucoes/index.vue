<template>
  <section id="solucoes" class="section sectionSpace">
    <h2 class="title">Soluções</h2>
    <p class="subtitle">Muito além do código, penso por fluxo. A importância de pensar nas menores partes de um todo pode faz toda a diferença.</p>
    <div class="container">
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <Wireframe class="icon" />
        <p class="title">Wireframe</p>
        <p class="text">Desenvolvimento da estrutura da solução, através de traços e esboços que simbolizam um todo. A primeira parte do desenvolvimento de um fluxo deve ser analisada de forma crítica e pontual tentando prever possíveis caminhos que o usuário venha a utilizar.</p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <Prototype class="icon" />
        <p class="title">Prototipação</p>
        <p class="text">Desenvolvimento da parte visual do wireframe. Composta pela exibição dos componentes e diagramação das micro interações, a prototipação (ou UI para os mais íntimos) vem para trazer a visualização de como ficará o projeto em sua versão final. </p>
      </div>
      <div class="card"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="800"
        data-sal-easing="ease-out-bounce"
      >
        <Development class="icon"/>
        <p class="title">Desenvolvimento</p>
        <p class="text">Essa etapa foca em trazer todo o fluxo e beleza produzidas durante a etapa de wireframe e prototipação. O foco é codificar toda a solução e deixar o mais próximo possível da solução elaborada durante a prototipação.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Development from '~/assets/images/services/development.svg?inline'
import Prototype from '~/assets/images/services/prototype.svg?inline'
import Wireframe from '~/assets/images/services/wireframe.svg?inline'
import sal from "sal.js";

export default {
  components: {
    Development,
    Prototype,
    Wireframe
  },
  mounted() {
    sal();
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
