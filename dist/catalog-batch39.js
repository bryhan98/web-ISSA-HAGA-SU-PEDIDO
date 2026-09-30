// Replace Gongys marshmallow and heart photos with the supplied package images.
(() => {
  const product = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };

  const marshmallows = product(6, "catalog-gongys-malvaviscos-frutilla");
  const marshmallowImage = "assets/catalog/variants/gongys-malvaviscos-linea.png";
  const flavorCrops = { "511": 0, "0559": 1, "0011": 2 };
  marshmallows.image = marshmallowImage;
  for (const variant of marshmallows.variants || []) {
    if (!(variant.code in flavorCrops)) continue;
    variant.image = marshmallowImage;
    variant.imageCrop = { cols: 3, rows: 1, index: flavorCrops[variant.code] };
  }
  marshmallows.coverImages = (marshmallows.variants || [])
    .filter((variant) => variant.code in flavorCrops)
    .map((variant) => ({ src: variant.image, label: variant.name, imageCrop: variant.imageCrop }));

  const heart = product(6, "catalog-gongys-corazon");
  heart.image = "assets/catalog/variants/gongys-corazon-linea.png";
  heart.coverImages = [{ src: heart.image, label: "Gongys Corazón" }];

  window.CATALOG_PRODUCTS_BATCH39 = [];
})();
