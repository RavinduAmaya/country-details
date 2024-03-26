<template>
  <div class="country-container">
    <v-row no-gutters class="country-container__rows">
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="2"
        xl="2"
        v-for="(country, index) in countriesList"
        :key="index"
        class="country-container__row-cols"
      >
        <NuxtLink :to="`country/${country.name}`" class="nuxt-link">
          <v-card class="flag-container">
            <div class="flag">
              <img :src="country.flag.medium" />
            </div>
            <h3 class="country-name">{{ country.name }}</h3>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" xl="2" class="country-container__row-cols">
        <button
          class="more-item-button"
          @click="loadContent"
          v-if="currentPage * maxPerPage < countriesCount"
        >
          <h3>See more</h3>
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CountryList",
  data: () => ({
    countries: [],
    currentPage: 1,
    maxPerPage: 10,
    countriesCount: null,
  }),
  async mounted() {
    await this.getCountries();
  },
  computed: {
    countriesList() {
      return Object.values(this.countries).slice(
        0,
        this.currentPage * this.maxPerPage
      );
    },
  },
  methods: {
    async getCountries() {
      try {
        this.countries = await $fetch("/api/country-list/countries");
        this.countriesCount = Object.values(this.countries).length;
      } catch (error) {
        console.log(error);
      }
    },
    loadContent() {
      this.currentPage = this.currentPage + 1;
    },
  },
};
</script>

<style>
.country-container {
  justify-content: center;
  display: flex;
}
.country-container__rows {
  justify-content: center;
}
.flag-container {
  display: grid;
  height: 150px;
  width: 200px;
  padding: 15px;
  align-items: center;
  justify-items: center;
  box-shadow: 5px 6px 7px 4px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.country-container__row-cols {
  justify-content: center;
  display: flex;
  margin: 15px;
  align-items: center;
}
.more-item-button {
  height: auto !important;
  cursor: pointer;
  color: #000;
  background-color: #ffffff;
  width: 175px;
  border-radius: 10px;
}
.nuxt-link {
  text-decoration: none;
}
.flag {
  display: flex;
  margin-top: 20px;
}
.country-name {
  text-align: center;
}
</style>
