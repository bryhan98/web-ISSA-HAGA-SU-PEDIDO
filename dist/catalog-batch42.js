// Use the supplied package photos for the two Cofler macizo varieties.
(() => {
  const family = (window.CATALOG_PRODUCTS_BATCH23 || []).find((item) => item.id === "catalog-cofler-chocolates");
  if (!family) throw new Error("Missing catalog family: catalog-cofler-chocolates");

  const images = {
    "0197": "assets/catalog/variants/cofler-macizo-leche-55g.png",
    "0089": "assets/catalog/variants/cofler-macizo-frutilla-64g.png"
  };
  for (const variant of family.variants || []) {
    if (images[variant.code]) variant.image = images[variant.code];
  }
  family.coverImages = (family.variants || [])
    .filter((variant) => variant.image)
    .map((variant) => ({ src: variant.image, label: variant.name }));

  window.CATALOG_PRODUCTS_BATCH42 = [];
})();
