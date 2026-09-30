// Keep each Billiken and Mr. Pop option aligned with its package photo.
(() => {
  const family = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog family: ${id}`);
    return found;
  };

  const billiken = family(2, "catalog-billiken-masticables");
  const billikenImage = "assets/catalog/billiken-masticables-linea.webp";
  billiken.image = billikenImage;
  const billikenCrops = { Frutales: 1, Yogur: 0 };
  for (const variant of billiken.variants || []) {
    if (!(variant.name in billikenCrops)) continue;
    variant.image = billikenImage;
    variant.imageCrop = { cols: 2, rows: 1, index: billikenCrops[variant.name] };
  }
  billiken.coverImages = (billiken.variants || [])
    .filter((variant) => variant.name in billikenCrops)
    .map((variant) => ({ src: variant.image, label: variant.name, imageCrop: variant.imageCrop }));

  const mrPop = family(3, "catalog-mr-pop-evolution");
  const mrPopPhotos = {
    "122": "assets/catalog/variants/mr-pop-evolution-blueberry.png",
    "301": "assets/catalog/variants/mr-pop-evolution-cereza.png"
  };
  for (const variant of mrPop.variants || []) {
    if (mrPopPhotos[variant.code]) {
      variant.image = mrPopPhotos[variant.code];
      delete variant.imageCrop;
    } else if (variant.code === "173") {
      variant.image = mrPop.image;
      delete variant.imageCrop;
    }
  }
  mrPop.coverImages = (mrPop.variants || [])
    .filter((variant) => variant.image)
    .map((variant) => ({ src: variant.image, label: variant.name, imageCrop: variant.imageCrop }));

  window.CATALOG_PRODUCTS_BATCH38 = [];
})();
