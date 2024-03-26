<template>
  <div class="home-page">
    <div class="home-page__title">Choose Your Country</div>
    <hr />
    <CountryList :countries="countries" />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.home-page__title {
  text-align: center;
  margin-top: 25px;
  font-size: 35px;
  font-weight: bold;
  color: grey;
}
</style>
