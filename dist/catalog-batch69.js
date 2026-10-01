// Match each Pastillas Mentitas Lacasa option to its supplied flavor photo.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH9 || []).find((item) => item.id === "catalog-pdf-mentitas-lacasa");
  if (!product) throw new Error("Missing catalog family: Pastillas Mentitas Lacasa");
  const photos = {
    "0408": "assets/catalog/variants/mentitas-lacasa-cherry-0408.png",
    "0412": "assets/catalog/variants/mentitas-lacasa-menta-0412.png",
    "0002": "assets/catalog/variants/mentitas-lacasa-sandia-0002.png",
    "0410": "assets/catalog/variants/mentitas-lacasa-frutal-0410.png",
    "0411": "assets/catalog/variants/mentitas-lacasa-dulce-leche-0411.png"
  };
  for (const variant of product.variants || []) {
    const image = photos[String(variant.code)];
    if (!image) continue;
    variant.image = image;
    delete variant.imageCrop;
  }
  product.coverImages = (product.variants || []).map((variant) => ({
    src: variant.image || product.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));
  window.CATALOG_PRODUCTS_BATCH69 = [];
})();
