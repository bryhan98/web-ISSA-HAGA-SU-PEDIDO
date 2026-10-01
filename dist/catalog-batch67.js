// Use the supplied image for Caramelos Masticables Misky Ácidos.
(() => {
  const batches = Array.from({ length: 66 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const product = batches.flat().find((item) => item.id === "catalog-pdf-0397");
  if (!product) throw new Error("Missing catalog item: Caramelos Masticables Misky Ácidos");
  product.image = "assets/catalog/variants/misky-masticables-acidos-0397.png";
  product.coverImages = [{ src: product.image, label: product.name }];
  window.CATALOG_PRODUCTS_BATCH67 = [];
})();
