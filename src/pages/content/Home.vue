<template>
  <div class="container mb-4">
    <!-- promosi -->
    <div class="row">
      <div class="col-12">
        <h6>Promo</h6>
      </div>
      <div class="col-md-8 slide-big">
        <slider-content :slides="images"> </slider-content>
      </div>
      <div class="col-md-4 slide-small">
        <div class="row">
          <div class="col-12 mb-2" v-for="image in images" :key="image.id">
            <image-content :image-source="image.imgLink" :alt="image.title"> </image-content>
          </div>
        </div>
      </div>
    </div>
    <!-- Produk terbaru -->
    <div class="row">
      <div class="col-12">
        <h6>Iklan Terbaru</h6>
      </div>
      <div class="col-12">
        
      </div>
    </div>
  </div>
</template>

<script>
import SliderContent from '@/components/slider/Slider';
import ImageContent from '@/components/widgets/ImageHomepage';

export default {
  components: {
    SliderContent,
    ImageContent,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          imgLink: 'https://picsum.photos/1024/480/?image=52',
          title: 'First slide',
          description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
          id: 2,
          imgLink: 'https://picsum.photos/1024/480/?image=52',
          title: 'Second slide',
          description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
      ],
    };
  },
};

</script>

<style>
h6 {
  font-weight: 600;
}

.slide-big {
  margin-right: -10px;
}

.slide-small {
  margin-left: -10px;
}

@media (max-width: 575.98px) {
  .slide-big {
    margin-right: 0;
  }

  .slide-small {
    margin-left: 0;
  }
}
</style>
