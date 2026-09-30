// Replace Gongys marshmallow and heart photos with the supplied package images.
(() => {
  const product = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };

  const marshmallows = product(6, "catalog-gongys-malvaviscos-frutilla");
  const variantImages = {
    "511": "assets/catalog/variants/gongys-clasico-28g.png",
    "0011": "assets/catalog/variants/gongys-frutilla-28g.png",
    "0559": "assets/catalog/variants/gongys-nubecitas-28g.png"
  };
  marshmallows.image = variantImages["511"];
  for (const variant of marshmallows.variants || []) {
    if (!(variant.code in variantImages)) continue;
    variant.image = variantImages[variant.code];
    delete variant.imageCrop;
  }
  marshmallows.coverImages = (marshmallows.variants || [])
    .filter((variant) => variant.code in variantImages)
    .map((variant) => ({ src: variant.image, label: variant.name }));

  const heart = product(6, "catalog-gongys-corazon");
  heart.image = "assets/catalog/variants/gongys-corazon-linea.png";
  heart.coverImages = [{ src: heart.image, label: "Gongys Corazón" }];

  window.CATALOG_PRODUCTS_BATCH39 = [];
})();
