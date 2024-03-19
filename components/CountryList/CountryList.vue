<template>
    country list
        <div style="justify-content: center; display: flex;">
            <v-row no-gutters align="center" justify="center" style="max-width:75vw;"> 
                <v-col cols="2" v-for="country in countries" :key="country" style="justify-content: center; display: flex; margin: 15px;">
                    <v-card class="card-container">
                        <img src="https://flagcdn.com/96x72/af.png"/>
                        <h3>Sri Lanka</h3>
                    </v-card>
                </v-col>
                <v-col cols="2" style="justify-content: center; display: flex; margin: 15px;">
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
  data:() => ({
    countries: ['1','2','3','4','5','6','7','8','9']
  }),
}
</script>

<style>

.card-container{
    display: grid;
    height: 150px;
    width: 200px;
    /* justify-content: center; */
    align-items: center;
    justify-items: center;
}

.more-item-card{
    border-radius: 50%;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
</style>