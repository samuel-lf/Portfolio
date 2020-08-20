<template>
  <div>
    <Principal />
    <Sobre />
    <Servicos />
    <Habilidades />
    <Contato />
  </div>
</template>

<script>
import Principal from '../components/blocks/Principal'
import Sobre from '../components/blocks/Sobre'
import Habilidades from '../components/blocks/Habilidades'
import Servicos from '../components/blocks/Servicos'
import Contato from '../components/blocks/Contato'

export default {
  components: {
    Principal,
    Sobre,
    Servicos,
    Habilidades,
    Contato
  }
}
</script>

<style>
</style>
