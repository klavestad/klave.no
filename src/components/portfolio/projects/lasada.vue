<template>
  <ProjectCard
    projectname="LaSåda Pizza Majorstuen"
    imgsrc="https://i.imgur.com/wWqDELc.png"
    v-bind:technologies="['VIX']"
    projectdescription="Digital Marketing project with emphasis on SEO for a local pizza restaurant in Oslo, Norway. The project was one out of two projects which was graded with an A."
    v-bind:tags="['School Project', 'Digital Marketing', 'SEO']"
  />
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "pj2200",
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
