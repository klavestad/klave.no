<template>
  <div id="home">
    <HomeSection/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import HomeSection from '../components/home/HomeSection.vue'
import Portfolio from '../components/portfolio/PortfolioSection.vue'
import Contact from '../components/contact/ContactSection.vue'
import Footer from '../components/footer/TheFooter.vue'

export default {
  name: 'app',
  components: {
      HomeSection,
      Portfolio,
      Contact,
      Footer
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
