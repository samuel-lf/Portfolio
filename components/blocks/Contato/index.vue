<template>
  <section id="contato" class="section sectionSpace">
    <h2 class="title">Vamos conversar?</h2>
    <p class="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo tempora dignissimos inventore debitis repellendus sequi consectetur eligendi quibusdam. Fuga itaque optio id deleniti, distinctio ratione fugit voluptate vel tempora veniam?</p>
    <form class="form">
      <div class="block">
        <input class="input" type="text" name="name" required>
        <label for="name" class="label">
          <span class="content">Nome completo</span>
        </label>
      </div>
      <div class="block">
        <input class="input" type="email" name="email" required>
        <label for="email" class="label">
          <span class="content">E-mail</span>
        </label>
      </div>
      <div class="block">
        <input class="input" type="text" name="assunto" required>
        <label for="assunto" class="label">
          <span class="content">Assunto</span>
        </label>
      </div>
      <div class="block">
        <input class="input" type="text" name="mensagem" required>
        <label for="mensagem" class="label">
          <span class="content">Mensagem</span>
        </label>
      </div>
      <div class="block">
        <button type="submit" class="btn">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
