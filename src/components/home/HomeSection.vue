<template>
  <section class="hero is-fullheight is-danger is-bold">
    <TheNavigation brand="klave"/>
    <TheSectionBody male="em em-male-technologist" fire="em em-fire"/>
    <TheSectionFooter/>
  </section>
</template>

<script>
import TheNavigation from "./TheNavigation.vue";
import TheSectionBody from "./HomeSectionBody.vue";
import TheSectionFooter from "./HomeSectionFooter.vue";

export default {
  name: "homeSection",
  components: {
    TheNavigation,
    TheSectionBody,
    TheSectionFooter
  }
};
</script>

<style>
</style>
