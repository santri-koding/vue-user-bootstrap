<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col-md-8">
        <slider-content :slides="images"> </slider-content>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-12 mb-2" v-for="image in images" :key="image.id">
            <image-content :image-source="image.imgLink" :alt="image.title"> </image-content>
          </div>
        </div>
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

</style>
