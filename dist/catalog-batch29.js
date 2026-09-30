(() => {
  const batches = Array.from({ length: 28 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const product = batches.flat().find((entry) => entry.id === "catalog-billiken-masticables");
  if (!product) throw new Error("Missing catalog product: catalog-billiken-masticables");
  product.image = "assets/catalog/billiken-masticables-linea.webp";
  window.CATALOG_PRODUCTS_BATCH29 = [];
})();
\n