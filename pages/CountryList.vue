<template>
  <div class="country-container">
    <v-row no-gutters class="country-container__rows">
      <v-col
        cols="2"
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
      <v-col cols="2" class="country-container__row-cols">
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
}
.country-container__row-cols {
  justify-content: center;
  display: flex;
  margin: 15px;
}
.more-item-button {
  height: auto !important;
  cursor: pointer;
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
