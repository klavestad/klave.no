<template>
  <footer class="footer has-background-light-grey">
    <div class="content has-text-centered">
      <div>
        <a class="is-danger" href="http://github.com/klavestad">
          <i class="social fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sindre-klavestad-4892087a/">
          <i class="social fa fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/SindreKlavestad">
          <i class="social fa fa-facebook"></i>
        </a>
        <a href="http://twitter.com/klavestad">
          <i class="social fa fa-twitter"></i>
        </a>
        <a href="http://snapchat.com/add/klave">
          <i class="social fa fa-snapchat"></i>
        </a>
      </div>
      <div class="content">
        <p style="margin-top:10px" class="is-medium">
          Made with <i class="fa fa-heart"></i> by <a href="http://klave.no">klave</a>
        </p>
        <p class="is-medium">
          Copyright
          <i class="fa fa-copyright"></i> 2019
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    year: String
  }
};
</script>

<style>
.social {
  font-size: 30px;
  padding-right: 15px;
}
</style>
