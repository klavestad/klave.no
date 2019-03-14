<template>
  <ProjectCard
    projectname="By:Larm Festival Analytics"
    imgsrc="https://i.imgur.com/E7xjvxz.png"
    v-bind:technologies="['MeteorJS', 'LeafletJS', 'Azure', 'Puppeteer']"
    projectdescription="Management of high-velocity data stream using Azure EventHub and Storage, and furthermore, development of a full-stack analytical environment for real-time analysis and presentation of festival data on the web."
    v-bind:tags="['Side project', 'Portfolio']"
    external="https://kristiania.no/aktuelt/forsker-pa-festivaldata-fra-bylarm/"
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
