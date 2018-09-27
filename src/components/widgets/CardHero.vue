<template>
  <div>
    <div class="row">
      <div class="col-5">
        <img :src="imageSource" :alt="title" class="img-fluid">
      </div>
      <div class="col-7">
        <h6>{{ title }}</h6>
        <span class="description">
          {{ description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageSource', 'title', 'description'],
};

</script>

<style scoped>
h6 {
  height: 10px;
  font-size: 13px;
}
.description {
  font-size: 12px;
  line-height: 50%;
  color: rgba(0, 0, 0, 0.38);
}
</style>
