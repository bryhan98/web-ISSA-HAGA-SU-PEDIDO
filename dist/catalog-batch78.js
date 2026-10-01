// Replace the old Flics flavor photos with the supplied display images.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH6 || []).find(
    (item) => item.id === "catalog-flics-chicle-menta"
  );
  if (!product) throw new Error("Missing catalog family: Flics Chicles");

  const images = {
    "0327": "assets/catalog/variants/flics-menta-display-20261001.png",
    "156": "assets/catalog/variants/flics-tutti-frutti-display-20261001.png"
  };
  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }

  product.image = images["0327"];
  product.coverImages = (product.variants || [])
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
