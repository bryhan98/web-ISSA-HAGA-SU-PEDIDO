// Replace the Billiken and Fulbito turrón product photos with the supplied images.
(() => {
  const product = (id) => {
    const found = (window.CATALOG_PRODUCTS_BATCH26 || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };

  const billiken = product("catalog-pdf-0037");
  billiken.image = "assets/catalog/variants/turron-billiken-25g.png";
  billiken.coverImages = [{ src: billiken.image, label: billiken.name }];

  const fulbito = product("catalog-pdf-0567");
  fulbito.image = "assets/catalog/variants/turron-fulbito-25g.png";
  fulbito.coverImages = [{ src: fulbito.image, label: fulbito.name }];

  window.CATALOG_PRODUCTS_BATCH45 = [];
})();
