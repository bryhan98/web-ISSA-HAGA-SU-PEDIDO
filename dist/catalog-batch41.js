// Show all five Hamlet chocolate varieties in the catalog cover gallery.
(() => {
  const found = (window.CATALOG_PRODUCTS_BATCH7 || []).find((item) => item.id === "catalog-hamlet-chocolates");
  if (!found) throw new Error("Missing catalog family: catalog-hamlet-chocolates");

  const lineupImage = "assets/catalog/hamlet-chocolates.webp";
  const lineupCrops = { "0330": 0, "0331": 1, "96362": 2, "0335": 3 };
  for (const variant of found.variants || []) {
    if (!(variant.code in lineupCrops)) continue;
    variant.image = lineupImage;
    variant.imageCrop = { cols: 2, rows: 2, index: lineupCrops[variant.code] };
  }
  found.coverImages = (found.variants || []).map((variant) => ({
    src: variant.image || found.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH41 = [];
})();
