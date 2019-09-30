<template>
  <div class="card projectcard">
    <div class="card-header">
      <p class="card-header-title">
        <span>{{projectname}}</span>
      </p>
      <span
        v-for="technology in technologies"
        :key="technology"
        class="technologies"
      >
        <span class="tag is-warning is-pulled-right">{{technology}}</span>
      </span>
    </div>
    <div class="card-content">
      <figure class="image">
        <img class="projectimage" v-bind:src="imgsrc">
      </figure>

      <p
        style="margin-top: 1em"
        class="content has-text-justified has-text-weight-light"
      >{{projectdescription}}</p>

      <div class="content has-text-justified">
        <span v-for="tag in tags" :key="tag" class>
          <span style="margin-right: 1em" class="tag is-info">{{tag}}</span>
        </span>
      </div>
    </div>
    <footer class="card-footer">
      <a v-if="paper" v-bind:href="paper" class="card-footer-item">
        <i class="fa fa-file"></i>Paper
      </a>
      <a v-if="github" v-bind:href="github" class="card-footer-item">
        <i class="fa fa-github"></i>Github
      </a>
      <a v-if="external" v-bind:href="external" class="card-footer-item">
        <i class="fa fa-external-link"></i>External
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeSectionBody",
  props: {
    projectname: String,
    technologies: Array,
    imgsrc: String,
    projectdescription: String,
    tags: Array,
    github: String,
    external: String,
    paper: String
  }
};
</script>

<style scoped>
.projectcard{
  height: 100%
}

.technologies {
  padding: 10px 10px 10px 0px;
}

.fa {
  margin-right: 10px;
}

.card-header,
.card-footer {
  background-color: rgb(250, 250, 250);
}
</style>