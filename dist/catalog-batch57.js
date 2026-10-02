// Keep Hamlet Surtido x21 in the family with its supplied box photo.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH7 || []).find((item) => item.id === "catalog-hamlet-chocolates");
  if (!product) throw new Error("Missing catalog family: Hamlet Chocolates");

  product.variants = product.variants || [];
  let surtido = product.variants.find((variant) => variant.code === "0335");
  if (!surtido) {
    surtido = { code: "0335" };
    const yoghurtIndex = product.variants.findIndex((variant) => variant.code === "96409");
    if (yoghurtIndex < 0) product.variants.push(surtido);
    else product.variants.splice(yoghurtIndex, 0, surtido);
  }
  surtido.name = "Surtido · caja x 21";
  surtido.price = 18480;
  surtido.presentation = "Caja x 21 unidades · 45 g c/u";
  surtido.image = "assets/catalog/variants/hamlet-surtido-caja-x21.jpg";
  delete surtido.imageCrop;
  product.codes = product.variants.map((variant) => variant.code);
  product.skuCount = product.variants.length;
  product.unit = `${product.skuCount} opciones disponibles`;
  product.coverImages = product.variants.map((variant) => ({
    src: variant.image || product.image,
    label: variant.name,
    imageCrop: variant.imageCrop
  }));

  window.CATALOG_PRODUCTS_BATCH57 = [];
})();
