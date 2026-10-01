(function () {
  const products = [];
  for (let batch = 1; batch <= 93; batch += 1) {
    products.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const openCandyImages = {
    "0105": "assets/catalog/variants/open-candy-emoji-tatuaje-0105-20261002.png",
    "0752": "assets/catalog/variants/open-candy-patita-tatuaje-0752-20261002.png",
    "0395": "assets/catalog/variants/open-candy-mini-gumball-0395-20261002.png",
    "0515": "assets/catalog/variants/open-candy-bomm-lollipop-0515-20261002.png",
    "96343": "assets/catalog/variants/open-candy-bomm-candy-96343-20261002.png",
    "434": "assets/catalog/variants/open-candy-estrellitas-0434-20261002.png",
    "0226": "assets/catalog/variants/open-candy-pinballs-0226-20261002.png",
  };
  products.filter((product) => product.id === "catalog-open-candy-golosinas").forEach((product) => {
    product.variants.forEach((variant) => {
      if (openCandyImages[variant.code]) variant.image = openCandyImages[variant.code];
    });
    product.image = openCandyImages["0105"];
    product.coverImages = product.variants.map((variant) => ({ src: variant.image, label: variant.name }));
  });

  const schoolImages = {
    "0593": "assets/catalog/variants/alfajor-escolar-blanco-0593-20261002.png",
    "96363": "assets/catalog/variants/alfajor-escolar-fruta-96363-20261002.png",
    "181": "assets/catalog/variants/alfajor-escolar-surtido-181-20261002.png",
  };
  products.filter((product) => product.id === "catalog-alfajor-escolar").forEach((product) => {
    product.variants.forEach((variant) => {
      if (schoolImages[variant.code]) variant.image = schoolImages[variant.code];
    });
    product.image = schoolImages["0593"];
    product.coverImages = product.variants.map((variant) => ({ src: variant.image, label: variant.name }));
  });
})();
