<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333; margin-bottom: 20px;"
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide v-for="slide in slides" :key="slide.id"
                        :caption="slide.title"
                        :text="slide.caption"
                        :img-src="slide.imgLink"
      ></b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
export default {
  props: [
    'slides',
  ],
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};

</script>
