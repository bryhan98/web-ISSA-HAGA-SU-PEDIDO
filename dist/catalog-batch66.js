// Use the supplied product photos for Higienol Texturado and Preferred toilet paper.
(() => {
  const products = [
    ["catalog-pdf-226", "assets/catalog/variants/papel-higienico-higienol-texturado-226.png"],
    ["catalog-pdf-299", "assets/catalog/variants/papel-higienico-preferred-299.png"]
  ];
  const batches = Array.from({ length: 65 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  for (const [id, image] of products) {
    const product = batches.flat().find((item) => item.id === id);
    if (!product) throw new Error(`Missing catalog item: ${id}`);
    product.image = image;
    product.coverImages = [{ src: image, label: product.name }];
  }
  window.CATALOG_PRODUCTS_BATCH66 = [];
})();
