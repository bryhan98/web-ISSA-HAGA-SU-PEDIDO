// Use the supplied package photo for the Mundial flavor only.
(() => {
  const product = [
    ...(window.CATALOG_PRODUCTS_BATCH3 || []),
    ...(window.CATALOG_PRODUCTS_BATCH38 || [])
  ].find((item) => item.id === "catalog-mr-pop-evolution");
  if (!product) throw new Error("Missing catalog family: Mr. Pop Evolution");

  const mundial = (product.variants || []).find((variant) => variant.code === "173");
  if (!mundial) throw new Error("Missing Mr. Pop Evolution Mundial flavor");
  mundial.image = "assets/catalog/variants/mr-pop-evolution-mundial.png";
  delete mundial.imageCrop;
  product.coverImages = (product.variants || [])
    .filter((variant) => variant.image)
    .map((variant) => ({ src: variant.image, label: variant.name, imageCrop: variant.imageCrop }));

  window.CATALOG_PRODUCTS_BATCH55 = [];
})();
