(() => {
  const batches = Array.from({ length: 31 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const product = batches.flat().find((entry) => entry.id === "catalog-bulldog-regaliz");
  if (!product) throw new Error("Missing catalog product: catalog-bulldog-regaliz");
  const imageByCode = {
    "96356": "assets/catalog/variants/bulldog-regaliz-96356.webp",
    "0275": "assets/catalog/variants/bulldog-regaliz-0275.webp",
    "0633": "assets/catalog/variants/bulldog-regaliz-0633.webp",
    "0540": "assets/catalog/variants/bulldog-regaliz-0540.webp",
    "0334": "assets/catalog/variants/bulldog-regaliz-0334.webp",
    "0095": "assets/catalog/variants/bulldog-regaliz-0095.webp"
  };
  for (const variant of product.variants) {
    if (imageByCode[variant.code]) {
      variant.image = imageByCode[variant.code];
      delete variant.imageCrop;
    }
  }
  const frutilla = product.variants.find((variant) => variant.code === "0034");
  if (frutilla) frutilla.name = "Frutilla 75 g";
  product.image = imageByCode["96356"];
  product.coverImages = product.variants.filter((variant) => variant.image).map((variant) => ({ src: variant.image, label: variant.name }));
  product.codes = product.variants.map((variant) => variant.code);
  product.skuCount = product.codes.length;
  product.unit = `${product.skuCount} opciones disponibles`;
  window.CATALOG_PRODUCTS_BATCH32 = [];
})();
