<template>
  <ProjectCard
    projectname="Meteor Starter Kit"
    imgsrc="https://i.imgur.com/opV5Y7x.png"
    v-bind:technologies="['MeteorJS', 'SemanticUI']"
    projectdescription="My meteor starter kit includes core functionality like database-server-client connection, login/registering, SMTP/reset password solution, an awesome landing page, client/server-side routing. This makes it easy to kickstart projects, and focus on the problem at hand."
    v-bind:tags="['Side Project', 'JS', 'SMTP', 'OAuth', 'MongoDB']" 
    github="https://github.com/klavestad/meteor-starter-kit"
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
