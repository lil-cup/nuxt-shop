export default defineEventHandler((e) => {
  const query = getQuery(e);

  console.log(query);

  return [{ id: 1 }];
});
