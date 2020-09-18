<template>
  <footer class="footer">
    <Logo class="logo"/>
    <p class="frase">Viver, aprender e evoluir um pouco mais a cada dia.</p>
    <ul class="social">
      <li class="item" data-sal="zoom-in" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce">
        <a class="link" href="https://github.com/samuel-lf" target="blank" aria-label="Github">
          <GithubLogo />
        </a>
      </li>
      <li class="item" data-sal="zoom-in" data-sal-delay="200" data-sal-duration="800" data-sal-easing="ease-out-bounce">
        <a class="link" href="https://www.linkedin.com/in/samuel-leonel-4a9ab7130" target="blank" aria-label="LinkedIn">
          <LinkedInLogo />
        </a>
      </li>
      <li class="item" data-sal="zoom-in" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce">
        <a class="link" href="https://www.facebook.com/samuellf97" target="blank" aria-label="Facebook">
          <FacebookLogo />
        </a>
      </li>
      <li class="item" data-sal="zoom-in" data-sal-delay="400" data-sal-duration="800" data-sal-easing="ease-out-bounce">
        <a class="link" href="https://www.instagram.com/samuel_lf/" target="blank" aria-label="Instagram">
          <InstagramLogo />
        </a>
      </li>
      <li class="item" data-sal="zoom-in" data-sal-delay="500" data-sal-duration="800" data-sal-easing="ease-out-bounce">
        <a class="link" href="https://twitter.com/Samuel__Leonel" target="blank" aria-label="Twitter">
          <TwitterLogo />
        </a>
      </li>
    </ul>
    <p class="feito">
      Feito com <Heart class="heart"/>
    </p>
  </footer>
</template>

<script>
import FacebookLogo from '~/assets/images/social/facebook.svg?inline'
import LinkedInLogo from '~/assets/images/social/linkedin.svg?inline'
import GithubLogo from '~/assets/images/social/github.svg?inline'
import InstagramLogo from '~/assets/images/social/instagram.svg?inline'
import TwitterLogo from '~/assets/images/social/twitter.svg?inline'
import Heart from '~/assets/images/social/heart.svg?inline'
import Logo from '~/assets/images/logo/logo.svg?inline'
import sal from "sal.js";

export default {
  name: 'Footer',
  components:{
    FacebookLogo,
    LinkedInLogo,
    GithubLogo,
    InstagramLogo,
    TwitterLogo,
    Heart,
    Logo
  },
  mounted() {
    sal();
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
