// Use the supplied product photo for Yerba Verdeflor Naranja.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH1 || []).find((item) => item.id === "catalog-yerba-verdeflor-manzanilla");
  if (!product) throw new Error("Missing catalog family: Yerba Verdeflor");

  const naranja = (product.variants || []).find((variant) => variant.code === "0745");
  if (!naranja) throw new Error("Missing Yerba Verdeflor Naranja variant");

  naranja.image = "assets/catalog/variants/yerba-verdeflor-naranja-500g.png";
  delete naranja.imageCrop;
  product.coverImages = (product.variants || []).map((variant) => ({
    src: variant.image || product.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH59 = [];
})();
