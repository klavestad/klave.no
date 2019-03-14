<template>
  <ProjectCard
    projectname="PayEx IT"
    imgsrc="https://i.imgur.com/OKy40eh.png"
    external="https://www.payex.no"
    v-bind:technologies="['MeteorJS', 'SemanticUI']"
    projectdescription="As a developer, I grew tired of some of the manual work I had to perform on a daily basis at my part-time job @ PayEx. As a result, I decided to develop a full-stack environment with easy tools for analyzation of logs through NodeJS and an user-friendly UI for reaching functionality in external PayEx systems in a more effective matter. The project also later manifested itself in a BI Dashboard for monitoring PayEx payment terminals in realtime."
    v-bind:tags="['Side project', 'Robotics', 'Dashboard']"
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
