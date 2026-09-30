// Correct the Solitas assorted cookies package photo.
(() => {
  const product = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };

  const solitas = product(8, "catalog-pdf-0186");
  const surtidasImage = "assets/catalog/variants/solitas-surtidas-500g.png";
  solitas.image = surtidasImage;
  const variant = (solitas.variants || []).find((item) => item.code === "0391");
  if (!variant) throw new Error("Missing Solitas surtidas variant: 0391");
  variant.image = surtidasImage;
  delete variant.imageCrop;
  solitas.coverImages = (solitas.variants || [])
    .filter((item) => item.image)
    .map((item) => ({ src: item.image, label: item.name }));

  window.CATALOG_PRODUCTS_BATCH44 = [];
})();
