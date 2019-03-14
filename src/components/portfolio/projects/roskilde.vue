<template>
  <ProjectCard
    projectname="Roskilde Music Festival Analytics"
    imgsrc="https://i.imgur.com/EOCy8AI.png"
    v-bind:technologies="['MeteorJS', 'Arduino']"
    projectdescription="Development of a cloud connected IoT artifact for measuring noise-polution on the Roskilde festival site. The noise data was collected, processed and presented in a developed full-stack analytical environment for real-time analysis on the web and mobile platforms (iOS & Android). Our results was later accepted at the 2018 IEEE International Conference on Big Data (Big Data)"
    v-bind:tags="['Big Data', 'Visual Analytics', 'Arduino', 'Mobile and Web Platforms']"
    external="http://roskilde-noise-project.herokuapp.com/" 
    paper="https://ieeexplore.ieee.org/abstract/document/8622406"
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
