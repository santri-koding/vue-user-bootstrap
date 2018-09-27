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
        <div class="row">
          <div class="col-md-2 col-sm-4 col-xs-6" v-for="post in posts" :key="post.id">
            <post-content
              :img-source="post.img_source"
              :title="post.title" :location="post.location"
              :price="post.price"
              :user="post.user"> </post-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderContent from '@/components/slider/Slider';
import ImageContent from '@/components/widgets/ImageHomepage';
import PostContent from '@/components/posts/Card';

export default {
  components: {
    SliderContent,
    ImageContent,
    PostContent,
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
      posts: [
        {
          id: 1,
          title: 'Yamaha R15 2017 Bekas Mulus Like New',
          category: 'Motor',
          img_source: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/9/22/4111905/4111905_94679fff-d36c-46c0-9475-6645da89d803_500_500.jpg',
          sub_category: 'Yamaha',
          type: 'bekas',
          user: 'Indra Kusuma',
          location: 'Semarang Kota',
          price: '19000000',
        },
        {
          id: 2,
          title: 'Honda CBR 2017 Bekas Mulus Like New',
          category: 'Motor',
          img_source: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/4/26/3497675/3497675_420051be-a5f2-4acc-b4a2-f4f210eefc8a_600_600.jpg',
          sub_category: 'Honda',
          type: 'bekas',
          user: 'Indra Kusuma',
          location: 'Semarang Kota',
          price: '2200000',
        },
        {
          id: 3,
          title: 'Yamaha R15 2017 Bekas Mulus Like New',
          category: 'Motor',
          img_source: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/9/22/4111905/4111905_94679fff-d36c-46c0-9475-6645da89d803_500_500.jpg',
          sub_category: 'Yamaha',
          type: 'bekas',
          user: 'Indra Kusuma',
          location: 'Semarang Kota',
          price: '19000000',
        },
        {
          id: 4,
          title: 'Honda CBR 2017 Bekas Mulus Like New',
          category: 'Motor',
          img_source: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/4/26/3497675/3497675_420051be-a5f2-4acc-b4a2-f4f210eefc8a_600_600.jpg',
          sub_category: 'Honda',
          type: 'bekas',
          user: 'Indra Kusuma',
          location: 'Semarang Kota',
          price: '2200000',
        },
        {
          id: 5,
          title: 'Yamaha R15 2017 Bekas Mulus Like New',
          category: 'Motor',
          img_source: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/9/22/4111905/4111905_94679fff-d36c-46c0-9475-6645da89d803_500_500.jpg',
          sub_category: 'Yamaha',
          type: 'bekas',
          user: 'Indra Kusuma',
          location: 'Semarang Kota',
          price: '19000000',
        },
        {
          id: 6,
          title: 'Honda CBR 2017 Bekas Mulus Like New',
          category: 'Motor',
          img_source: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/4/26/3497675/3497675_420051be-a5f2-4acc-b4a2-f4f210eefc8a_600_600.jpg',
          sub_category: 'Honda',
          type: 'bekas',
          user: 'Indra Kusuma',
          location: 'Semarang Kota',
          price: '2200000',
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

@media (max-width: 575.98px) {
  .slide-big {
    margin-right: 0;
  }

  .slide-small {
    margin-left: 0;
  }
}
</style>
