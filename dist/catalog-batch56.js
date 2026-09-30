// Assign the supplied package photo to each matching Hamlet flavor.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH7 || []).find((item) => item.id === "catalog-hamlet-chocolates");
  if (!product) throw new Error("Missing catalog family: Hamlet Chocolates");

  const photos = {
    "0330": "assets/catalog/variants/hamlet-almendras-mani.png",
    "0331": "assets/catalog/variants/hamlet-bicolor.png",
    "96362": "assets/catalog/variants/hamlet-chocolatoso.png",
    "96409": "assets/catalog/variants/hamlet-frutilla.png"
  };
  for (const variant of product.variants || []) {
    if (!photos[variant.code]) continue;
    variant.image = photos[variant.code];
    delete variant.imageCrop;
  }
  product.coverImages = (product.variants || []).map((variant) => ({
    src: variant.image || product.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH56 = [];
})();
