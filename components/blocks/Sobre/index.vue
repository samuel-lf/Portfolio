<template>
  <section id="sobre" class="section">
    <h2 class="title">Sobre mim</h2>
    <div class="sobreMim">
      <div>
        <p class="hello">Samuel Leonel, ao seu dispor!</p>
        <p class="text">
          Formado em Análise e Desenvolvimento de Sistemas pela FATEC e atuando na área de desenvolvimento web há mais de 2 anos.
          Sou apaixado pela minha profissão e busco sempre aperfeiçoar conhecimentos, além de estar em constante busca por novos desafios. Meu hobby favorito é consumir conteúdo sobre tecnologia,
          desde novas ferramentas que possam auxiliar no desenvolvimento e evolução do meu trabalho até informações sobre aquele novo smartphone que vai sair no final do ano.
        </p>
      </div>

      <picture>
        <source srcset="~assets/images/samuel_leonel.webp" type="image/webp">
        <source srcset="~assets/images/samuel_leonel.png" type="image/png">
        <img class="image" src="~assets/images/samuel_leonel.png" alt="Minha foto">
      </picture>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
