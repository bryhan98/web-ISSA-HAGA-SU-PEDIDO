// Use the supplied package photo for the La Huerta tomato purée variant.
(() => {
  const family = (window.CATALOG_PRODUCTS_BATCH26 || []).find((item) => item.id === "catalog-pures-tomate-batch26");
  if (!family) throw new Error("Missing catalog family: Purés de Tomate");
  const variant = (family.variants || []).find((item) => item.code === "0480");
  if (!variant) throw new Error("Missing La Huerta tomato purée variant: 0480");

  const image = "assets/catalog/variants/pure-tomate-la-huerta-520g.png";
  variant.image = image;
  family.image = image;
  family.coverImages = (family.variants || []).filter((item) => item.image)
    .map((item) => ({ src: item.image, label: item.name }));
  window.CATALOG_PRODUCTS_BATCH47 = [];
})();
