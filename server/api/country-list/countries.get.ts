export default defineEventHandler(async (event) => {
  const apiKey = process.env.COUNTRY_API_KEY;
  const url = process.env.API_URL;
  return $fetch(`${url}/api/all?apikey=${apiKey}`);
});
