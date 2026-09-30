// Correct product images for three chocolate variants.
(() => {
  const family = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog family: ${id}`);
    return found;
  };

  const setVariantImage = (target, code, image) => {
    const variant = (target.variants || []).find((item) => item.code === code);
    if (!variant) throw new Error(`Missing SKU ${code} in ${target.id}`);
    variant.image = image;
    target.coverImages = (target.variants || [])
      .filter((item) => item.image)
      .map((item) => ({ src: item.image, label: item.name }));
  };

  setVariantImage(
    family(23, "catalog-cofler-chocolates"),
    "0197",
    "https://elnenearg.vtexassets.com/arquivos/ids/162323-800-auto?aspect=true&height=auto&v=637971142706670000&width=800"
  );

  const misky = family(23, "catalog-misky-chocolates");
  setVariantImage(misky, "253", "https://dev.administranet.com.ar/catalogo/angelita/Articulo_Foto/foto1_103_0.jpeg");
  setVariantImage(misky, "469", "https://angelitagolosinas.com.ar/Articulo_Foto_Multi/91_0.jpeg");

  const fullMani = family(25, "catalog-pdf-0200");
  fullMani.image = "assets/catalog/variants/georgalos-full-mani-90.png";
  fullMani.coverImages = [{ src: fullMani.image, label: "Georgalos Full Maní 90 g" }];

  window.CATALOG_PRODUCTS_BATCH35 = [];
})();
