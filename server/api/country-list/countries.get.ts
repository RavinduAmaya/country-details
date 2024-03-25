export default defineEventHandler(async (event) => {
  const apiKey = process.env.COUNTRY_API_KEY;
  return $fetch(`https://countryapi.io/api/all?apikey=${apiKey}`);
})