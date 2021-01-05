window.onload = async function () {
  console.log("HI");
  const keyList = await caches.keys();
  console.log(keyList);
};
