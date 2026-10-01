(function () {
  const products = [];
  for (let batch = 1; batch <= 96; batch += 1) {
    products.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const image = "assets/catalog/variants/efficient-polvo-pedico-0654-20261002.png";
  products.filter((product) => product.id === "catalog-efficient-polvo-pedico").forEach((product) => {
    product.image = image;
    product.coverImages = [{ src: image, label: "Envase 100 g" }];
  });
})();
