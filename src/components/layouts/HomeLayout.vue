<template>
  <div>
    <!-- navigation content -->
    <navigation-content />
    <!-- content data -->
    <div class="container" style="margin-top: 4.5em">
      <router-view> </router-view>
    </div>
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
