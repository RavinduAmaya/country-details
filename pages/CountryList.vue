<template>
  <div class="country-container">
    <v-row no-gutters align="center" justify="center" style="max-width: 75vw">
      <v-col
        cols="2"
        v-for="country in countries"
        :key="country"
        class="cols-content"
      >
        <NuxtLink :to="`${country.name}`" class="nuxt-link">
          <v-card class="card-container">
            <img :src="country.flag.medium" />
            <h3>{{ country.name }}</h3>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="2" class="cols-content">
        <v-card class="more-item-card">
          <h3>See more</h3>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CountryList",
  data: () => ({
    countries: [],
  }),
  async mounted() {
    await this.getCountries();
  },
  methods: {
    async getCountries() {
      try {
        this.countries = await $fetch("/api/country-list/countries");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.country-container {
  justify-content: center;
  display: flex;
}

.card-container {
  display: grid;
  height: 150px;
  width: 200px;
  /* justify-content: center; */
  align-items: center;
  justify-items: center;
}

.cols-content {
  justify-content: center;
  display: flex;
  margin: 15px;
}
.more-item-card {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.nuxt-link {
  text-decoration: none;
}
</style>
