<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container content-wrapper">
        <div class="columns">
          <div class="column">
            <klaveno/>
          </div>
          <div class="column">
            <byLarm/>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <payex/>
          </div>
          <div class="column">
            <meteorstarterkit/>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <roskilde/>
          </div>
          <div class="column">
            <mobilecomputing/>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <visualanalytics/>
          </div>
          <div class="column">
            <internetofthings/>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <bachelorproject/>
          </div>
          <div class="column">
            <pj2200/>
          </div>
          <div class="column">
            <lasada/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import klaveno from "./projects/klaveno.vue";
import byLarm from "./projects/bylarm.vue";
import payex from "./projects/payex.vue";
import roskilde from "./projects/roskilde.vue";
import visualanalytics from "./projects/visualanalytics.vue";
import internetofthings from "./projects/internetofthings.vue";
import bachelorproject from "./projects/bachelorproject.vue";
import pj2200 from "./projects/pj2200.vue";
import lasada from "./projects/lasada.vue";
import meteorstarterkit from "./projects/meteor-starter-kit.vue";
import mobilecomputing from "./projects/mobilecomputing.vue";

export default {
  name: "portfolioSection",
  components: {
    klaveno,
    byLarm,
    payex,
    roskilde,
    visualanalytics,
    internetofthings,
    bachelorproject,
    pj2200,
    lasada,
    meteorstarterkit,
    mobilecomputing
  },
  data() {
    return { projects: [] };
  }
};
</script>

<style>
</style>
