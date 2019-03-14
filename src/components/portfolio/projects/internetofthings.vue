<template>
  <ProjectCard
    projectname="Smart IoT Legohouse"
    imgsrc="https://i.imgur.com/bXVL83t.jpg"
    v-bind:technologies="['Particle', 'MeteorJS', 'Cordova']"
    projectdescription="We built the future-smart home inside a miniature lego house in order to conceptualize the concept, while getting key insights into the integration of a smart home system. The system included sensors, microcontrollers - acting as gateways, connected seamlessly to the cloud, where the user had access through mobile/web applications. As a result, the user was able to monitor and controll the house through the smartphone."
    v-bind:tags="['Smart Home', 'Lego', 'Websockets', 'Internet of Things']"
    external="http://roskilde-noise-project.herokuapp.com/" 
    paper="../../../assets/klavestad_sindre_cv.pdf"
  />
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "internetofthings",
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
