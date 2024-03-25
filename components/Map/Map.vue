<template>
  <div class="map-container">
    <LMap ref="map" :zoom="zoom" :center="[latitude, longtitude]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LMarker :lat-lng="[latitude, longtitude]"></LMarker>
    </LMap>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Map",
  data: () => ({
    zoom: ref(2),
  }),
  props: {
    latitude: {
      type: Number,
      required: true,
    },
    longtitude: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.map-container {
  height: 45vh;
  width: 30vw;
}
</style>
