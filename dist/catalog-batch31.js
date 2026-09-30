(() => {
  const batches = Array.from({ length: 30 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const product = batches.flat().find((entry) => entry.id === "catalog-bulldog-crazy");
  if (!product) throw new Error("Missing catalog product: catalog-bulldog-crazy");
  product.image = "assets/catalog/bulldog-crazy-chupetin.webp";
  window.CATALOG_PRODUCTS_BATCH31 = [];
})();
