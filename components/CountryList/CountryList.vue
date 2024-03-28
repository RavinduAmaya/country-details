<template>
  <div class="country-list" data-cy="country-list">
    <v-row no-gutters class="country-list__container" data-cy="country-list__container">
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="2"
        xl="2"
        v-for="(country, index) in countriesList"
        :key="index"
        class="country-list__item"
        data-cy="country-list__item"
      >
        <NuxtLink
          :to="`country/${country.name}`"
          class="country-list__url-link"
          data-cy="country-list__url-link"
        >
          <v-card class="country-list__flag" data-cy="country-list__flag">
            <div class="country-list__flag-container" data-cy="country-list__flag-container">
              <img :src="country.flag.medium" />
            </div>
            <h3 class="country-list__country" data-cy="country-list__country">{{ country.name }}</h3>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" xl="2" class="country-list__item">
        <button
          data-cy="country-list__view-more-button"
          @click="loadContent"
          v-if="currentPage * maxPerPage < countries.length"
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
    currentPage: 1,
    maxPerPage: 10,
  }),
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
  computed: {
    countriesList() {
      return this.countries.slice(0, this.currentPage * this.maxPerPage);
    },
  },
  methods: {
    loadContent() {
      this.currentPage = this.currentPage + 1;
    },
  },
};
</script>

<style>
.country-list {
  justify-content: center;
  display: flex;
}
.country-list__container {
  justify-content: center;
}
.country-list__flag {
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
.country-list__item {
  justify-content: center;
  display: flex;
  margin: 15px;
  align-items: center;
}
.country-list__view-more-button {
  height: auto !important;
  cursor: pointer;
  color: #000;
  background-color: #ffffff;
  width: 175px;
  border-radius: 10px;
}
.country-list__url-link {
  text-decoration: none;
}
.country-list__flag-container {
  display: flex;
  margin-top: 20px;
}
.country-list__country {
  text-align: center;
}
</style>
