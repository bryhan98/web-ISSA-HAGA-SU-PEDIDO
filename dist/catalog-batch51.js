// Replace the Bull Dog acidic pastilles photos with the supplied flavor images and fix Trio Biscotti.
(() => {
  const products = Array.from({ length: 50 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const product = (id) => {
    const found = products.find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };

  const pastilles = product("catalog-bulldog-pastillas");
  const imagesByCode = {
    "0092": "assets/catalog/variants/bulldog-pastillas-uva-mandarina.png",
    "0093": "assets/catalog/variants/bulldog-pastillas-sandia.png",
    "0091": "assets/catalog/variants/bulldog-pastillas-tutti-frutti.png",
    "0088": "assets/catalog/variants/bulldog-pastillas-tutti-limon.png",
    "0090": "assets/catalog/variants/bulldog-pastillas-sandia-manzana.png",
    "0096": "assets/catalog/variants/bulldog-pastillas-uva.png"
  };
  const missingCodes = Object.keys(imagesByCode).filter((code) => !pastilles.variants.some((variant) => String(variant.code) === code));
  if (missingCodes.length) throw new Error(`Missing Bull Dog acidic pastilles SKUs: ${missingCodes.join(", ")}`);

  for (const variant of pastilles.variants) {
    const image = imagesByCode[String(variant.code)];
    if (image) variant.image = image;
  }
  pastilles.codes = pastilles.variants.map((variant) => String(variant.code));
  pastilles.skuCount = pastilles.variants.length;
  pastilles.unit = `${pastilles.skuCount} opciones disponibles`;
  pastilles.image = imagesByCode["0092"];
  pastilles.coverImages = pastilles.variants.map((variant) => ({
    src: variant.image,
    label: variant.name
  }));

  const trio = product("catalog-trio-galletitas");
  const biscotti = trio.variants.find((variant) => String(variant.code) === "0189");
  if (!biscotti) throw new Error("Missing Trío Biscotti 300 g SKU 0189");
  biscotti.image = "assets/catalog/variants/trio-biscotti-300g.png";
  trio.coverImages = trio.variants.map((variant) => ({
    src: variant.image || `assets/catalog/variants/${variant.code}.webp`,
    label: variant.name
  }));

  window.CATALOG_PRODUCTS_BATCH51 = [];
})();
