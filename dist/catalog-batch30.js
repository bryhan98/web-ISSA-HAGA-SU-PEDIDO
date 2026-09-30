(() => {
  const batches = Array.from({ length: 29 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const products = batches.flat();
  const updates = [
    ["catalog-billiken-rollo", "assets/catalog/billiken-rollo-frutal-2026.webp"],
    ["catalog-biyu-sorpresa", "assets/catalog/biyu-sorpresa-2026.webp"]
  ];
  for (const [id, image] of updates) {
    const product = products.find((entry) => entry.id === id);
    if (!product) throw new Error(`Missing catalog product: ${id}`);
    product.image = image;
  }
  window.CATALOG_PRODUCTS_BATCH30 = [];
})();
