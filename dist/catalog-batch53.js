// Use one bottle image for the single Pantene shampoo item in the supplier catalog.
(() => {
  const products = Array.from({ length: 52 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const shampoo = products.find((item) => item.code === "285" && item.name === "Shampoo Pantene");
  if (!shampoo) throw new Error("Missing Shampoo Pantene SKU 285");

  const image = "https://farma22.vtexassets.com/arquivos/ids/156840/PROD_82888020141216042930.jpg?v=635923549860500000";
  shampoo.image = image;
  shampoo.coverImages = [{ src: image, label: "Shampoo Pantene" }];

  window.CATALOG_PRODUCTS_BATCH53 = [];
})();
