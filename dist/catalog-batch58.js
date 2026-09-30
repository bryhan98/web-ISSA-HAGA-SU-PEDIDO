// Show Jorgito white, black, and conitos together in the catalog cover.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH1 || []).find((item) => item.id === "catalog-alfajor-jorgito");
  if (!product) throw new Error("Missing catalog family: Jorgito Alfajor");

  const photos = {
    "0355": "assets/catalog/variants/0355.webp",
    "0356": "assets/catalog/variants/0356.webp",
    "0085": "https://chitarroni.com.ar/images/product_image/599/0?fit=fill&h=630&w=1200"
  };
  for (const variant of product.variants || []) {
    if (photos[variant.code]) {
      variant.image = photos[variant.code];
      delete variant.imageCrop;
    }
  }
  product.coverImages = (product.variants || []).map((variant) => ({
    src: variant.image || product.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH58 = [];
})();
