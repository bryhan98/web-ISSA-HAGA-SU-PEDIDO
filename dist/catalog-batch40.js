// Show every Guaymallén alfajor variety in the catalog cover gallery.
(() => {
  const family = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog family: ${id}`);
    return found;
  };

  const guaymallen = family(7, "catalog-guaymallen-alfajores");
  const lineupImage = "assets/catalog/guaymallen-alfajores.webp";
  const lineupCrops = { "0317": 0, "0313": 1, "0318": 2, "0315": 3, "0316": 4 };
  for (const variant of guaymallen.variants || []) {
    if (!(variant.code in lineupCrops)) continue;
    variant.image = lineupImage;
    variant.imageCrop = { cols: 3, rows: 2, index: lineupCrops[variant.code] };
  }
  guaymallen.coverImages = (guaymallen.variants || [])
    .map((variant) => ({
      src: variant.image || guaymallen.image,
      label: variant.name,
      imageCrop: variant.imageCrop
    }));

  window.CATALOG_PRODUCTS_BATCH40 = [];
})();
