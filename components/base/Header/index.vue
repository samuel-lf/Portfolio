<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="logo">
        <Logo class="icon" />
      </nuxt-link>

      <input id="check" type="checkbox" v-model="check">
      <label for="check" class="btnHamburger">
        <MenuHamburguer class="hambuguer" />
      </label>

      <nav class="menu" :class="{active: check}">

        <div v-if="check" class="btnClose">
          <input id="check" type="checkbox" v-model="check">
          <label for="check">
            <Close class="close" />
          </label>
        </div>

        <ul>
          <li>
            <a href="#sobre" @click="scrollBehavior($event)">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#projetos" @click="scrollBehavior($event)">
              Projetos
            </a>
          </li>
          <li>
            <a href="#solucoes" @click="scrollBehavior($event)">
              Soluções
            </a>
          </li>
          <li>
            <a href="#habilidades" @click="scrollBehavior($event)">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#blog" @click="scrollBehavior($event)">
              Blog
            </a>
          </li>
          <li>
            <a href="#contato" @click="scrollBehavior($event)">
              Contato
            </a>
          </li>
        </ul>

      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/images/logo/logo.svg?inline'
import MenuHamburguer from '~/assets/images/icons/menu_mobile.svg?inline'
import Close from '~/assets/images/icons/close.svg?inline'

export default {
  components: {
    Logo,
    MenuHamburguer,
    Close
  },
  data(){
    return {
      check: false,
      width: 0
    }
  },
  watch:{
    $route (to, from){
      if(this.check){
        this.check = false
      }
    }
  },
  mounted() {
    const observableResize = new ResizeObserver(entries => {
      for (let entry of entries) {
        this.onResize(entry.contentRect.width)
      }
    });
    observableResize.observe(document.querySelector('body'))
  },
  methods: {
    onResize(width) {
      if(width > 850 && this.check){
        this.check = false
      }
    },
    scrollBehavior(event) {
      event.preventDefault()
      const link = event.target
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
@import './menu_mobile';
</style>
