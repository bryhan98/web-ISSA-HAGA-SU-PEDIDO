(() => {
  const batches = Array.from({ length: 33 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const product = batches.flat().find((entry) => entry.id === "catalog-misky-gomitas-dientes");
  if (!product) throw new Error("Missing catalog product: catalog-misky-gomitas-dientes");

  product.image = "assets/catalog/variants/misky-gomitas-dientes-500.webp";
  product.coverImages = [{ src: product.image, label: "Goma Dientes 500 g" }];
  window.CATALOG_PRODUCTS_BATCH34 = [];
})();
