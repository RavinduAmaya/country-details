<template>
  <HomePage :countries="countries" />
</template>

<script>
export default {
  name: "Home",
  async setup() {
    try {
      const countries = Object.values(
        await $fetch("/api/country-list/countries")
      );
      return { countries };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
