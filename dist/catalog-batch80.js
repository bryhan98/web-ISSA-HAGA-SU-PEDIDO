// Replace the old Gummi Zone photos with the supplied Doggie, Burger, and Pizza images.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH7 || []).find(
    (item) => item.id === "catalog-gummi-zone"
  );
  if (!product) throw new Error("Missing catalog family: Gummi Zone");

  const images = {
    "501": "assets/catalog/variants/gummi-zone-doggie-20261001.jpg",
    "500": "assets/catalog/variants/gummi-zone-burger-20261001.png",
    "493": "assets/catalog/variants/gummi-zone-pizza-20261001.png"
  };
  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (image) variant.image = image;
  }

  product.image = images["501"];
  product.coverImages = (product.variants || [])
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
