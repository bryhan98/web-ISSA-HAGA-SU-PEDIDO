(() => {
  const products = window.CATALOG_PRODUCTS_BATCH5 || [];
  const product = products.find((item) => item.id === "catalog-san-agustin-fideos");
  if (!product) throw new Error("Missing catalog product: catalog-san-agustin-fideos");

  const images = {
    "96342": "assets/catalog/variants/san-agustin-coditos-96342-20261001.png",
    "523": "assets/catalog/variants/san-agustin-dedalitos-523-20261001.png",
    "0307": "assets/catalog/variants/san-agustin-municiones-0307-20261001.png",
    "0558": "assets/catalog/variants/san-agustin-tirabuzon-0558-20261001.png",
  };
  product.variants.forEach((variant) => {
    const image = images[variant.code];
    if (image) variant.image = image;
  });
})();
