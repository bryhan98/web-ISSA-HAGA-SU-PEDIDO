(function () {
  const allProducts = [];
  for (let batch = 1; batch <= 90; batch += 1) {
    allProducts.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const marrocBox = "assets/catalog/variants/felfort-marroc-caja-60-20261001.png";
  const marrocUnit = "assets/catalog/variants/felfort-marroc-unidad-20261001.png";
  const paraguitasBox = "assets/catalog/variants/felfort-paraguitas-caja-40-20261001.png";
  const paraguitasUnit = "assets/catalog/variants/felfort-paraguitas-unidad-20261001.png";

  allProducts.filter((product) => product.id === "catalog-felfort-marroc").forEach((product) => {
    product.image = marrocBox;
    product.variants.forEach((variant) => {
      if (variant.code === "0227") {
        variant.name = "Unidad fraccionada";
        variant.presentation = "Unidad 14 g";
        variant.image = marrocUnit;
      } else if (variant.code === "261") {
        variant.name = "Caja x 60";
        variant.presentation = "Caja x 60 unidades · 14 g c/u";
        variant.image = marrocBox;
      }
    });
    product.coverImages = product.variants.map((variant) => ({ src: variant.image, label: variant.name }));
  });

  allProducts.filter((product) => product.id === "catalog-felfort-paraguitas").forEach((product) => {
    product.image = paraguitasBox;
    product.unit = "Caja x 40 unidades · 13,5 g c/u";
    product.coverImages = [
      { src: paraguitasBox, label: "Caja x 40 unidades" },
      { src: paraguitasUnit, label: "Detalle de unidad" },
    ];
  });
})();
