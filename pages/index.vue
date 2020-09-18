<template>
  <div>
    <Principal />
    <Sobre />
    <Projetos />
    <Solucoes />
    <Habilidades />
    <Contato />
  </div>
</template>

<script>
import Principal from '../components/blocks/Principal'
import Sobre from '../components/blocks/Sobre'
import Projetos from '../components/blocks/Projetos'
import Habilidades from '../components/blocks/Habilidades'
import Solucoes from '../components/blocks/Solucoes'
import Contato from '../components/blocks/Contato'

export default {
  components: {
    Principal,
    Sobre,
    Solucoes,
    Habilidades,
    Contato
  }
}
</script>

<style>
</style>
