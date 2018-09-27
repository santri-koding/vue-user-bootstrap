<template>
  <div>
    <div class="border-space"></div>
    <div class="container">
      <div class="row mt-5 mb-4">
        <div class="col-md-3">
          <h6>Forum Jual Beli Suara Merdeka</h6>
          <ul class="link-footer">
            <li><a href="">Tentang Kami</a></li>
            <li><a href="">Karir</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Media Kit</a></li>
            <li><a href="">Official Store</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h6>Jual dan Beli</h6>
          <ul class="link-footer">
            <li><a href="">Tentang Kami</a></li>
            <li><a href="">Karir</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Media Kit</a></li>
            <li><a href="">Official Store</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h6>Bantuan</h6>
          <ul class="link-footer">
            <li><a href="">Tentang Kami</a></li>
            <li><a href="">Karir</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Media Kit</a></li>
            <li><a href="">Official Store</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h6>Suara Merdeka</h6>
          <ul class="link-footer">
            <li><a href="">Tentang Kami</a></li>
            <li><a href="">Karir</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Media Kit</a></li>
            <li><a href="">Official Store</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <b-card class="text-left">
            <div class="row">
              <div class="col-4">
                <img src="https://ecs7.tokopedia.net/img/footer/mobile-icon.png" alt="" class="img-fluid">
              </div>
              <div class="col-8" style="margin-left: -20px;">
                <span class="font-13">Dapatkan Aplikasi FJB Suara Merdeka</span><br>
                <span class="font-13"><a href="#">Android</a> - <a href="#">iOS</a></span>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div class="border-space"></div>
    <div class="container">
      <div class="row mt-2 mb-2">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-2">
              <img src="https://ecs7.tokopedia.net/img/footer/toped.png" alt="" class="img-fluid img-footer">
            </div>
            <div class="col-md-10">
              <div class="font-13 color-grey mt-1" style="margin-left: -35px;">
                © {{ date }}, PT Suara Merdeka <br/>
                Server Process Time
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="float-right">
            <b-button-group>
              <b-button
                size="sm"
                :variant="lang.id.variant"
                :disabled="lang.id.status"
                @click="swicthHandler(lang.id.id)">Bahasa Indonesia</b-button>
              <b-button
                size="sm"
                :variant="lang.jowo.variant"
                :disabled="lang.jowo.status"
                @click="swicthHandler(lang.jowo.id)">Boso Jowo</b-button>
            </b-button-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
      lang: {
        id: {
          id: 'id',
          variant: 'success',
          status: true,
        },
        jowo: {
          id: 'jowo',
          variant: 'outline-success',
          status: false,
        },
      },
    };
  },
  methods: {
    swicthHandler(value) {
      if (value === 'id') {
        this.lang.id.variant = 'success';
        this.lang.id.status = true;
        this.lang.jowo.variant = 'outline-success';
        this.lang.jowo.status = false;
      } else {
        this.lang.id.variant = 'outline-success';
        this.lang.id.status = false;
        this.lang.jowo.variant = 'success';
        this.lang.jowo.status = true;
      }
    },
  },
};

</script>

<style scoped>
h6 {
  font-size: 13px;
}
ul {
  list-style: none;
  padding-left: 10px;
  font-size: 12px;
}
ul a {
  margin-left: -10px;
  color: var(--font-grey-custom);
}

ul li {
  line-height: 22px;
}
.img-footer {
  height: 40px;
}
.border-space {
  border-top: 1px solid var(--grey-custom);
  padding: 0;
}
</style>
