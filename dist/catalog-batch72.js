// Replace the outdated Rompe Muelas image with the supplied product photo.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH12 || []).find(
    (item) => item.id === "catalog-rompe-muelas"
  );
  if (!product) throw new Error("Missing catalog product: Rompe Muelas");

  const image = "assets/catalog/rompe-muelas.jpg";
  product.image = image;
  product.coverImages = [{ src: image, label: "Rompe Muelas" }];
})();
