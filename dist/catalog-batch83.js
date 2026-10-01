// Replace the old Trío product photos with the supplied images for each variety.
(() => {
  const products = Array.from({ length: 82 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const product = products.find((item) => item.id === "catalog-trio-galletitas");
  if (!product) throw new Error("Missing catalog family: Trío Galletitas");

  const images = {
    "0015": "assets/catalog/variants/trio-besitos-clasicos-300g-20261001.png",
    "0189": "assets/catalog/variants/trio-biscotti-300g-20261001.jpg",
    "0984": "assets/catalog/variants/trio-glasy-300g-20261001.png",
    "96339": "assets/catalog/variants/trio-pepas-chips-300g-20261001.jpg",
    "0561": "assets/catalog/variants/trio-pepas-chica-200g-20261001.png",
    "0560": "assets/catalog/variants/trio-pepas-grande-500g-20261001.png",
    "252": "assets/catalog/variants/trio-pepas-mini-300g-20261001.png",
    "0651": "assets/catalog/variants/trio-variette-300g-20261001.png",
    "96315": "assets/catalog/variants/trio-linguini-300g-20261001.png",
    "96422": "assets/catalog/variants/trio-frolitas-300g-20261001.png"
  };

  const missingCodes = Object.keys(images).filter(
    (code) => !(product.variants || []).some((variant) => String(variant.code) === code)
  );
  if (missingCodes.length) throw new Error(`Missing Trío variants: ${missingCodes.join(", ")}`);

  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }

  product.image = images["0015"];
  product.coverImages = product.variants
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
