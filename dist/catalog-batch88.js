(function () {
  const product = (window.CATALOG_PRODUCTS_BATCH2 || []).find((item) => item.id === "catalog-butter-toffees");
  if (!product) return;

  const imagesByCode = {
    "0101": "assets/catalog/variants/butter-toffees-blanco-0101.png",
    "0726": "assets/catalog/variants/butter-toffees-bon-o-bon-0726.png",
    "0298": "assets/catalog/variants/butter-toffees-cafe-0298.png",
    "519": "assets/catalog/variants/butter-toffees-chocolate-519.png",
    "0103": "assets/catalog/variants/butter-toffees-leche-0103.png",
    "96338": "assets/catalog/variants/butter-toffees-menta-96338.png",
    "96414": "assets/catalog/variants/butter-toffees-pistacho-96414.jpg",
  };

  product.variants.forEach((variant) => {
    const image = imagesByCode[variant.code];
    if (image) variant.image = image;
  });
  product.image = imagesByCode["0101"];
  product.coverImages = product.variants.map((variant) => ({
    src: variant.image,
    label: variant.name,
  }));
})();
