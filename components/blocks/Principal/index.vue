<template>
  <section class="sectionFull">
    <div class="introduction">
      <div class="content">
        <p class="hello">Olá! Sou o Samuel Leonel</p>
        <h1 class="developer">Desenvolvedor Front-End</h1>
        <div class="hobbies">
          <p class="text typing">Apaixonado por UX/UI</p>
          <p class="text displayNone">Apaixonado por tecnologias web e mobile</p>
          <p class="text displayNone">Escritor nas horas vagas</p>
        </div>
        <div class="social">
          <ul class="content">
            <li>
              <a class="link" href="https://github.com/samuel-lf" target="blank">
                <GithubLogo class="icon" />
              </a>
            </li>
            <li>
              <a class="link" href="https://www.linkedin.com/in/samuel-leonel-4a9ab7130" target="blank">
                <LinkedInLogo class="icon" />
              </a>
            </li>
            <li>
              <a class="link" href="https://www.facebook.com/samuellf97" target="blank">
                <FacebookLogo class="icon" />
              </a>
            </li>
            <li>
              <a class="link" href="https://www.instagram.com/samuel_lf/" target="blank">
                <InstagramLogo class="icon" />
              </a>
            </li>
            <li>
              <a class="link" href="https://twitter.com/Samuel__Leonel" target="blank">
                <TwitterLogo class="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="image">
        <img class="img" :src="require('~/assets/images/samuel_leonel.png')" alt="">
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


export default {
  components:{
    FacebookLogo,
    LinkedInLogo,
    GithubLogo,
    InstagramLogo,
    TwitterLogo,
    MouseArrowIcon
  },
  methods:{
    typing(){
      let hobbies = document.querySelectorAll('.text');
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
  }
}
</script>

<style lang="scss" scoped>
  @import './styles';
</style>
