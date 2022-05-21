const callMe = async () => {
  if (1) {
    return "hello sinan";
  }
};
const parent = async () => {
  return await callMe;
};

(async () => {
  const r = await parent();
  console.log(r);
})();
