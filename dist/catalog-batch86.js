(() => {
  const products = window.CATALOG_PRODUCTS_BATCH3 || [];
  const product = products.find((item) => item.id === "catalog-copadas-galletitas");
  if (!product) throw new Error("Missing catalog product: catalog-copadas-galletitas");

  const images = {
    "417": "assets/catalog/variants/copadas-donitas-chocolate-blanco-417-20261001.png",
    "509": "assets/catalog/variants/copadas-galletitas-chips-509-20261001.png",
  };
  product.variants.forEach((variant) => {
    const image = images[variant.code];
    if (image) variant.image = image;
  });
})();
