// Replace the old Gongys Stick photo with the supplied display image.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH7 || []).find(
    (item) => item.id === "catalog-gongys-stick"
  );
  if (!product) throw new Error("Missing catalog product: Gongys Stick");

  const image = "assets/catalog/variants/gongys-stick-20261001.png";
  product.image = image;
  product.coverImages = [{ src: image, label: product.name }];
})();
