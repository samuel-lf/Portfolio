<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="logo" aria-label="Logo">
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
          <li data-sal="slide-right" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce">
            <a href="#sobre" @click="scrollBehavior($event)">
              Sobre mim
            </a>
          </li>
          <li data-sal="slide-right" data-sal-delay="200" data-sal-duration="800" data-sal-easing="ease-out-bounce">
            <a href="#projetos" @click="scrollBehavior($event)">
              Projetos
            </a>
          </li>
          <li data-sal="slide-right" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce">
            <a href="#solucoes" @click="scrollBehavior($event)">
              Soluções
            </a>
          </li>
          <li data-sal="slide-right" data-sal-delay="400" data-sal-duration="800" data-sal-easing="ease-out-bounce">
            <a href="#habilidades" @click="scrollBehavior($event)">
              Habilidades
            </a>
          </li>
          <li data-sal="slide-right" data-sal-delay="500" data-sal-duration="800" data-sal-easing="ease-out-bounce">
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
import sal from "sal.js";

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
    sal();
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
