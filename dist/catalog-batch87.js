(() => {
  const products = window.CATALOG_PRODUCTS_BATCH4 || [];
  const product = products.find((item) => item.id === "catalog-fachitas-galletitas");
  if (!product) throw new Error("Missing catalog product: catalog-fachitas-galletitas");

  const images = {
    "402": "assets/catalog/variants/fachitas-coronitas-frambuesa-402-20261001.jpg",
    "0521": "assets/catalog/variants/fachitas-chocolate-blanco-0521-20261001.png",
    "96395": "assets/catalog/variants/fachitas-vainilla-chocolate-96395-20261001.png",
    "0272": "assets/catalog/variants/fachitas-chocolate-dulce-leche-0272-20261001.png",
    "0583": "assets/catalog/variants/fachitas-marroc-0583-20261001.png",
  };
  product.variants.forEach((variant) => {
    const image = images[variant.code];
    if (image) variant.image = image;
  });
})();
