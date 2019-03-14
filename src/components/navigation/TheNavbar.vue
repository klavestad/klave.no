<template>
  <nav class="navbar is-dark is-fixed-top is-transparrent" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://klave.no">
          <h1 class="title">klave.no</h1>
        </a>
        
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {
    brand: String
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>

<style scoped>
</style>