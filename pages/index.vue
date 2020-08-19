<template>
  <div>
    <Principal />
    <Habilidades />
    <Experiencias />
  </div>
</template>

<script>
import Principal from '../components/blocks/Principal'
import Habilidades from '../components/blocks/Habilidades'
import Experiencias from '../components/blocks/Experiencias'

export default {
  components: {
    Principal,
    Habilidades,
    Experiencias
  }
}
</script>

<style>
</style>
