// Use the supplied product photo for Raid Azul Insecticida Aerosol.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH26 || []).find((item) => item.id === "catalog-pdf-144");
  if (!product) throw new Error("Missing catalog item: Raid Azul Insecticida Aerosol");
  product.image = "assets/catalog/variants/raid-azul-144.png";
  product.coverImages = [{ src: product.image, label: product.name }];
  window.CATALOG_PRODUCTS_BATCH64 = [];
})();
