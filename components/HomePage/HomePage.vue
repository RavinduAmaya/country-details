<template>
  <div class="home-page__title">Choose Your Country</div>
  <hr/>
  <CountryList />
</template>

<script>
import CountryList from "../../pages/CountryList.vue";

export default {
  components: { CountryList },
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
hr{
  width: 90%;
}
</style>
