(() => {
  const batches = Array.from({ length: 32 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const product = batches.flat().find((entry) => entry.id === "catalog-lheritier-pelotitas");
  if (!product) throw new Error("Missing catalog product: catalog-lheritier-pelotitas");

  const imageByName = {
    "Pelotitas surtidas": "assets/catalog/variants/lheritier-pelotitas-surtidas.webp",
    "Pelotitas Dulce de Leche": "assets/catalog/variants/lheritier-pelotitas-dulce-leche.webp"
  };
  for (const variant of product.variants || []) {
    if (imageByName[variant.name]) {
      variant.image = imageByName[variant.name];
      delete variant.imageCrop;
    }
  }

  product.image = imageByName["Pelotitas surtidas"];
  product.coverImages = product.variants
    .filter((variant) => variant.image)
    .map((variant) => ({ src: variant.image, label: variant.name }));
  window.CATALOG_PRODUCTS_BATCH33 = [];
})();
