<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container content-wrapper">
        <div class="columns">
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://media.giphy.com/media/dK0AtTasUsPdZm7oEN/200w_d.gif" github="https://github.com/klavestad/klave.no" link="https://klave.no" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://i.imgur.com/GfSGLdF.png" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://i.imgur.com/GfSGLdF.png" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://i.imgur.com/GfSGLdF.png" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://i.imgur.com/GfSGLdF.png" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://i.imgur.com/GfSGLdF.png" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://i.imgur.com/GfSGLdF.png" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
          <div class="column">
            <ProjectCard projectname="klave.no" imgsrc="https://i.imgur.com/GfSGLdF.png" v-bind:technologies="['Vue.js', 'BulmaCSS']" projectdescription="Homepage project to present a portfolio of recent projects and contact information" v-bind:tags="['Homepage', 'Portfolio']" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "portfolioSection",
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
