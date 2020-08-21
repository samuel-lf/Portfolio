<template>
  <section id="contato" class="section sectionSpace">
    <h2 class="title">Vamos conversar?</h2>
    <p class="subtitle">Podemos tomar um café (mesmo que seja virtual) e prozear sobre como posso auxiliar você desenvolvendo uma solução única.</p>
    <form class="form" @submit="sendEmail" v-if="emailSend === false">
      <div class="block">
        <input class="input" type="text" id="name" name="name" v-model="data.nome" required>
        <label for="name" class="label">
          <span class="content">Nome completo</span>
        </label>
      </div>
      <div class="block">
        <input class="input" type="email" id="email" name="email" v-model="data.email" required>
        <label for="email" class="label">
          <span class="content">E-mail</span>
        </label>
      </div>
      <div class="block">
        <input class="input" type="text" id="assunto" name="assunto" v-model="data.assunto" required>
        <label for="assunto" class="label">
          <span class="content">Assunto</span>
        </label>
      </div>
      <div class="block">
        <input class="input" type="text" id="mensagem" name="mensagem" v-model="data.mensagem" required>
        <label for="mensagem" class="label">
          <span class="content">Mensagem</span>
        </label>
      </div>
      <div class="block">
        <button type="submit" class="btn">Enviar</button>
      </div>
    </form>
    <div class="sendSuccess" v-if="emailSend === true">
      <SendEmail class="icon"/>
      <h2 class="title">Sucesso ao enviar sua mensagem</h2>
      <p class="text">Em breve retornarei o seu contato!</p>
    </div>
  </section>
</template>

<script>
import SendEmail from '~/assets/images/icons/sendEmail.svg?inline'

export default {
  components: {
    SendEmail
  },
  data(){
    return {
      data: {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      },
      emailSend: false
    }
  },
  methods: {
    sendEmail(event){
      event.preventDefault();
      this.$axios({
        method: 'POST',
        url: 'https://formspree.io/myynapoj',
        responseType: 'stream',
        data: this.data
      })
      .then((response) => {
        console.log(response)
        if(response.data.ok){
          this.emailSend = true
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
