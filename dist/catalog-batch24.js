// Batch 24: 20 additional SKUs from the supplier PDF (all marked SIN STOCK).
(() => {
  const family = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog family: ${id}`);
    return found;
  };

  const makeVariant = (item, presentation = item.unit) => ({
    name: item.name,
    code: item.code,
    price: item.price,
    presentation,
    image: item.image,
    inStock: false
  });

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

  const convertSingleToFamily = (target, familyName, variantName, presentation) => {
    const current = makeVariant({ ...target, name: variantName }, presentation);
    target.name = familyName;
    target.code = "";
    target.codes = [current.code];
    target.price = 0;
    target.variants = [current];
    target.coverImages = [{ src: current.image, label: current.name }];
    target.skuCount = 1;
    target.unit = "1 opción disponible";
    return target;
  };

  const single = (code, name, category, price, unit, image) => ({
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
    inStock: false
  });

  // 1) Ala detergent 750 ml.
  const alaImage = "https://masonlineprod.vtexassets.com/arquivos/ids/215598-800-auto?aspect=true&height=auto&v=637854073987730000&width=800";
  const ala = single("96351", "Detergente Ala Colágeno", "Limpieza y hogar", 2790, "Botella 750 ml · bulto x 15", alaImage);

  // 2) Bombuchas.
  const bombuchaImage = "https://acdn-us.mitiendanube.com/stores/004/290/379/products/d_nq_np_2x_921721-mla74331313079_012024-f-76f04a7fcae40fdd9e17333657031907-1024-1024.webp";
  const bombuchas = single("0551", "Bombuchas Original", "Limpieza y hogar", 1440, "Bolsa x 100 unidades", bombuchaImage);

  // 3) Add the missing Fierita strawberry-filled gum to the existing brand family.
  addVariant(family(5, "catalog-fierita-chicles"), {
    name: "Chicle relleno Frutilla x 50",
    code: "419",
    price: 3200,
    presentation: "Display x 50 unidades",
    image: "https://oepqhdjuujfdlpjjktbs.supabase.co/storage/v1/render/image/public/productos/000f988d-6903-4beb-ab45-1eba5bcc1c3d.webp?height=1200&quality=90&resize=contain&v=1777723161129&width=1200",
    inStock: false
  });

  // 4) Group the classic Fierita gummies with the existing yogurt gummies.
  const fieritaGummies = convertSingleToFamily(family(6, "catalog-fierita-goma-yogur"), "Fierita Gomitas", "Yogur", "Bolsa 500 g");
  addVariant(fieritaGummies, {
    name: "Clásicas",
    code: "0759",
    price: 3300,
    presentation: "Bolsa 500 g",
    image: "https://static.wixstatic.com/media/ddc623_6eb03cacaa9f43149f6a7d5d9a74d292~mv2.png/v1/fill/w_1000%2Ch_1000%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/ddc623_6eb03cacaa9f43149f6a7d5d9a74d292~mv2.png",
    inStock: false
  });

  // 5) Add Flics Tutti to the existing Flics family.
  const flics = convertSingleToFamily(family(6, "catalog-flics-chicle-menta"), "Flics Chicles", "Menta", "Display x 12 unidades");
  addVariant(flics, {
    name: "Tutti frutti x 12",
    code: "156",
    price: 7900,
    presentation: "Display x 12 unidades",
    image: "https://www.mink.com.ar/qloud/mym-dis/articulos/fotos/90278.jpg",
    inStock: false
  });

  // 6) Guaymallén fruit alfajores join the existing family.
  addVariant(family(7, "catalog-guaymallen-alfajores"), {
    name: "Fruta x 40",
    code: "96406",
    price: 11700,
    presentation: "Caja x 40 unidades · 38 g c/u",
    image: "https://acdn-us.mitiendanube.com/stores/006/038/294/products/bulto-45-8b9bdba69ed77e9f5117689317324897-1024-1024.webp",
    inStock: false
  });

  // 7) Add the 9 x 64 g pack to Mantecol's format family.
  addVariant(family(9, "catalog-pdf-mantecol-formatos"), {
    name: "Display x 9 · 64 g",
    code: "432",
    price: 11430,
    presentation: "Caja x 9 unidades de 64 g",
    image: "https://acdn-us.mitiendanube.com/stores/516/580/products/mantecol-64-ffc5627f83ea7b643b17665822885704-1024-1024.webp",
    inStock: false
  });

  // 8) Arcor fruit masticables.
  const arcorFruitImage = "https://jumboargentina.vtexassets.com/arquivos/ids/583002/Caramelos-Arcor-Masticables-800-Gr-1-19870.jpg?v=637234676369770000";
  const arcorFruit = single("96365", "Caramelos Arcor Masticables Frutales", "Golosinas y chocolates", 9800, "Bolsa 800 g", arcorFruitImage);

  // 9–10) Natura mayonnaise formats grouped in one family.
  const natura = {
    id: "catalog-natura-mayonesa",
    code: "",
    codes: [],
    name: "Mayonesa Natura",
    category: "Almacén",
    price: 0,
    unit: "2 opciones disponibles",
    image: "https://ardiaprod.vtexassets.com/arquivos/ids/341161/Mayonesa-Natura-250-Ml-_1.jpg?v=638708902444870000",
    variants: [],
    catalog: true,
    skuCount: 0,
    coverImages: []
  };
  addVariant(natura, {
    name: "Doy pack 250 ml",
    code: "89031",
    price: 17900,
    presentation: "Caja x 12 · 250 ml c/u",
    image: "https://ardiaprod.vtexassets.com/arquivos/ids/341161/Mayonesa-Natura-250-Ml-_1.jpg?v=638708902444870000",
    inStock: false
  });
  addVariant(natura, {
    name: "Doy pack 125 ml",
    code: "0631",
    price: 12300,
    presentation: "Caja x 20 · 125 ml c/u",
    image: "https://jumboargentina.vtexassets.com/arquivos/ids/887421/Mayonesa-Natura-Sobre-125-Cc-1-140615.jpg?v=638967549727170000",
    inStock: false
  });

  // 11–12) Add fruit and dulce de leche to the Lacasa Mentitas family.
  const mentitas = family(9, "catalog-pdf-mentitas-lacasa");
  addVariant(mentitas, {
    name: "Frutal",
    code: "0410",
    price: 4200,
    presentation: "Display x 12 cajitas",
    image: "https://f.fcdn.app/imgs/9ebbe2/suchinasa.com/suchuy/6d70/original/catalogo/5999_991_1/2000-2000/mentitas-lacasa-23grs-x12-unidades-frutal.jpg",
    inStock: false
  });
  addVariant(mentitas, {
    name: "Dulce de leche",
    code: "0411",
    price: 4200,
    presentation: "Display x 12 cajitas",
    image: "https://www.angelitagolosinas.com.ar/grupo/free-gluten/Articulo_Foto_Multi/8184_0.jpeg",
    inStock: false
  });

  // 13) Add the 25 g Misky white chocolate to the existing chocolate family.
  addVariant(family(23, "catalog-misky-chocolates"), {
    name: "Chocolate Blanco 25 g",
    code: "0203",
    price: 810,
    presentation: "Tableta 25 g · display x 30",
    image: "https://distribuidoramilenium.com.ar/images/24512.jpg",
    inStock: false
  });

  // 14) Nucita Bicolor.
  const nucitaImage = "https://www.campestredistribuidora.com.br/assets/images/product/6423c8c694ebc1680066758.jpg";
  const nucita = single("160", "Nucita Bicolor", "Golosinas y chocolates", 5600, "Display x 48 unidades", nucitaImage);

  // 15) Cofler Block alfajores (separate family from Cofler chocolate bars).
  const coflAlfImage = "https://theargentinianmarket.com.au/cdn/shop/files/alfajorblockx3-04_eba19969-55db-404d-95e9-47b7c3a2f757.png?v=1697023908";
  const coflAlf = single("00321", "Alfajor Cofler Block Clásico x 3", "Alfajores", 1480, "Pack x 3 unidades", coflAlfImage);

  // 16) Convert the existing Fantoche fruit pan dulce into a family, then add chips.
  const fantoche = convertSingleToFamily(family(22, "catalog-fantoche-pan-dulce-frutas"), "Pan Dulce Fantoche", "Con frutas", "Paquete 400 g · bulto x 8");
  addVariant(fantoche, {
    name: "Con chips de chocolate",
    code: "0510",
    price: 3900,
    presentation: "Paquete 400 g · bulto x 8",
    image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/9494/26255/fantoche-pan-dulce-con-chips-chocolate__11242.1698266163.jpg?c=2",
    inStock: false
  });

  // 17) Pozo vanilla budín.
  const pozoVanillaImage = "https://elnenearg.vtexassets.com/arquivos/ids/156966/BUDIN-POZO-VAINILLA-X170GR-1-2644.jpg?v=637943925850600000";
  const pozo = single("0386", "Budín Pozo Vainilla", "Cereales y galletitas", 890, "Paquete 170 g · caja x 20", pozoVanillaImage);

  // 18) Pantene conditioner.
  const panteneImage = "https://jumboargentina.vtexassets.com/arquivos/ids/602067/Acondicionador-Pantene-Pro-v-Hidrataci-n-200ml-1-45368.jpg?v=637353042808430000";
  const pantene = single("0190", "Acondicionador Pantene", "Cuidado personal", 7200, "Caja x 24 unidades", panteneImage);

  // 19) Add 40 g Rocklets to the existing formats family.
  addVariant(family(11, "catalog-rocklets"), {
    name: "40 g · caja x 18",
    code: "0485",
    price: 27200,
    presentation: "Caja x 18 unidades de 40 g",
    image: "https://http2.mlstatic.com/D_Q_NP_695208-MLA99896167987_112025-O.webp",
    inStock: false
  });

  // 20) Mediatarde sandwich tripack.
  const liaImage = "https://masonlineprod.vtexassets.com/arquivos/ids/162494/Galletita-Sandwich-Media-Tarde-321gr-1-13220.jpg?v=637835133029070000";
  const lia = single("96352", "Lía Mediatarde Sandwich", "Cereales y galletitas", 1566, "Tripack 321 g · bulto x 16", liaImage);

  window.CATALOG_PRODUCTS_BATCH24 = [
    ala,
    bombuchas,
    arcorFruit,
    natura,
    nucita,
    coflAlf,
    pozo,
    pantene,
    lia
  ];
})();
