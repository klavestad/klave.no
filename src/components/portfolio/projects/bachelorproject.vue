<template>
  <ProjectCard
    projectname="Bachelor Project @ PayEx"
    imgsrc="https://i.imgur.com/0a8MWUS.png"
    v-bind:technologies="['ElasticSearch', 'Kibana']"
    projectdescription="Development and use of tools for data mining and data visualization to simplify the process for handling incidents in PayEx e-commerce payment solutions"
    v-bind:tags="['Bachelor Project', 'Visual Analytics', 'Business Intelligence', 'Big Data']"
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
