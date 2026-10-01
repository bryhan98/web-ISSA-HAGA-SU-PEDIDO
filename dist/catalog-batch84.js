(() => {
  const products = window.CATALOG_PRODUCTS_BATCH1 || [];
  const replaceImage = (id, image) => {
    const product = products.find((item) => item.id === id);
    if (!product) throw new Error(`Missing catalog product: ${id}`);
    product.image = image;
    product.coverImages = [{ src: image, label: product.name }];
  };

  replaceImage("catalog-dove-jabon", "assets/catalog/variants/dove-jabon-90g-20261001.png");
  replaceImage("catalog-dove-desodorante", "assets/catalog/variants/dove-desodorante-aerosol-150ml-20261001.png");
})();
