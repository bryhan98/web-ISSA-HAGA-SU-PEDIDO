// Replace the old photos across the Solitas product line with the supplied images.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH8 || []).find(
    (item) => item.id === "catalog-pdf-0186"
  );
  if (!product) throw new Error("Missing catalog family: Galletitas Solitas");

  const images = {
    "0186": "assets/catalog/variants/solitas-frutilla-glaseadas-20261001.png",
    "0281": "assets/catalog/variants/solitas-colmenitas-miel-20261001.png",
    "96387": "assets/catalog/variants/solitas-chirolas-chips-20261001.png",
    "0367": "assets/catalog/variants/solitas-mini-alfajor-negro-20261001.png",
    "96404": "assets/catalog/variants/solitas-aritos-glaseados-20261001.png",
    "0687": "assets/catalog/variants/solitas-ekin-vainilla-20261001.png",
    "0504": "assets/catalog/variants/solitas-legendarias-20261001.png",
    "0172": "assets/catalog/variants/solitas-mini-alfajor-blanco-20261001.png",
    "0685": "assets/catalog/variants/solitas-pepas-membrillo-20261001.png",
    "0427": "assets/catalog/variants/solitas-ekin-chocolate-20261001.jpg",
    "0391": "assets/catalog/variants/solitas-surtidas-surtisol-20261001.png"
  };

  for (const variant of product.variants || []) {
    const image = images[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
    delete variant.crop;
  }

  product.image = images["0186"];
  product.coverImages = (product.variants || [])
    .filter((variant) => images[String(variant.code)])
    .map((variant) => ({ src: variant.image, label: variant.name }));
})();
