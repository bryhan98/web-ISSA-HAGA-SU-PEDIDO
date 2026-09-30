// Repair the supplied Cereal Fort Lady photo and replace the broken Frutos Rojos image.
(() => {
  const batches = Array.from({ length: 60 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const cereal = batches.flat().find((item) => item.id === "catalog-cereal-fort");
  if (!cereal) throw new Error("Missing catalog family: Cereal Fort");
  const lady = (cereal.variants || []).find((variant) => variant.code === "0431");
  const berries = (cereal.variants || []).find((variant) => variant.code === "0122");
  if (!lady || !berries) throw new Error("Missing Cereal Fort Lady or Frutos Rojos variant");

  lady.image = "assets/catalog/variants/cereal-fort-lady-0431.png";
  delete lady.imageCrop;
  berries.image = "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/1019/26225/cereal-fort-frutos-rojos-display__79379.1697831182.jpg?c=2";
  delete berries.imageCrop;
  cereal.coverImages = cereal.variants.map((variant) => ({
    src: variant.image || cereal.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH62 = [];
})();
