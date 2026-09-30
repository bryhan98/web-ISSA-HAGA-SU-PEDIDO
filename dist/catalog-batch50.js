// Show all Trío Galletitas varieties in the catalog cover gallery.
(() => {
  const products = Array.from({ length: 49 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const trio = products.find((item) => item.id === "catalog-trio-galletitas");
  if (!trio) throw new Error("Missing catalog item: catalog-trio-galletitas");
  trio.coverImages = trio.variants.map((variant) => ({
    src: variant.image || `assets/catalog/variants/${variant.code}.webp`,
    label: variant.name
  }));
  window.CATALOG_PRODUCTS_BATCH50 = [];
})();
