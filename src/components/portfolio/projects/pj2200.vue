<template>
  <ProjectCard
    projectname="Westerdals Mobile Application"
    imgsrc="https://i.imgur.com/hXpd8Ug.jpg"
    v-bind:technologies="['Xamarin', 'C#']"
    projectdescription="Xamarin Cross-Application Development for iOS, Android and Windows Phone. The application was made as a school project with regards to present students with relevant information about their classes or social activities."
    v-bind:tags="['School Project', 'Cross-platform', 'iOS', 'Android', 'Windows Phone', 'Azure']"
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
