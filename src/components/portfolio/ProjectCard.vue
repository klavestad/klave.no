<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        <span>{{projectname}}</span>
        <span v-for="technology in technologies" :key="technology" class="is-pulled-right">
            <span class="tag is-warning is-pulled-right">{{technology}}</span>
        </span>
      </p>
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
      <a v-bind:href="github" class="card-footer-item"><i class="fa fa-github"></i>Github</a>
      <a v-bind:href="link" class="card-footer-item"><i class="fa fa-eye"></i>Link</a>
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
    link: String

  }
};
</script>

<style scoped>

.fa{
  margin-right: 10px;
}

.card-header, .card-footer{
  background-color: rgb(250, 250, 250)
}
</style>