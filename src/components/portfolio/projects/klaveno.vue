<template>
  <ProjectCard
    projectname="klave.no"
    imgsrc="https://i.imgur.com/GfSGLdF.png"
    v-bind:technologies="['Vue.js', 'BulmaCSS']"
    projectdescription="Homepage project to present a portfolio of recent projects and contact information, but also to learn new technologies - Vue.JS and BulmaCSS"
    v-bind:tags="['Homepage', 'Portfolio']"
    github="https://github.com/klavestad/klave.no"
    external="https://klave.no"
  />
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "klaveno",
  components: {
    ProjectCard
  },
  data() {
    return { projects: [] };
  }
};
</script>

<style>
</style>
