<template>
  <div class="container-fluid">
    <!-- navigation content -->
    <navigation-content />
    <!-- content data -->
    <router-view> </router-view>
    <!-- footer content -->
    <footer-content />
  </div>
</template>

<script>
import FooterContent from './Footer';
import NavigationContent from './Navigation';
import Content from './Content';

export default {
  components: {
    FooterContent,
    NavigationContent,
    Content,
  },

};

</script>

<style>

</style>
