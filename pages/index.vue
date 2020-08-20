<template>
  <div>
    <Principal />
    <Sobre />
    <Habilidades />
    <Experiencias />
    <Contato />
  </div>
</template>

<script>
import Principal from '../components/blocks/Principal'
import Sobre from '../components/blocks/Sobre'
import Habilidades from '../components/blocks/Habilidades'
import Experiencias from '../components/blocks/Experiencias'
import Contato from '../components/blocks/Contato'

export default {
  components: {
    Principal,
    Sobre,
    Habilidades,
    Experiencias,
    Contato
  }
}
</script>

<style>
</style>
