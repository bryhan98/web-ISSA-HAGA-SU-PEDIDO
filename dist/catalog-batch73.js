// Use the supplied pack photos for both Tosti options.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH1 || []).find(
    (item) => item.id === "catalog-tosti"
  );
  if (!product) throw new Error("Missing catalog family: Tosti");

  const images = {
    "453": "assets/catalog/variants/tosti-clasicas.png",
    "497": "assets/catalog/variants/tosti-arroz.png"
  };
  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }
  product.image = images["453"];
  product.coverImages = (product.variants || []).map((variant) => ({
    src: variant.image || product.image,
    label: variant.name
  }));
})();
