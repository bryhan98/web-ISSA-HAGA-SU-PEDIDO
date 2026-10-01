(function () {
  const allProducts = [];
  for (let batch = 1; batch <= 91; batch += 1) {
    allProducts.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const updateImage = (id, image, unit) => {
    allProducts.filter((product) => product.id === id).forEach((product) => {
      product.image = image;
      if (unit) product.unit = unit;
    });
  };

  updateImage("catalog-dove-jabon", "assets/catalog/variants/dove-jabon-original-90g-20261002.png");
  updateImage("catalog-dove-desodorante", "assets/catalog/variants/dove-desodorante-original-87g-20261002.png");

  const purezaImages = {
    "138": "assets/catalog/variants/harina-canuelas-leudante-138-20261002.png",
    "0338": "assets/catalog/variants/harina-pureza-0000-0338-20261002.png",
    "0339": "assets/catalog/variants/harina-canuelas-pizza-levadura-0339-20261002.png",
  };
  allProducts.filter((product) => product.id === "catalog-pureza-harinas").forEach((product) => {
    product.variants.forEach((variant) => {
      if (purezaImages[variant.code]) variant.image = purezaImages[variant.code];
    });
    product.image = purezaImages["138"];
    product.coverImages = product.variants.map((variant) => ({ src: variant.image, label: variant.name }));
  });
  updateImage("catalog-canuelas-harina-000", "assets/catalog/variants/harina-canuelas-000-0336-20261002.png");

  const heartsBox = "assets/catalog/variants/felfort-dos-corazones-caja-20-20261002.png";
  const heartsUnit = "assets/catalog/variants/felfort-dos-corazones-unidad-20261002.png";
  allProducts.filter((product) => product.id === "catalog-felfort-dos-corazones").forEach((product) => {
    product.image = heartsBox;
    product.unit = "Caja x 20 unidades · 26 g c/u";
    product.coverImages = [
      { src: heartsBox, label: "Caja x 20 unidades" },
      { src: heartsUnit, label: "Unidad 26 g" },
    ];
  });

  const coinBox = "assets/catalog/variants/felfort-moneda-pirata-caja-60-20261002.png";
  const coinUnit = "assets/catalog/variants/felfort-moneda-pirata-unidad-20261002.png";
  allProducts.filter((product) => product.id === "catalog-felfort-moneda-pirata").forEach((product) => {
    product.image = coinBox;
    product.unit = "Caja x 60 unidades · 5 g c/u";
    product.coverImages = [
      { src: coinBox, label: "Caja x 60 unidades" },
      { src: coinUnit, label: "Unidad 5 g" },
    ];
  });
})();
