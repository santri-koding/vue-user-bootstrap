<template>
  <div @click="linkHandler()">
    <img class="img-fluid img-fixed" :src="imageSource" :alt="alt">
  </div>
</template>

<script>
export default {
  props: ['link', 'alt', 'imageSource'],
  methods: {
    linkHandler() {
      // console.log(`Yous was clicked ${this.alt}`);
    },
  },
};

</script>

<style scoped>
.img-fixed {
  height: 163px;
  cursor: pointer;
}
</style>

