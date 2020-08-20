<template>
  <section id="servicos" class="section sectionSpace">
    <h2 class="title">Serviços</h2>
    <p class="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo tempora dignissimos inventore debitis repellendus sequi consectetur eligendi quibusdam. Fuga itaque optio id deleniti, distinctio ratione fugit voluptate vel tempora veniam?</p>
    <div class="container">
      <div class="card">
        <Wireframe class="icon" />
        <p class="title">Wireframe</p>
        <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo tempora dignissimos inventore debitis repellendus sequi consectetur eligendi quibusdam. Fuga itaque optio id deleniti, distinctio ratione fugit voluptate vel tempora veniam?</p>
      </div>
      <div class="card">
        <Prototype class="icon" />
        <p class="title">Prototipação</p>
        <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo tempora dignissimos inventore debitis repellendus sequi consectetur eligendi quibusdam. Fuga itaque optio id deleniti, distinctio ratione fugit voluptate vel tempora veniam?</p>
      </div>
      <div class="card">
        <Development class="icon"/>
        <p class="title">Desenvolvimento</p>
        <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo tempora dignissimos inventore debitis repellendus sequi consectetur eligendi quibusdam. Fuga itaque optio id deleniti, distinctio ratione fugit voluptate vel tempora veniam?</p>
      </div>
    </div>
  </section>
</template>

<script>
import Development from '~/assets/images/services/development.svg?inline'
import Prototype from '~/assets/images/services/prototype.svg?inline'
import Wireframe from '~/assets/images/services/wireframe.svg?inline'

export default {
  components: {
    Development,
    Prototype,
    Wireframe
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
