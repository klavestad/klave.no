<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title is-1 has-text-weight-light">
            Hi, I'm Sindre!
            <i class="em em-raised_hand_with_fingers_splayed"></i>
          </h1>
          <h3 class="subtitle is-3 has-text-weight-light">
            
            <vue-typed-js :strings="[`I'm an <strong>applied computer science</strong> student <i class='em em-male-technologist'></i> with a <i class='em em-fire'></i> passion for software development <i class='fa fa-terminal'></i>`,
            `I'm an <strong>applied computer science</strong> student <i class='em em-male-technologist'></i> with a <i class='em em-fire'></i> passion for data science <i class='fa fa-database'></i>`,
            `I'm an <strong>applied computer science</strong> student <i class='em em-male-technologist'></i> with a <i class='em em-fire'></i> passion for internet of things <i class='fa fa-microchip'></i>`,
            `I'm an <strong>applied computer science</strong> student <i class='em em-male-technologist'></i> with a <i class='em em-fire'></i> passion for web development <i class='fa fa-code'></i>`,
            `I'm an <strong>applied computer science</strong> student <i class='em em-male-technologist'></i> and I'm available! <i class='em em-briefcase'></i> ^5000`]" :loop="true" :contentType="'html'" :backSpeed="50" :showCursor="false"><span class="typing"></span></vue-typed-js>
          </h3>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-2">
          <a
            class="button is-medium is-info"
            data="../../assets/klavestad_sindre_cv.pdf"
            type="application/pdf"
            href="../../assets/klavestad_sindre_cv.pdf"
          >Résumé</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSectionBody",
  props: {
    name: String,
    study: String,
    interests: Array,
    male: String,
    fire: String
  }
};
</script>

<style scoped>
.typed-element{
  position: relative;
}
</style>