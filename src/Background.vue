<template>
  <div class="h-52 fixed w-full -z-10">
    <div
      class="bg-cover h-full bg-no-repeat sm:hidden"
      style="background-image: url(./images/bg-mobile-dark.jpg)"
    ></div>
    <div
      class="bg-cover h-full bg-no-repeat hidden sm:block"
      style="background-image: url(./images/bg-desktop-dark.jpg)"
    ></div>
  </div>
  <div class="absolute -z-20 h-screen w-screen bg-primary"></div>
</template>

<script setup></script>

<style scoped></style>
