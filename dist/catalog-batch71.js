// Apply the supplied photos to each Bulldog Cables flavor.
(() => {
  const cables = (window.CATALOG_PRODUCTS_BATCH2 || []).find(
    (item) => item.id === "catalog-bulldog-cables"
  );
  if (!cables) throw new Error("Missing catalog family: Bulldog Cables");

  const imageByCode = {
    "099": "assets/catalog/variants/bulldog-cables-sandia.jpg",
    "0265": "assets/catalog/variants/bulldog-cables-tutti-frutti.png",
    "0434": "assets/catalog/variants/bulldog-cables-frambuesa.png",
    "96407": "assets/catalog/variants/bulldog-cables-frutilla.png"
  };

  for (const variant of cables.variants || []) {
    const image = imageByCode[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
    if (String(variant.code) === "96407") variant.name = "Frutilla";
  }

  cables.image = imageByCode["099"];
  cables.coverImages = (cables.variants || []).map((variant) => ({
    src: variant.image || cables.image,
    label: variant.name
  }));

  window.CATALOG_PRODUCTS_BATCH71 = [];
})();
