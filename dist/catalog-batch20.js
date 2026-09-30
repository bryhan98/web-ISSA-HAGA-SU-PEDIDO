// Adds ten available SKUs from the updated supplier PDF to their existing brand families.
(() => {
  const findProduct = (batchNumber, id) => {
    const batch = window[`CATALOG_PRODUCTS_BATCH${batchNumber}`] || [];
    const product = batch.find((item) => item.id === id);
    if (!product) throw new Error(`Missing catalog family: ${id}`);
    return product;
  };

  const addVariant = (product, variant) => {
    product.codes ||= [];
    product.variants ||= [];
    product.coverImages ||= product.variants
      .filter((item) => item.image)
      .map((item) => ({ src: item.image, label: item.name }));
    if (product.codes.includes(variant.code)) throw new Error(`Duplicate SKU: ${variant.code}`);
    product.codes.push(variant.code);
    product.variants.push(variant);
    product.coverImages.push({ src: variant.image, label: variant.name });
    product.skuCount = product.codes.length;
    product.unit = `${product.skuCount} opciones disponibles`;
  };

  window.CATALOG_PRODUCTS_BATCH20 = [{
    id: "catalog-sugus-masticables",
    code: "0519",
    codes: ["0519"],
    name: "Sugus Masticables",
    category: "Golosinas y chocolates",
    price: 7200,
    unit: "Bolsa 700 g",
    image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2183380_f.jpg",
    variants: [],
    catalog: true,
    skuCount: 1
  }];

  const paseo = findProduct(15, "catalog-paseo-galletitas");
  addVariant(paseo, { name: "Cracker", code: "0456", price: 1260, presentation: "Paquete 300 g · bulto x 14", image: "https://jumboargentina.vtexassets.com/arquivos/ids/445303/Galletitas-De-Agua-Paseo-Crackers-300-Gr-1-2877.jpg?v=636548682070430000" });

  const misky = findProduct(16, "catalog-misky-gusanitos");
  addVariant(misky, { name: "Gomitas Fantasía", code: "0301", price: 9900, presentation: "Bolsa 1 kg", image: "https://acdn-us.mitiendanube.com/stores/005/651/909/products/1-76f0d1d0223d7af0bf17394804554553-1024-1024.webp" });
  addVariant(misky, { name: "Gomitas Eucaliptus", code: "0302", price: 9900, presentation: "Bolsa 1 kg", image: "https://d3340tyzmtlo4u.cloudfront.net/users/864/images/detailed/16/Misky_Fantas%C3%ADa_Gomitas_Sabor_Eucalipto%2C_1_kg.jpg" });
  addVariant(misky, { name: "Gomitas Jelly Roll", code: "0300", price: 9900, presentation: "Bolsa 1 kg", image: "https://acdn-us.mitiendanube.com/stores/602/902/products/daniel-verdin-6-aa9fe01be0eaefaef017498288733696-1024-1024.webp" });

  const nikitos = findProduct(13, "catalog-nikitos");
  addVariant(nikitos, { name: "Chizitos de queso", code: "135", price: 620, presentation: "Bolsa 80 g · bulto x 30", image: "https://jumboargentina.vtexassets.com/arquivos/ids/533883/Maikitos-De-Queso-Nikitos-X-80grs-1-668273.jpg?v=636930984354170000" });
  addVariant(nikitos, { name: "Pochoclo acaramelado", code: "0390", price: 750, presentation: "Bolsa 80 g", image: "https://jumboargentina.vtexassets.com/arquivos/ids/533884/Pochoclos-Acaramelados-Nikitos-1-668279.jpg?v=636930984359470000" });

  const bomm = findProduct(16, "catalog-open-candy-bomm-lollipop");
  const oldBomm = { name: "Bomm Lollipop · frutilla y arándanos", code: bomm.code, price: bomm.price, presentation: bomm.unit, image: bomm.image };
  bomm.code = "";
  bomm.price = 0;
  bomm.unit = "2 opciones disponibles";
  bomm.name = "Open Candy Bomm";
  bomm.codes = [oldBomm.code];
  bomm.variants = [oldBomm];
  bomm.coverImages = [{ src: oldBomm.image, label: oldBomm.name }];
  addVariant(bomm, { name: "Bomm Candy", code: "96343", price: 7400, presentation: "Display x 20 unidades", image: "https://tiendawf.com/wp-content/uploads/2025/12/BOOM-CANDY.png" });

  const yummy = findProduct(16, "catalog-yummy-gomitas");
  addVariant(yummy, { name: "Botellitas x 12", code: "0514", price: 4990, presentation: "Display x 12 · 30 g c/u", image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/14108/35441/Billiken_Yummy_Gummy_Candy_Bottle-Shaped_Gummies_360_g_12.7_oz_box_of_12__38280.1756232134.jpg?c=2" });
  addVariant(yummy, { name: "Ojitos x 36", code: "186", price: 8600, presentation: "Display x 36 · 10 g c/u", image: "https://acdn-us.mitiendanube.com/stores/516/580/products/yummy-ojitos-e457132c3c23d546d617611484283412-1024-1024.webp" });
})();
