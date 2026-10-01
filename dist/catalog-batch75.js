// Replace the old photos for the supplied Yummy 500 g flavors.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH16 || []).find(
    (item) => item.id === "catalog-yummy-gomitas"
  );
  if (!product) throw new Error("Missing catalog family: Yummy Gomitas 500 g");

  const images = {
    "405": "assets/catalog/variants/yummy-frutilla-crema-500-20261001.png",
    "96353": "assets/catalog/variants/yummy-bananitas-500-20261001.png",
    "0787": "assets/catalog/variants/yummy-cien-pies-500-20261001.jpg",
    "96371": "assets/catalog/variants/yummy-sandia-500-20261001.png",
    "0264": "assets/catalog/variants/yummy-ositos-clasicos-500-20261001.png",
    "272": "assets/catalog/variants/yummy-moritas-500-20261001.png",
    "96410": "assets/catalog/variants/yummy-ositos-acidos-500-20261001.jpg",
    "96367": "assets/catalog/variants/yummy-dientes-500-20261001.png",
    "482": "assets/catalog/variants/yummy-huevos-fritos-500-20261001.jpg"
  };

  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }

  product.image = images["405"];
  product.coverImages = (product.variants || [])
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
