(function () {
  const products = [];
  for (let batch = 1; batch <= 97; batch += 1) {
    products.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const images = {
    "Crema Balance · 190 ml": "assets/catalog/variants/sedal-crema-balance-190ml-96385-20261002.png",
    "Ceramidas · 190 ml": "assets/catalog/variants/sedal-ceramidas-190ml-0201-20261002.png",
    "Restauración Instantánea · 190 ml": "assets/catalog/variants/sedal-restauracion-instantanea-190ml-0602-20261002.png",
    "Repuesto Ceramidas · 300 ml": "assets/catalog/variants/sedal-repuesto-ceramidas-300ml-0333-20261002.png",
  };

  products.filter((product) => product.id === "catalog-sedal-shampoo-familia").forEach((product) => {
    product.variants.forEach((variant) => {
      if (images[variant.name]) variant.image = images[variant.name];
    });
    product.image = product.variants[0].image;
    product.coverImages = product.variants.map((variant) => ({ src: variant.image, label: variant.name }));
  });
})();
