<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
export default {
  components: {
    Header,
    Footer
  }
}
</script>
