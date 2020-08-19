<template>
  <div>
    <Principal />
    <Habilidades />
    <Experiencias />
    <Contato />
  </div>
</template>

<script>
import Principal from '../components/blocks/Principal'
import Habilidades from '../components/blocks/Habilidades'
import Experiencias from '../components/blocks/Experiencias'
import Contato from '../components/blocks/Contato'

export default {
  components: {
    Principal,
    Habilidades,
    Experiencias,
    Contato
  }
}
</script>

<style>
</style>
