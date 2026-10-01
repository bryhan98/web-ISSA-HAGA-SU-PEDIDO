// Replace the old Yummy x12 display photos with the supplied flavor images.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH21 || []).find(
    (item) => item.id === "catalog-yummy-gomitas-x12"
  );
  if (!product) throw new Error("Missing catalog family: Yummy Gomitas x 12");

  const images = {
    "96413": "assets/catalog/variants/yummy-x12-ositos-clasicos-20261001.jpg",
    "292": "assets/catalog/variants/yummy-x12-frutitas-20261001.png",
    "093": "assets/catalog/variants/yummy-x12-piecitos-20261001.jpg",
    "96426": "assets/catalog/variants/yummy-x12-moritas-20261001.png",
    "0586": "assets/catalog/variants/yummy-x12-dino-20261001.png",
    "0587": "assets/catalog/variants/yummy-x12-ositos-acidos-20261001.png",
    "0514": "assets/catalog/variants/yummy-x12-botellitas-20261001.png",
    "120001": "assets/catalog/variants/yummy-x12-animalitos-20261001.png",
    "0711": "assets/catalog/variants/yummy-x12-frutilla-crema-20261001.jpg",
    "084": "assets/catalog/variants/yummy-x12-pececitos-20261001.png",
    "379": "assets/catalog/variants/yummy-rollo-surtido-x12-20261001.png"
  };

  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }

  product.image = images["96413"];
  product.coverImages = (product.variants || [])
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
