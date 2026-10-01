// Replace the old Baggio catalog photos with the supplied flavor and size images.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH1 || []).find(
    (item) => item.id === "catalog-baggio-200"
  );
  if (!product) throw new Error("Missing catalog family: Baggio");

  const images = {
    "457": "assets/catalog/variants/baggio-naranja-200ml.png",
    "0062": "assets/catalog/variants/baggio-manzana-200ml.png",
    "0063": "assets/catalog/variants/baggio-multifruta-200ml.jpg",
    "0065": "assets/catalog/variants/baggio-chocolatada-200ml.png",
    "0060": "assets/catalog/variants/baggio-manzana-1l.png",
    "0064": "assets/catalog/variants/baggio-naranja-1l.jpg",
    "0374": "assets/catalog/variants/baggio-multifruta-1l.png"
  };

  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }

  product.image = images["457"];
  product.coverImages = (product.variants || [])
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
