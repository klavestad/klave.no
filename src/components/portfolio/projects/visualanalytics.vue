<template>
  <ProjectCard
    projectname="Oslo City Bikes: Open data project"
    imgsrc="https://i.imgur.com/bXDIKJ8.png"
    v-bind:technologies="['Tableau', 'LaTex']"
    projectdescription="As part of the Visual Analytics course, we decided to dive into the open bicycle data of Oslo Bysykkel, in order to reveal trends, knowledge and valuable insight. To do this, we used techniques for data manipulation and finally presentation in Tableau."
    v-bind:tags="['Side project', 'Visual Analytics', 'Dashboard']"
    paper="../../../assets/klavestad_sindre_cv.pdf"
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
