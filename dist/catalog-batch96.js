(function () {
  const products = [];
  for (let batch = 1; batch <= 95; batch += 1) {
    products.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const updates = {
    "catalog-solukit-bici-motos": {
      image: "assets/catalog/variants/solukit-bici-motos-01021-20261002.jpg",
      coverImages: [{ src: "assets/catalog/variants/solukit-bici-motos-01021-20261002.jpg", label: "Kit de reparación para bicicletas y motos" }],
    },
    "catalog-lince-palillero": {
      image: "assets/catalog/variants/palillero-lince-0740-20261002.png",
      coverImages: [{ src: "assets/catalog/variants/palillero-lince-0740-20261002.png", label: "Pack x 12 unidades · 50 palillos c/u" }],
    },
  };

  products.forEach((product) => {
    const update = updates[product.id];
    if (!update) return;
    product.image = update.image;
    product.coverImages = update.coverImages;
  });
})();
