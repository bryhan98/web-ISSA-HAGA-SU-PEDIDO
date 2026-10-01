// Replace the old Naranju photo and show the assortment flavors in its card details.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH26 || []).find(
    (item) => item.id === "catalog-pdf-20325"
  );
  if (!product) throw new Error("Missing catalog product: Naranju Surtidos");

  const image = "assets/catalog/variants/naranju-surtido-20261001.jpg";
  product.image = image;
  product.coverImages = [{ src: image, label: product.name }];
  product.unit = "Caja x 60 unidades · Sabores: naranja, ananá, cola, frutilla, manzana y uva";
})();
