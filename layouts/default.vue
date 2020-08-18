<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from "../components/base/Header";
export default {
  components: {
    Header
  }
}
</script>
