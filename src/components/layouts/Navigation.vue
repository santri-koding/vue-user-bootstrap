<template>
  <b-navbar toggleable="sm" type="light" variant="info" fixed="top" class="custom-navbar">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img class="img-logo" :src="logo.source" :alt="logo.title">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Kategori" class="font-14">
          <b-dropdown-item
            href="#"
            v-for="menu in menus"
            :key="menu.id"><span class="font-14">{{ menu.name }}</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <!-- Navbar dropdowns -->
        <b-nav-form class="form-search hide-on-mobile">
          <b-input-group size="md">
            <b-form-input placeholder="Cari sesuatu.." class="input-search"></b-form-input>
            <b-input-group-append>
              <b-dropdown
                size="sm"
                text="Semua Kategori"
                variant="outline-secondary"
                slot="append">
                  <b-dropdown-item
                    href="#"
                    v-for="menu in menus"
                    :key="menu.id">
                    <span class="font-14">{{ menu.name }}</span>
                  </b-dropdown-item>
              </b-dropdown>
              <b-btn variant="success" size="sm">Cari</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item href=""> Daftar </b-nav-item>
        <b-nav-item href=""> Masuk </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <!-- navbar-1.vue -->
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          id: 1,
          name: 'Motor',
          link: '',
        },
        {
          id: 2,
          name: 'Mobil',
          link: '',
        },
      ],
      logo: {
        title: '',
        source: 'static/img/logo-sample.png',
      },
    };
  },
};

</script>

<style scoped>
.img-logo {
  height: 30px;
  margin-left: 20px;
}

.remove-border, .btn-outline-secondary {
  border-color: transparent !important;
}

.input-search {
  min-width: 600px;
  border-right-color: transparent;
}

@media (max-width: 575.98px) {
  .form-search {
    padding-top: 10px;
    padding-left: 0;
  }
}

@media (max-width: 767.98px) {
  .input-search {
    min-width: 100%;
  }
  .hide-on-mobile {
    display: none;
  }
}

@media (max-width: 991.98px) {
  .input-search {
    min-width: 250px;
  }
}

</style>

