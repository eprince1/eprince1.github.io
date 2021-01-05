window.onload = async function () {
  const keyList = await caches.keys();
  console.log(keyList);
};

function refresh() {
  window.location.reload();
}
