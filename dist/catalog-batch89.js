(function () {
  const product = (window.CATALOG_PRODUCTS_BATCH3 || []).find((item) => item.id === "catalog-lheritier-baby-doll");
  if (!product) return;

  product.image = "assets/catalog/lheritier-baby-doll-20261001.png";
  product.coverImages = [{ src: product.image, label: product.name }];
})();
