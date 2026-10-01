// Replace the old Turimar cookie photos with the supplied product images.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH1 || []).find(
    (item) => item.id === "catalog-turimar"
  );
  if (!product) throw new Error("Missing catalog family: Turimar Galletitas");

  const images = {
    "213": "assets/catalog/variants/turimar-chips-150g-20261001.png",
    "095": "assets/catalog/variants/turimar-surtidas-170g-20261001.jpg"
  };
  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }

  product.image = images["213"];
  product.coverImages = (product.variants || [])
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
