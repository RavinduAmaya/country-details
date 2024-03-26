export default defineEventHandler(async (event: any) => {
  const apiKey = process.env.COUNTRY_API_KEY;
  const country = getQuery(event).name;
  const url = process.env.API_URL;
  return await $fetch(`${url}/api/name/${country}?apikey=${apiKey}`);
});
