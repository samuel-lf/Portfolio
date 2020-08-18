<template>
  <footer class="footer">
    <Logo class="logo"/>
    <p class="frase">Viver, aprender e evoluir um pouco mais a cada dia.</p>
    <ul class="social">
      <li class="item">
        <a class="link" href="https://github.com/samuel-lf" target="blank">
          <GithubLogo />
        </a>
      </li>
      <li class="item">
        <a class="link" href="https://www.linkedin.com/in/samuel-leonel-4a9ab713" target="blank">
          <LinkedInLogo />
        </a>
      </li>
      <li class="item">
        <a class="link" href="https://www.facebook.com/samuellf97" target="blank">
          <FacebookLogo />
        </a>
      </li>
      <li class="item">
        <a class="link" href="https://www.instagram.com/samuel_lf/" target="blank">
          <InstagramLogo />
        </a>
      </li>
      <li class="item">
        <a class="link" href="https://twitter.com/Samuel__Leonel" target="blank">
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
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
