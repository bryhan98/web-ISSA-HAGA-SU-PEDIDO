// Restore the missing Clight Ananá SKU, correct Nevares' code, and use the supplied Ladysoft photo.
(() => {
  const products = Array.from({ length: 47 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const product = (id) => {
    const found = products.find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };

  const clight = product("catalog-clight-jugos");
  const ananaCode = "0157";
  if ((clight.variants || []).some((item) => item.code === ananaCode)) {
    throw new Error(`Duplicate Clight SKU: ${ananaCode}`);
  }
  const ananaImage = "https://mdlzargentina.vtexassets.com/arquivos/ids/156353/7622201702618_01.png?v=638983977992430000";
  clight.variants ||= [];
  clight.codes ||= [];
  clight.variants.push({
    name: "Ananá",
    code: ananaCode,
    price: 7900,
    presentation: "Display x 20 sobres",
    image: ananaImage,
    inStock: false
  });
  clight.codes.push(ananaCode);
  clight.skuCount = clight.codes.length;
  clight.unit = `${clight.skuCount} opciones disponibles`;
  clight.coverImages = clight.variants.filter((item) => item.image)
    .map((item) => ({ src: item.image, label: item.name }));

  const nevares = product("catalog-turron-nevares-25");
  nevares.code = "157";
  nevares.codes = ["157"];

  const ladysoft = product("catalog-ladysoft-con-alas");
  ladysoft.image = "assets/catalog/variants/ladysoft-con-alas-normal-8u.png";
  ladysoft.coverImages = [{ src: ladysoft.image, label: "Con alas · normal x 8" }];

  window.CATALOG_PRODUCTS_BATCH48 = [];
})();
