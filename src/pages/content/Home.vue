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
        <div class="row">
          <div class="col-6">
            <h6>Iklan Terbaru</h6>
          </div>
          <div class="col-6">
            <a href="" class="show-all-button">Selengkapnya <i class="fa fa-caret-down"></i></a>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-2" v-for="post in posts" :key="post.id">
            <post-content
              :img-source="post.img_source"
              :title="post.title" :location="post.location"
              :price="post.price"
              :user="post.user"> </post-content>
          </div>
        </div>
      </div>
    </div>
    <!-- buat akun baru sekarang! -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h6 class="color-orange">Punya Toko Online? Buka cabangnya di Tokopedia</h6>
        <span class="font-14">Mudah, nyaman dan bebas komisi transaksi. GRATIS!</span>
        <br>
        <b-button size="md" variant="success" class="mt-2"> Buat Iklan Sekarang</b-button>
        <a href="" style="color: var(--green); text-decoration: underline;" class="font-12">Pelajari lebih Lanjut</a> <!-- eslint-disable-line -->
      </div>
      <div class="col-md-6">
        <img src="https://ecs7.tokopedia.net/img/shop-banner.png" alt="" class="img-fluid float-right">
      </div>
      <div class="col-md-12">
        <div style="border-bottom: 1px dashed #ccc;"> </div>
      </div>
    </div>
    <!-- alasan jualan di FJB Suara Merdeka -->
    <div class="row mt-5">
      <div class="col-12">
        <h6 class="font-14">Tokopedia - Jual Beli Online Aman dan Nyaman</h6>
        <span class="font-13">
          {{ why_fjb.description }}
        </span>
        <div class="row mt-4">
          <div class="col-md-4" v-for="reason in reasons" :key="reason.id">
            <card-hero
              :image-source="reason.img_source"
              :title="reason.title"
              :description="reason.description"> </card-hero>
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
import CardHero from '@/components/widgets/CardHero';

export default {
  components: {
    SliderContent,
    ImageContent,
    PostContent,
    CardHero,
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
      why_fjb: {
        /* eslint-disable-line */ description: `Tokopedia merupakan pasar / mal online terbesar di Indonesia yang memungkinkan individu maupun pemilik usaha di Indonesia untuk membuka dan mengelola toko online mereka secara mudah dan gratis, sekaligus memberikan pengalaman berbelanja online yang lebih aman dan nyaman. Jual beli online menjadi lebih menyenangkan. Punya toko online? Buka cabang nya di Tokopedia sekarang! Gratis!`
      },
      reasons: [
        {
          id: 1,
          title: 'Transparan',
          description: 'Jual beli online menjadi lebih menyenangkan. Punya toko online?',
          img_source: 'https://ecs7.tokopedia.net/img/transparan-01.png',
        },
        {
          id: 2,
          title: 'Aman',
          description: 'Jual beli online menjadi lebih menyenangkan. Punya toko online?',
          img_source: 'https://ecs7.tokopedia.net/img/aman-02.png',
        },
        {
          id: 3,
          title: 'Gratis',
          description: 'Jual beli online menjadi lebih menyenangkan. Punya toko online?',
          img_source: 'https://ecs7.tokopedia.net/img/free-toped.png',
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

.show-all-button {
  font-size: 13px;
  float: right;
  color: var(--green);
}

.show-all-button:hover {
  color: var(--green);
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
