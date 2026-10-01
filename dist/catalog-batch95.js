(function () {
  const products = [];
  for (let batch = 1; batch <= 94; batch += 1) {
    products.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const image = "assets/catalog/variants/fuyi-insecticida-0820-20261002.png";
  products.filter((product) => product.id === "catalog-fuyi-insecticida").forEach((product) => {
    product.image = image;
    product.coverImages = [{ src: image, label: "Aerosol · 360 ml" }];
  });
})();
