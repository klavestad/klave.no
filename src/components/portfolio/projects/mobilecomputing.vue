<template>
  <ProjectCard
    projectname="Mobile Computing"
    imgsrc="https://i.imgur.com/G0etyKq.png"
    v-bind:technologies="['MeteorJS', 'Cordova']"
    projectdescription="Development of a context-dependent location tracking prototype, which presented the user with the contextual location of friends and family. Arguably, this is a safer, and less creepy way of location sharing as the exact location is never stored in 3rd-party databases, but also because the information perceived is contextual. This means that it's arguably different from friends/family or complete strangers to know whether you're home or not."
    v-bind:tags="['School Project', 'JS', 'Geofencing', 'Published', 'ACM', 'Contextual Computing', 'Mobile Development']" 
    paper="https://dl.acm.org/citation.cfm?id=3281408"
  />
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "mobilecomputing",
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
