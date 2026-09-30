// Use the supplied grape photo for Crazy Pop and show every Fierita gum on its cover.
(() => {
  const crazyPop = (window.CATALOG_PRODUCTS_BATCH3 || []).find((item) => item.id === "catalog-crazy-pop");
  if (!crazyPop) throw new Error("Missing catalog family: Crazy Pop Chupetines");
  const grape = (crazyPop.variants || []).find((variant) => variant.code === "211");
  if (!grape) throw new Error("Missing Crazy Pop Uva variant");
  grape.image = "assets/catalog/variants/crazy-pop-uva-211.png";
  delete grape.imageCrop;
  crazyPop.coverImages = (crazyPop.variants || []).map((variant) => ({
    src: variant.image || crazyPop.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  const fierita = (window.CATALOG_PRODUCTS_BATCH5 || []).find((item) => item.id === "catalog-fierita-chicles");
  if (!fierita) throw new Error("Missing catalog family: Fierita Chicles");
  const extra = (fierita.variants || []).find((variant) => variant.code === "419");
  if (!extra) throw new Error("Missing Fierita Frutilla x 50 variant");
  fierita.coverImages = [
    { src: "assets/catalog/fierita-chicles.webp", label: "8 sabores disponibles" },
    { src: extra.image || fierita.image, label: extra.name }
  ];

  window.CATALOG_PRODUCTS_BATCH60 = [];
})();
