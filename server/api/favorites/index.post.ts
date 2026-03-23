export default defineEventHandler(async (e) => {
  const body = await readBody<{ a: number }>(e);

  console.log(body);

  return [{ id: 1 }];
});
