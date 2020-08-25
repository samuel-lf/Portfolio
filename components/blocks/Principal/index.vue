<template>
  <section class="sectionFull">
    <div class="introduction">
      <div class="content">
        <p class="hello">Olá! Sou o Samuel Leonel</p>
        <h1 class="developer">Desenvolvedor Front-End</h1>
        <div class="hobbies">
          <p class="hobby typing">Apaixonado por UX/UI</p>
          <p class="hobby displayNone">Entusiasta das tecnologias web e mobile</p>
          <p class="hobby displayNone">Escritor nas horas vagas</p>
        </div>
        <div class="social">
          <ul class="content">
            <li data-sal="zoom-in" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce">
              <a class="link" href="https://github.com/samuel-lf" target="blank" aria-label="Github">
                <GithubLogo class="icon" />
              </a>
            </li>
            <li data-sal="zoom-in" data-sal-delay="200" data-sal-duration="800" data-sal-easing="ease-out-bounce">
              <a class="link" href="https://www.linkedin.com/in/samuel-leonel-4a9ab7130" target="blank" aria-label="LinkedIn">
                <LinkedInLogo class="icon" />
              </a>
            </li>
            <li data-sal="zoom-in" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce">
              <a class="link" href="https://www.facebook.com/samuellf97" target="blank" aria-label="Facebook">
                <FacebookLogo class="icon" />
              </a>
            </li>
            <li data-sal="zoom-in" data-sal-delay="400" data-sal-duration="800" data-sal-easing="ease-out-bounce">
              <a class="link" href="https://www.instagram.com/samuel_lf/" target="blank" aria-label="Instagram">
                <InstagramLogo class="icon" />
              </a>
            </li>
            <li data-sal="zoom-in" data-sal-delay="500" data-sal-duration="800" data-sal-easing="ease-out-bounce">
              <a class="link" href="https://twitter.com/Samuel__Leonel" target="blank" aria-label="Twitter">
                <TwitterLogo class="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="image">
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" class="img"/>
      </div>
    </div>
    <div class="mouse">
      <MouseArrowIcon class="bounce"/>
    </div>
  </section>
</template>

<script>
import FacebookLogo from '~/assets/images/social/facebook.svg?inline'
import LinkedInLogo from '~/assets/images/social/linkedin.svg?inline'
import GithubLogo from '~/assets/images/social/github.svg?inline'
import InstagramLogo from '~/assets/images/social/instagram.svg?inline'
import TwitterLogo from '~/assets/images/social/twitter.svg?inline'
import MouseArrowIcon from '~/assets/images/icons/mouse_arrow.svg?inline'
import Lottie from 'vue-lottie/src/lottie.vue';
import * as animationData from '~/assets/images/19648-hey.json';
import sal from "sal.js";

export default {
  components:{
    FacebookLogo,
    LinkedInLogo,
    GithubLogo,
    InstagramLogo,
    TwitterLogo,
    MouseArrowIcon,
    Lottie
  },
  data() {
    return {
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1
    }
  },
  methods:{
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    typing(){
      console.log()
      let hobbies = document.querySelectorAll('.hobby');
      let index = 0;
      setInterval(function(){
        [...hobbies].map(function(hobbie, index){
          hobbies[index].classList.remove('typing');
          hobbies[index].classList.add('displayNone');
        });
        if(index == 2){
          index = -1;
        }
        index++;
        hobbies[index].classList.remove('displayNone');
        hobbies[index].classList.add('typing');
      },4800);
    }
  },
  mounted(){
    this.typing();
    sal();
  }
}
</script>

<style lang="scss" scoped>
  @import './styles';
</style>
