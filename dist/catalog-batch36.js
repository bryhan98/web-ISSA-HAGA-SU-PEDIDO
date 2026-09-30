// Updated package photos for the Dos Hermanos rice family.
(() => {
  const rice = (window.CATALOG_PRODUCTS_BATCH2 || []).find((item) => item.id === "catalog-arroz-dos-hermanos");
  if (!rice) throw new Error("Missing catalog family: catalog-arroz-dos-hermanos");

  const images = {
    "408": "assets/catalog/variants/arroz-dos-hermanos-largo-fino-500g.png",
    "96372": "assets/catalog/variants/arroz-dos-hermanos-largo-fino-1kg.png",
    "00562": "assets/catalog/variants/arroz-dos-hermanos-parboil-500g.png"
  };

  for (const variant of rice.variants || []) {
    const image = images[variant.code];
    if (!image) continue;
    variant.image = image;
  }

  rice.image = images["00562"];
  rice.coverImages = (rice.variants || [])
    .filter((variant) => variant.image)
    .map((variant) => ({ src: variant.image, label: variant.name }));

  window.CATALOG_PRODUCTS_BATCH36 = [];
})();
