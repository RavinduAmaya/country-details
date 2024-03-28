<template>
  <div class="country-card" data-cy="country-card">
    <v-card class="country-card__container" data-cy="country-card__container">
      <v-row class="country-card__item">
        <v-col cols="12">
          <h1 data-cy="country-card__title">{{ country.name }}</h1>
        </v-col>
        <v-col cols="12">
          <img :src="country.flag" alt="flag" data-cy="country-card__flag" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="country-card__country-details" data-cy="country-card__country-details">
          <div>
            <span class="country-card__sub-title">Official Name :</span>
            <span class="country-card__sub-details">{{
              country.officialName
            }}</span>
          </div>
          <div>
            <span class="country-card__sub-title" data-cy=country-card__sub-title>Calling Code:</span>
            <span class="country-card__sub-details" data-cy=country-card__sub-details>{{
              country.callingCode
            }}</span>
          </div>
          <div>
            <span class="country-card__sub-title">Capital:</span>
            <span class="country-card__sub-details">{{ country.capital }}</span>
          </div>
          <div>
            <span class="country-card__sub-title">Region:</span>
            <span class="country-card__sub-details">{{ country.region }}</span>
          </div>
          <div>
            <span class="country-card__sub-title" data-cy=country-card__sub-title>Population:</span>
            <span class="country-card__sub-details" data-cy=country-card__sub-details>{{
              country.population
            }}</span>
          </div>
          <div>
            <span class="country-card__sub-title">Area:</span>
            <span class="country-card__sub-details">{{ country.area }}</span>
          </div>
          <div>
            <div class="country-card__sub-title">Currencies</div>
            <div
              class="country-card__sub-details"
              v-for="currency in country.currencies"
              v-bind:key="currency.name"
            >
              <li data-cy="country-card__currency">{{ currency.name }} ({{ currency.symbol }})</li>
            </div>
          </div>
          <div>
            <div class="country-card__sub-title">Languages</div>
            <div
              class="country-card__sub-details"
              v-for="language in country.languages"
              v-bind:key="language"
            >
              <li data-cy="country-card__language">{{ language }}</li>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="country-card__map-contaner" data-cy="country-card__map-contaner">
          <v-row>
            <Map
              v-if="country.latitude && country.longtitude"
              :latitude="country.latitude"
              :longtitude="country.longtitude"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CountryList",
  data: () => ({
    country: {
      name: null,
      officialName: null,
      callingCode: null,
      capital: null,
      region: null,
      population: null,
      latitude: null,
      longtitude: null,
      area: null,
      currencies: null,
      languages: null,
      flag: null,
    },
  }),
  mounted() {
    this.getCountry();
  },
  methods: {
    async getCountry() {
      try {
        const unwrappedCountry = await $fetch("/api/country-details/country", {
          params: {
            name: this.$route.params.name,
          },
        });
        const country = Object.values(unwrappedCountry)[0];
        if (country) {
          (this.country.name = country.name),
            (this.country.officialName = country.official_name),
            (this.country.callingCode = country.callingCode),
            (this.country.capital = country.capital),
            (this.country.region = country.region),
            (this.country.population = country.population),
            (this.country.latitude = country.latLng.country[0]),
            (this.country.longtitude = country.latLng.country[1]),
            (this.country.area = country.area),
            (this.country.currencies = country.currencies),
            (this.country.languages = country.languages),
            (this.country.flag = country.flag.large);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.country-card__item {
  text-align: center;
}
.country-card {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.country-card__sub-title {
  color: grey;
}
.country-card__sub-details {
  font-weight: bold;
  margin-left: 10px;
}
.country-card__container {
  width: 90vw;
  height: 75vh;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 0px 1px 25px 4px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
.country-card__map-contaner {
  justify-content: center;
  display: grid;
  align-items: center;
}
.country-card__country-details {
  line-height: 2;
  justify-content: center;
  display: grid;
}

@media screen and (max-width: 1500px) {
  .country-card {
    align-items: unset;
    height: auto;
  }
  .country-card__container {
    width: 50vw;
    height: auto;
    justify-content: center;
    align-items: center;
    display: unset;
  }
  .v-row {
    margin: 18px;
  }
}
</style>
