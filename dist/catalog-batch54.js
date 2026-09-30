// Keep each Cereal Fort flavor on its own correct photo.
(() => {
  const products = Array.from({ length: 53 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const product = (id) => {
    const found = products.find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };
  const cereal = product("catalog-cereal-fort");
  const flavors = [
    ["0118", "assets/catalog/variants/cereal-fort-action.png"],
    ["0117", "assets/catalog/variants/cereal-fort-clasico.png"],
    ["278", "https://http2.mlstatic.com/D_NQ_NP_606955-MLA80363226126_112024-O.webp"],
    ["0120", "https://www.mink.com.ar/qloud/mym-dis/articulos/fotos/90372.jpg"],
    ["0122", "https://www.felfort.com.ar/media/catalog/product/d/i/dise_o_sin_t_tulo_46_.jpg?auto=webp&fit=cover&format=pjpg&height=1200&width=960"],
    ["0810", "https://http2.mlstatic.com/D_Q_NP_620952-MLU73345299851_122023-O.webp"],
    ["0431", "https://www.felfort.com.ar/media/catalog/product/d/i/dise_o_sin_t_tulo_66_.jpg?auto=webp&fit=cover&format=pjpg&height=800&width=640"]
  ];
  const variantsByCode = new Map(cereal.variants.map((variant) => [String(variant.code), variant]));
  cereal.variants = flavors.map(([code, image]) => {
    const variant = variantsByCode.get(code);
    if (!variant) throw new Error(`Missing Cereal Fort SKU ${code}`);
    variant.image = image;
    delete variant.imageCrop;
    return variant;
  });
  cereal.codes = flavors.map(([code]) => code);
  cereal.skuCount = cereal.variants.length;
  cereal.unit = `${cereal.skuCount} opciones disponibles`;
  cereal.coverImages = cereal.variants.map((variant) => ({
    src: variant.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH54 = [];
})();
