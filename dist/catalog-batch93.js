(function () {
  const allProducts = [];
  for (let batch = 1; batch <= 92; batch += 1) {
    allProducts.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const updates = {
    "catalog-la-quesera-40": {
      image: "assets/catalog/variants/queso-rallado-la-quesera-0482-20261002.png",
      coverImages: [{ src: "assets/catalog/variants/queso-rallado-la-quesera-0482-20261002.png", label: "Pack x 20 sobres de 40 g" }],
    },
    "catalog-escudo-180": {
      image: "assets/catalog/variants/repelente-escudo-180ml-0549-20261002.png",
      coverImages: [{ src: "assets/catalog/variants/repelente-escudo-180ml-0549-20261002.png", label: "Aerosol · 180 ml" }],
    },
    "catalog-curitas": {
      image: "assets/catalog/variants/curitas-adhesivas-245-20261002.png",
    },
    "catalog-hisopos-dermogreen": {
      image: "assets/catalog/variants/hisopos-dermogreen-0214-20261002.png",
    },
  };

  allProducts.forEach((product) => {
    const update = updates[product.id];
    if (!update) return;
    product.image = update.image;
    if (update.coverImages) product.coverImages = update.coverImages;
  });
})();
