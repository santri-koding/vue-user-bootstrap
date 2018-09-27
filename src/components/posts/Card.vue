<template>
  <div class="card" @click="openDetailHandler()">
    <img class="card-img-top" :src="imgSource" :alt="title">
    <div class="card-body footer-card">
      <h6 class="font-12">{{ title }}</h6>
      <h6 class="font-14 price">{{ price | convertToRP }}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item font-12">
        <a href="" class="footer-color"> {{ user }}</a> <br>
        <span class="footer-color"><i class="fa fa-map-marker-alt"></i> {{ location }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['imgSource', 'title', 'price', 'user', 'location'],
  methods: {
    openDetailHandler() {
      alert(`this ${this.title}`);
    },
  },
};

</script>

<style scoped>
.card {
  cursor: pointer;
}
.footer-card {
  border-top-style: dashed;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: -10px;
}
.card-body {
  padding: 10px;
}
.list-group-item {
  padding: 5px 10px;
}
.footer-color {
  color: rgba(0,0,0,.54) !important;
}
.price {
  color: #ff5722 !important;
}
</style>
