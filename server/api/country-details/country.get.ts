export default defineEventHandler(async (event:any) => {
  const apiKey = process.env.COUNTRY_API_KEY;
  const country = getQuery(event).name;
  return await $fetch(`https://countryapi.io/api/name/${country}?apikey=${apiKey}`);
})
