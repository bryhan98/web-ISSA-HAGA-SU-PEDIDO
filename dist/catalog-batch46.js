// Remove the duplicate Turrón Nevares SKU, keeping the existing single-product card.
(() => {
  const duplicateId = "catalog-pdf-157";
  const products = window.CATALOG_PRODUCTS_BATCH26 || [];
  if (!products.some((item) => item.id === duplicateId)) {
    throw new Error(`Missing duplicate catalog item: ${duplicateId}`);
  }
  window.CATALOG_PRODUCTS_BATCH26 = products.filter((item) => item.id !== duplicateId);
  window.CATALOG_PRODUCTS_BATCH46 = [];
})();
