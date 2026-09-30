// Batch 26: 20 new supplier SKUs, grouped into their existing product families where appropriate.
(() => {
  const all = Array.from({ length: 25 }, (_, i) => window[`CATALOG_PRODUCTS_BATCH${i + 1}`] || []).flat();
  const family = (id) => {
    const found = all.find((item) => item.id === id);
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
    id: `catalog-pdf-${code}`, code, codes: [code], name, category, price, unit, image,
    variants: [], catalog: true, skuCount: 1, inStock,
    coverImages: [{ src: image, label: name }]
  });
  const variant = (name, code, price, presentation, image, inStock = true) => ({
    name, code, price, presentation, image, inStock
  });

  // Krachitos: keep the two new snack varieties together as a family.
  const krachitos = {
    id: "catalog-krachitos-snacks-batch26", code: "", codes: [], name: "Krachitos Snacks",
    category: "Cereales y galletitas", price: 0, unit: "2 opciones disponibles",
    image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/1468/25200/krachitos-bastoncitos-300g__11273.1690556291.jpg?c=2",
    variants: [], catalog: true, skuCount: 0, coverImages: []
  };
  addVariant(krachitos, variant("Bastoncitos extra queso 300 g", "150", 4800, "Bolsa 300 g", krachitos.image, false));
  addVariant(krachitos, variant("Papas corte americano 420 g", "0370", 9600, "Bolsa 420 g", "https://alpuntodeventa.com.ar/wp-content/uploads/3515-Papas-Fritas-Krachitos-Corte-Tradicional-x-420-grs-1200x1200-1-1.jpg"));

  addVariant(family("catalog-pdf-la-pinata-gomitas-700"), variant(
    "Huesos 700 g", "0304", 4990, "Bolsa 700 g", "https://cdn.pedix.app/sjH884Qhi4CgHaTLNnbF/products/1713556943913.png?size=800x800", false
  ));

  // Add stock-listed variants to the brand families already in the catalog.
  const pozo = family("catalog-pdf-0386");
  const pozoImage = pozo.image;
  pozo.name = "Budines Pozo";
  pozo.code = "";
  pozo.codes = ["0386"];
  pozo.price = 0;
  pozo.unit = "2 opciones disponibles";
  pozo.variants = [variant("Vainilla 170 g", "0386", 1080, "Budín 170 g", pozoImage, false)];
  pozo.coverImages = [{ src: pozoImage, label: "Vainilla 170 g" }];
  pozo.skuCount = 1;
  addVariant(pozo, variant(
    "Con frutas 170 g", "454", 1080, "Budín 170 g", "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/pozo-budin-170g-61800daa526f9.jpg", false
  ));
  addVariant(family("catalog-tang"), variant(
    "Ananá x 20", "0525", 7600, "Caja x 20 sobres", "https://mdlzargentina.vtexassets.com/arquivos/ids/156209-800-800?aspect=true&height=800&v=638518313507830000&width=800", false
  ));
  addVariant(family("catalog-tnt-caramelos"), variant(
    "Chicle relleno x 40", "465", 3100, "Caja x 40 unidades", "https://dcdn-us.mitiendanube.com/stores/001/602/042/products/69a917c4-dadd-484d-94ef-ccd90f671261-35df074ca53005982a17159568117903-1024-1024.webp", false
  ));
  addVariant(family("catalog-trio-galletitas"), variant(
    "Frolitas 300 g", "96422", 1280, "Paquete 300 g · caja x 12", "https://http2.mlstatic.com/D_NQ_NP_868896-MLA90430288894_082025-O.webp", false
  ));

  // New standalone products from the supplier PDF.
  const pantene = single("285", "Shampoo Pantene", "Cuidado personal", 7200, "Caja x 24 unidades · 200 ml c/u",
    "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/pantene-sh-200ml-6064a49236913.jpg");
  const mentaTang = family("catalog-tang");
  const tnt = family("catalog-tnt-caramelos");
  const toddy = single("325", "Cacao Toddy Original", "Almacén", 1580, "Paquete 180 g",
    "https://toledodigitalar.vtexassets.com/arquivos/ids/164969/6960.png?v=638796807438700000");
  const billikenTurron = single("0037", "Turrón Billiken", "Golosinas y chocolates", 10400, "Caja x 50 unidades",
    "https://d22fxaf9t8d39k.cloudfront.net/1e57406c9aac64ce6147ed67585356d42b7c725685b6f97e9d374ff358fbf2c581989.png", false);
  const fulbito = single("0567", "Turrón Fulbito", "Golosinas y chocolates", 6500, "Caja x 50 unidades · 25 g c/u",
    "https://http2.mlstatic.com/D_NQ_NP_962785-MLA99845095489_112025-O.webp", false);
  const nevares = single("157", "Turrón Nevares", "Golosinas y chocolates", 9800, "Caja x 50 unidades · 25 g c/u",
    "https://acdn-us.mitiendanube.com/stores/516/580/products/d_685076-mla40946373012_022020-o1-be9e360865b0ed8ff516452884187903-1024-1024.webp");
  const naranju = single("20325", "Naranjú Surtidos", "Jugos y bebidas", 6100, "Caja x 60 unidades", 
    "https://http2.mlstatic.com/D_Q_NP_706544-MLA97652200616_112025-O.webp", false);
  const rapsodia = single("0483", "Minitorta Rapsodia", "Alfajores", 11900, "Caja x 24 unidades · 80 g c/u", 
    "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/3690/9489/23647__67327.1650319551.jpg?c=3%3Fimbypass%3Don", false);
  const raid = single("144", "Raid Azul Insecticida Aerosol", "Limpieza y hogar", 5500, "Aerosol", 
    "https://f.fcdn.app/imgs/a9a538/eltunel.com.uy/tuneuy/300a/original/catalogo/80043524-80043524_1/1920-1200/raid-azul-mata-moscas-y-mosquitos-aerosol-222-grs-raid-azul-mata-moscas-y-mosquitos-aerosol.jpg", false);
  const ob = single("0501", "Tampones o.b. Original Super", "Cuidado personal", 3400, "Caja x 8 unidades",
    "https://soylola.com/37702-large_default/tampones-ob-super-8un.jpg", true);
  const tomate = {
    id: "catalog-pures-tomate-batch26", code: "", codes: [], name: "Purés de Tomate", category: "Almacén",
    price: 0, unit: "2 opciones disponibles", image: "https://http2.mlstatic.com/D_NQ_NP_646477-MLA93284519805_092025-O.webp",
    variants: [], catalog: true, skuCount: 0, coverImages: []
  };
  addVariant(tomate, variant("La Huerta 530 g · pack x 12", "0480", 9900, "Caja x 12 unidades · 530 g c/u", "https://www.arete.com.py/userfiles/images/productos/600/7790036567440.jpg", false));
  addVariant(tomate, variant("Noel 520 g · pack x 12", "499", 10800, "Caja x 12 unidades · 520 g c/u", "https://www.casa-segal.com/wp-content/uploads/2020/06/noel-pure-de-tomate.png", false));
  const doree = single("506", "Quitaesmalte Doreé", "Cuidado personal", 1240, "Frasco 65 ml", 
    "https://acdn-us.mitiendanube.com/stores/001/155/672/products/doree-quitaesmalte11-bf7ac48a810ea4416516192139288325-640-0.webp", false);
  const thermometer = single("0387", "Termómetro Digital", "Cuidado personal", 2300, "Unidad",
    "https://portuguese.medicalinfrared-thermometer.com/photo/pl27277683-term_metro_cl_nico_de_digitas_da_precis_o_alta_para_oral_retal_axilar.jpg");

  // Keep code references local for clarity while retaining the existing families above.
  void mentaTang; void tnt;
  window.CATALOG_PRODUCTS_BATCH26 = [krachitos, pantene, toddy, billikenTurron, fulbito, nevares, naranju, rapsodia, raid, ob, tomate, doree, thermometer];
})();
