// Batch 25: 20 additional SKUs from the current supplier PDF.
(() => {
  const family = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog family: ${id}`);
    return found;
  };

  const addVariant = (target, variant) => {
    target.codes ||= [];
    target.variants ||= [];
    if (target.codes.includes(variant.code)) throw new Error(`Duplicate SKU: ${variant.code}`);
    target.coverImages ||= target.variants.filter((item) => item.image).map((item) => ({ src: item.image, label: item.name }));
    target.codes.push(variant.code);
    target.variants.push(variant);
    target.coverImages.push({ src: variant.image, label: variant.name });
    target.code = "";
    target.price = 0;
    target.skuCount = target.codes.length;
    target.unit = `${target.skuCount} opciones disponibles`;
  };

  const single = (code, name, category, price, unit, image, inStock = true) => ({
    id: `catalog-pdf-${code}`,
    code,
    codes: [code],
    name,
    category,
    price,
    unit,
    image,
    variants: [],
    catalog: true,
    skuCount: 1,
    inStock,
    coverImages: [{ src: image, label: name }]
  });

  // These paper brands stay as separate cards; Higienol Fresh is already listed.
  const preferred = single("299", "Papel Higiénico Preferred", "Limpieza y hogar", 12600,
    "Pack x 4 rollos · 30 m c/u · caja x 12",
    "https://d22fxaf9t8d39k.cloudfront.net/f08113c2cb260dba4d5788e380f1614a475c961600476e3a579676c603fa638c366195.webp");
  const higienolTexturado = single("226", "Papel Higiénico Higienol Texturado", "Limpieza y hogar", 15900,
    "Pack x 4 rollos · 30 m c/u",
    "https://s3.amazonaws.com/confort.c9/app/uploads/higienol-argentina/2024/02/12181720/higienol_texturado-1-1.png", false);

  // Extend existing brand families with their missing PDF variants.
  const sedalShampoo = family(19, "catalog-sedal-shampoo-familia");
  addVariant(sedalShampoo, {
    name: "Restauración Instantánea · repuesto 300 ml", code: "331", price: 2980,
    presentation: "Repuesto 300 ml · caja x 12",
    image: "https://elnenearg.vtexassets.com/arquivos/ids/169698/SHAMPOO-SEDAL-RESTAURACION-INSTANTANEA-X300ML-1-14474.jpg?v=638597865745600000",
    inStock: true
  });
  addVariant(sedalShampoo, {
    name: "Crema Balance · repuesto 300 ml", code: "332", price: 2980,
    presentation: "Repuesto 300 ml · caja x 12",
    image: "https://elnenearg.vtexassets.com/arquivos/ids/168333/SHAMPOO-SEDAL-CREMA-BALANCE-X-300-ML-1-13321.jpg?v=638368797713900000",
    inStock: true
  });
  addVariant(family(12, "catalog-sedal-acondicionador"), {
    name: "Repuesto surtido · 300 ml", code: "330", price: 2980,
    presentation: "Repuesto 300 ml · caja x 12",
    image: "https://soylola.com/39471-thickbox_default/acondsedal-restauracion-inst-dp-300cc.jpg",
    inStock: true
  });

  addVariant(family(8, "catalog-pdf-443"), {
    name: "Moño", code: "458", price: 1380,
    presentation: "Paquete 500 g · bulto x 20",
    image: "https://www.supermercadoacuario.com.ar/app/files/company_35/products/119475_whatsapp-image-2024-06-11-at-10.27.13-2.jpeg",
    inStock: false
  });
  addVariant(family(8, "catalog-pdf-0186"), {
    name: "Surtidas · Surtisol", code: "0391", price: 1790,
    presentation: "Paquete 500 g · caja x 8",
    image: "assets/catalog/variants/391.webp",
    inStock: true
  });

  const miskyChocolate = family(23, "catalog-misky-chocolates");
  addVariant(miskyChocolate, {
    name: "Chocolate Negro 25 g", code: "253", price: 810,
    presentation: "Tableta 25 g · display x 30",
    image: "assets/catalog/variants/0253.webp",
    inStock: false
  });
  addVariant(miskyChocolate, {
    name: "Chocolatín Blanco x 20 · 8 g", code: "469", price: 5800,
    presentation: "Display x 20 unidades de 8 g",
    image: "https://www.mixdecompras.com/7016-large_default/chocolate-misky-blanco-8-gr-x-20-unidades.jpg",
    inStock: false
  });

  addVariant(family(16, "catalog-misky-gusanitos"), {
    name: "Misky Roll Frutal", code: "6696", price: 4800,
    presentation: "Display x 12 unidades",
    image: "https://www.golosinaslosgringos.com.ar/tienda/front/img/fotoProductos/grande/307.png",
    inStock: false
  });
  addVariant(family(21, "catalog-yummy-gomitas-x12"), {
    name: "Piecitos ácidos x 12", code: "093", price: 4990,
    presentation: "Caja x 12 unidades",
    image: "https://acdn.mitiendanube.com/stores/313/507/products/pie-fcc7f4b8dd95f88a5917213345528568-640-0.jpg",
    inStock: true
  });

  // New cards, each with the image and price/presentation from the supplier list.
  const baggio = family(1, "catalog-baggio-200");
  addVariant(baggio, {
    name: "Multifruta · 1 L", code: "0374", price: 13900,
    presentation: "Caja x 8 · envase 1 L",
    image: "https://http2.mlstatic.com/D_NQ_NP_619220-MLA88738678658_082025-O.webp",
    inStock: false
  });
  const bagley = single("0523", "Galletitas Surtido Bagley", "Galletitas y panificados", 2440,
    "Paquete 400 g", "https://jumboargentina.vtexassets.com/arquivos/ids/814284-800-auto?aspect=true&height=auto&v=638452605695030000&width=800", false);
  const diversion = single("0524", "Galletitas Surtido Diversión", "Galletitas y panificados", 2260,
    "Paquete 400 g", "https://hiperlibertad.vtexassets.com/arquivos/ids/225171/GALLETITAS-SURTIDO-DIVERSI-N-EN-BOLSA-400-G-1-56517.jpg?v=638514058948930000", false);
  const fullMani = single("0200", "Georgalos Full Maní", "Golosinas y chocolates", 1788,
    "Barra 90 g · caja x 60", "https://ferniplastar.vtexassets.com/arquivos/ids/6185830/Chocolate-Full-Mani--90G.jpg?v=639096200705300000", false);
  const nevares = single("0463", "Bocadito Nevares Dulce de Leche", "Golosinas y chocolates", 3400,
    "Display x 15 unidades · 23 g c/u", "https://angelitagolosinas.com.ar/Articulo_Foto_Multi/7087_0.jpeg", false);
  const gauze = single("0187", "Gasas estériles", "Cuidado personal", 2300,
    "Caja x 10 sobres", "https://static.wixstatic.com/media/4f5887_71ba6b3e763b401e8d494b9046ce289b~mv2.webp/v1/fit/w_500%2Ch_500%2Cq_90/file.webp", false);
  const mielMenta = single("0414", "Caramelos Arcor Miel y Menta", "Golosinas y chocolates", 4940,
    "Bolsa 335 g", "https://dulcilandia.com.ar/par/wp-content/uploads/sites/4/2020/05/00906903.png");
  const tokke = {
    id: "catalog-tokke-chocolates",
    code: "",
    codes: [],
    name: "Chocolates Tokke",
    category: "Golosinas y chocolates",
    price: 0,
    unit: "2 opciones disponibles",
    image: "https://jumboargentina.vtexassets.com/arquivos/ids/635383/Tokke-Chocolate-Con-Leche-60-Grs-1-865702.jpg?v=637534056274870000",
    variants: [],
    catalog: true,
    skuCount: 0,
    coverImages: []
  };
  addVariant(tokke, { name: "Chocolate con leche 60 g", code: "6400", price: 1899, presentation: "Tableta 60 g · caja x 24", image: "https://jumboargentina.vtexassets.com/arquivos/ids/635383/Tokke-Chocolate-Con-Leche-60-Grs-1-865702.jpg?v=637534056274870000", inStock: false });
  addVariant(tokke, { name: "Chocolate con leche y maní 62 g", code: "0039", price: 1899, presentation: "Tableta 62 g · caja x 24", image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/2068/5185/v8ur0z42__39621.1653447207.jpg?c=2", inStock: false });

  window.CATALOG_PRODUCTS_BATCH25 = [preferred, higienolTexturado, bagley, diversion, fullMani, nevares, gauze, mielMenta, tokke];
})();
