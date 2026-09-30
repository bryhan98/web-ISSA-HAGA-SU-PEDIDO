// Replace the generic breaded-food photo with the Manieri 500 g package.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH27 || []).find((item) => item.id === "catalog-pdf-0609");
  if (!product) throw new Error("Missing catalog item: Pan rallado Manieri");

  product.image = "assets/catalog/variants/pan-rallado-manieri-500g.png";
  product.coverImages = [{ src: product.image, label: "Pan rallado Manieri 500 g" }];

  window.CATALOG_PRODUCTS_BATCH37 = [];
})();
