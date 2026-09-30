// Use the supplied package photos for Billiken masticables Yogur and Frutales.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH2 || []).find((item) => item.id === "catalog-billiken-masticables");
  if (!product) throw new Error("Missing catalog family: Billiken Caramelos Masticables");
  const photos = {
    "0081": "assets/catalog/variants/billiken-masticables-yogur-0081.png",
    "0079": "assets/catalog/variants/billiken-masticables-frutal-0079.png"
  };
  for (const variant of product.variants || []) {
    const image = photos[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
  }
  product.coverImages = (product.variants || []).map((variant) => ({
    src: variant.image || product.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH63 = [];
})();
