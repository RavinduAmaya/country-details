<template>
  <div class="country-card">
    <v-card class="country-card__details">
      <v-row class="title">
        <v-col cols="12">
          <h1>{{ country.name }}</h1>
        </v-col>
        <v-col cols="12">
          <img :src="country.flag" alt="flag" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="country-details-container">
          <div>
            <span class="sub-title">Official Name :</span>
            <span class="sub-details">{{ country.officialName }}</span>
          </div>
          <div>
            <span class="sub-title">Calling Code:</span>
            <span class="sub-details">{{ country.callingCode }}</span>
          </div>
          <div>
            <span class="sub-title">Capital:</span>
            <span class="sub-details">{{ country.capital }}</span>
          </div>
          <div>
            <span class="sub-title">Region:</span>
            <span class="sub-details">{{ country.region }}</span>
          </div>
          <div>
            <span class="sub-title">Population:</span>
            <span class="sub-details">{{ country.population }}</span>
          </div>
          <div>
            <span class="sub-title">Area:</span>
            <span class="sub-details">{{ country.area }}</span>
          </div>
          <div>
            <div class="sub-title">Currencies</div>
            <div
              class="sub-details"
              v-for="currency in country.currencies"
              v-bind:key="currency.name"
            >
              <li>{{ currency.name }} ({{ currency.symbol }})</li>
            </div>
          </div>
          <div>
            <div class="sub-title">Languages</div>
            <div
              class="sub-details"
              v-for="language in country.languages"
              v-bind:key="language"
            >
              <li>{{ language }}</li>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="flag-container">
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
      console.log("process.env.COUNTRY_API_KEY", process.env.COUNTRY_API_KEY);
      console.log("this.countryName", this.$route.params.name);
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
.title {
  text-align: center;
}
.country-card {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
.sub-details {
  font-weight: bold;
  margin-left: 10px;
}
.country-card__details {
  width: 90vw;
  height: 75vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
.flag-container {
  justify-content: center;
  display: grid;
  align-items: center;
}
.country-details-container {
  line-height: 2;
  justify-content: center;
  display: grid;
}
</style>
