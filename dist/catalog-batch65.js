// Turn the four Axe fragrance photos into selectable options under the PDF's assorted SKU.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH2 || []).find((item) => item.id === "catalog-axe-aerosol");
  if (!product) throw new Error("Missing catalog item: Axe Desodorante Aerosol");

  const aromas = [
    ["Leather & Cookies", "assets/catalog/variants/axe-aerosol-leather-cookies.webp"],
    ["Marine", "assets/catalog/variants/axe-aerosol-marine.webp"],
    ["Wild", "assets/catalog/variants/axe-aerosol-wild.webp"],
    ["Musk", "assets/catalog/variants/axe-aerosol-musk.webp"]
  ];
  product.variants = aromas.map(([name, image]) => ({
    name,
    code: "0617",
    price: 3620,
    presentation: "Aerosol 150 ml",
    image
  }));
  product.codes = ["0617"];
  product.skuCount = 1;
  product.unit = "Aerosol 150 ml";
  product.coverImages = product.variants.map((variant) => ({
    src: variant.image,
    label: variant.name
  }));

  window.CATALOG_PRODUCTS_BATCH65 = [];
})();
