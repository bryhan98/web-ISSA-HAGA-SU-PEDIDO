// Assign the supplied product photos to their matching variants and catalog covers.
(() => {
  const products = Array.from({ length: 51 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const product = (id) => {
    const found = products.find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };
  const setImage = (item, code, image) => {
    const variant = item.variants.find((entry) => String(entry.code) === String(code));
    if (!variant) throw new Error(`Missing SKU ${code} in ${item.id}`);
    variant.image = image;
  };
  const cereal = product("catalog-cereal-fort");
  setImage(cereal, "0117", "assets/catalog/variants/cereal-fort-clasico.png");
  setImage(cereal, "0118", "assets/catalog/variants/cereal-fort-action.png");
  cereal.coverImages = cereal.variants.map((variant) => ({ src: variant.image || cereal.image, label: variant.name }));

  const paseo = product("catalog-paseo-galletitas");
  setImage(paseo, "0455", "assets/catalog/variants/paseo-5-semillas.png");
  paseo.coverImages = paseo.variants.map((variant) => ({ src: variant.image || paseo.image, label: variant.name }));

  const beldent = product("catalog-beldent");
  setImage(beldent, "534", "assets/catalog/variants/beldent-frutilla.png");
  setImage(beldent, "0074", "assets/catalog/variants/beldent-menta.png");
  setImage(beldent, "0077", "assets/catalog/variants/beldent-tutti-frutti.png");
  setImage(beldent, "0072", "assets/catalog/variants/beldent-strong.png");
  beldent.image = "assets/catalog/variants/beldent-frutilla.png";
  beldent.coverImages = beldent.variants.map((variant) => ({ src: variant.image, label: variant.name }));
  window.CATALOG_PRODUCTS_BATCH52 = [];
})();
