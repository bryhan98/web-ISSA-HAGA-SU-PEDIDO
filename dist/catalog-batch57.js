// Keep only the four Hamlet flavors with individual package photos.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH7 || []).find((item) => item.id === "catalog-hamlet-chocolates");
  if (!product) throw new Error("Missing catalog family: Hamlet Chocolates");

  product.variants = (product.variants || []).filter((variant) => variant.code !== "0335");
  product.codes = product.variants.map((variant) => variant.code);
  product.skuCount = product.variants.length;
  product.unit = `${product.skuCount} opciones disponibles`;
  product.coverImages = product.variants.map((variant) => ({
    src: variant.image || product.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH57 = [];
})();
