// Apply supplied photos to Yerba Verdeflor Naranja and Rumba 108 g.
(() => {
  const verdeflor = (window.CATALOG_PRODUCTS_BATCH1 || []).find((item) => item.id === "catalog-yerba-verdeflor-manzanilla");
  if (!verdeflor) throw new Error("Missing catalog family: Yerba Verdeflor");

  const naranja = (verdeflor.variants || []).find((variant) => variant.code === "0745");
  if (!naranja) throw new Error("Missing Yerba Verdeflor Naranja variant");
  naranja.image = "assets/catalog/variants/yerba-verdeflor-naranja-500g.png";
  delete naranja.imageCrop;
  verdeflor.coverImages = (verdeflor.variants || []).map((variant) => ({
    src: variant.image || verdeflor.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  const rumba = (window.CATALOG_PRODUCTS_BATCH12 || []).find((item) => item.id === "catalog-rumba");
  if (!rumba) throw new Error("Missing catalog item: Rumba 108 g");
  rumba.image = "assets/catalog/variants/96379-rumba-108g.png";
  rumba.coverImages = [{ src: rumba.image, label: "Galletitas Rumba 108 g" }];

  window.CATALOG_PRODUCTS_BATCH59 = [];
})();
