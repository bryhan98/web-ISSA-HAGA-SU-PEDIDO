// Replace the incorrect Misky chocolate images with the supplied package photos.
(() => {
  const family = (window.CATALOG_PRODUCTS_BATCH23 || []).find((item) => item.id === "catalog-misky-chocolates");
  if (!family) throw new Error("Missing catalog family: catalog-misky-chocolates");

  const images = {
    "253": "assets/catalog/variants/misky-chocolate-negro-25g.png",
    "469": "assets/catalog/variants/misky-chocolatin-blanco-8g.png"
  };
  for (const variant of family.variants || []) {
    if (images[variant.code]) variant.image = images[variant.code];
  }
  family.coverImages = (family.variants || [])
    .filter((variant) => variant.image)
    .map((variant) => ({ src: variant.image, label: variant.name }));

  window.CATALOG_PRODUCTS_BATCH43 = [];
})();
