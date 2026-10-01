// Use the supplied image for TNT Chicle relleno x 40.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH2 || []).find((item) => item.id === "catalog-tnt-caramelos");
  if (!product) throw new Error("Missing catalog family: TNT Golosinas");
  const variant = (product.variants || []).find((item) => String(item.code) === "465");
  if (!variant) throw new Error("Missing TNT Chicle relleno x 40 variant");
  variant.image = "assets/catalog/variants/tnt-chicle-relleno-x40-465.png";
  delete variant.imageCrop;
  product.coverImages = (product.variants || []).map((item) => ({
    src: item.image || product.image,
    label: item.name,
    imageCrop: item.imageCrop
  }));
  window.CATALOG_PRODUCTS_BATCH68 = [];
})();
