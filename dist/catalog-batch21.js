// Ten additional in-stock SKUs from the updated PDF, grouped with their brands.
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

  const lotza = findProduct(18, "catalog-lotza-fizz");
  lotza.image = "assets/catalog/lotza-fizz.png";
  lotza.coverImages = [{ src: lotza.image, label: "Lotza Fizz" }];

  const misky = findProduct(16, "catalog-misky-gusanitos");
  addVariant(misky, {
    name: "Goma Dientes 500 g",
    code: "0481",
    price: 5000,
    presentation: "Bolsa 500 g",
    image: "https://www.masivos.com/images/img_comp/15555.jpg"
  });

  const miskyTurronVariant = misky.variants.find((item) => item.name === "Turrón de maní");
  const miskyDientesVariant = misky.variants.find((item) => item.name === "Goma Dientes 500 g");
  misky.variants = misky.variants.filter((item) =>
    ["Gusanitos ácidos", "Gomitas Fantasía", "Gomitas Eucaliptus", "Gomitas Jelly Roll"].includes(item.name)
  );
  misky.codes = misky.variants.map((item) => item.code);
  misky.skuCount = misky.variants.length;
  misky.unit = `${misky.skuCount} opciones disponibles`;
  misky.image = misky.variants[0].image;
  misky.coverImages = misky.variants.map((item) => ({ src: item.image, label: item.name }));

  const miskyTurron = {
    id: "catalog-misky-turron-mani",
    code: miskyTurronVariant.code,
    codes: [miskyTurronVariant.code],
    name: "Misky Turrón de maní",
    category: "Golosinas y chocolates",
    price: miskyTurronVariant.price,
    unit: miskyTurronVariant.presentation,
    image: miskyTurronVariant.image,
    variants: [],
    catalog: true,
    skuCount: 1
  };

  const miskyDientes = {
    id: "catalog-misky-gomitas-dientes",
    code: miskyDientesVariant.code,
    codes: [miskyDientesVariant.code],
    name: "Misky Gomitas Dientes",
    category: "Golosinas y chocolates",
    price: miskyDientesVariant.price,
    unit: miskyDientesVariant.presentation,
    image: miskyDientesVariant.image,
    variants: [],
    catalog: true,
    skuCount: 1
  };

  const lince = {
    id: "catalog-lince-palillero",
    code: "0740",
    codes: ["0740"],
    name: "Palillero Lince",
    category: "Limpieza y hogar",
    price: 5900,
    unit: "Pack x 12 unidades · 50 palillos c/u",
    image: "https://dcdn-us.mitiendanube.com/stores/004/335/704/products/whatsapp-image-2024-04-15-at-13-46-11-1-16d84a34cc9b097bb317133694219652-1024-1024.webp",
    variants: [],
    catalog: true,
    skuCount: 1
  };

  const milka = {
    id: "catalog-milka-bombon-oreo",
    code: "505",
    codes: ["505"],
    name: "Milka Bombón Oreo",
    category: "Golosinas y chocolates",
    price: 6500,
    unit: "Caja x 11 unidades",
    image: "https://mdlzargentina.vtexassets.com/arquivos/ids/156275/7622202399107_1.jpg?v=638731759632570000",
    variants: [],
    catalog: true,
    skuCount: 1
  };

  const yummy = findProduct(16, "catalog-yummy-gomitas");
  addVariant(yummy, {
    name: "Huevos Fritos 500 g",
    code: "482",
    price: 4900,
    presentation: "Bolsa 500 g",
    image: "https://acdn-us.mitiendanube.com/stores/516/580/products/yummy-500g-huevos-1-1024x1024-b7faf5c167be15f3d517429508402043-1024-1024.webp"
  });

  const openCandyIds = [
    "catalog-open-candy-emoji-tatuaje",
    "catalog-open-candy-patita-tatuaje",
    "catalog-open-candy-mini-gumball"
  ];
  const openCandy = [];
  for (const id of openCandyIds) {
    const product = findProduct(14, id);
    openCandy.push({
      name: product.name.replace(/^Open Candy /, ""),
      code: product.code,
      price: product.price,
      presentation: product.unit,
      image: product.image
    });
  }
  const bomm = findProduct(16, "catalog-open-candy-bomm-lollipop");
  openCandy.push(...(bomm.variants || []));
  const openCandyFamily = {
    id: "catalog-open-candy-golosinas",
    code: "",
    codes: openCandy.map((item) => item.code),
    name: "Open Candy",
    category: "Golosinas y chocolates",
    price: 0,
    unit: "5 opciones disponibles",
    image: openCandy[0].image,
    variants: openCandy,
    catalog: true,
    skuCount: openCandy.length,
    coverImages: openCandy.filter((item) => item.image).map((item) => ({ src: item.image, label: item.name }))
  };
  addVariant(openCandyFamily, {
    name: "Estrellitas Frutales Tutti-Frutti x 100",
    code: "434",
    price: 4900,
    presentation: "Estuche x 100 unidades · 230 g",
    image: "https://angelitagolosinas.com.ar/Articulo_Foto/foto1_14768_0.jpeg"
  });
  openCandyFamily.unit = `${openCandyFamily.skuCount} opciones disponibles`;
  for (const number of [14, 16]) {
    window[`CATALOG_PRODUCTS_BATCH${number}`] = (window[`CATALOG_PRODUCTS_BATCH${number}`] || [])
      .filter((product) => !openCandyIds.includes(product.id) && product.id !== "catalog-open-candy-bomm-lollipop");
  }

  const pipas = findProduct(17, "catalog-pipa-semillas");
  addVariant(pipas, {
    name: "Clásicas · tira x 10",
    code: "0466",
    price: 2300,
    presentation: "Tira x 10 sobres de 18 g",
    image: "https://eltanoshop.com.ar/570-large_default/pipas-clasica-tirax10u35.jpg"
  });

  const plusbelle = findProduct(17, "catalog-plusbelle-cuidado-personal");
  addVariant(plusbelle, {
    name: "Acondicionador 1000 ml · surtido",
    code: "464",
    price: 3680,
    presentation: "Botella 1000 ml · caja x 12",
    image: "https://distribuidorafragueiro.com.ar/wp-content/uploads/2021/06/231-dd0f0532f4f6289e4016008210282279-640-0.png"
  });

  const solitas = findProduct(8, "catalog-pdf-0186");
  addVariant(solitas, {
    name: "Ekin Chocolate x 160 g",
    code: "0427",
    price: 899,
    presentation: "Paquete 160 g",
    image: "https://www.ecocompras.com.ar/database/articulos/fotos/1802/Ekin%20galletitas%20de%20chocolate_160gr_1.jpg"
  });

  const hisopos = {
    id: "catalog-hisopos-dermogreen",
    code: "0214",
    codes: ["0214"],
    name: "Hisopos Dermogreen",
    category: "Cuidado personal",
    price: 1180,
    unit: "Envase x 100 unidades",
    image: "https://cdn.batitienda.com/baticloud/images/product_picture_9b17195fde9c40b6bc65289c3316bea5_638439896337949430_0_m.jpg",
    variants: [],
    catalog: true,
    skuCount: 1
  };

  const tulipan = {
    id: "catalog-tulipan-clasico-x3",
    code: "0738",
    codes: ["0738"],
    name: "Preservativos Tulipán Clásico",
    category: "Cuidado personal",
    price: 2290,
    unit: "Caja x 3 unidades",
    image: "https://dcdn-us.mitiendanube.com/stores/007/722/728/products/6002ec20-7cbf-4ecb-bf68-34eef7906ec8-e8f758b2def8fc67ec17806057943479-1024-1024.webp",
    variants: [],
    catalog: true,
    skuCount: 1
  };

  window.CATALOG_PRODUCTS_BATCH21 = [
    lince,
    milka,
    miskyTurron,
    miskyDientes,
    openCandyFamily,
    hisopos,
    tulipan
  ];

  const yummy = findProduct(16, "catalog-yummy-gomitas");
  const yummy500g = yummy.variants.filter((variant) => variant.presentation.includes("500 g"));
  const yummyX12 = yummy.variants.filter((variant) => variant.presentation.includes("x 12"));
  const yummyX36 = yummy.variants.filter((variant) => variant.presentation.includes("x 36"));
  const makeYummyFamily = (id, name, variants) => ({
    id,
    code: "",
    codes: variants.map((variant) => variant.code),
    name,
    category: yummy.category,
    price: 0,
    unit: `${variants.length} opciones disponibles`,
    image: variants[0]?.image || yummy.image,
    variants,
    catalog: true,
    skuCount: variants.length,
    coverImages: variants.filter((variant) => variant.image).map((variant) => ({ src: variant.image, label: variant.name }))
  });

  const migrateYummyVariants = (family, variants) => {
    family.migratedVariantsFrom = variants.map((variant) => ({
      id: "catalog-yummy-gomitas",
      sourceVariant: variant.name,
      variant: variant.name
    }));
    return family;
  };

  const frutitasRellenas = yummyX36.find((variant) => variant.code === "96397");
  const rolloSurtido = yummyX12.find((variant) => variant.code === "379");
  if (frutitasRellenas) {
    frutitasRellenas.image = "https://acdn-us.mitiendanube.com/stores/516/580/products/yummy-frutitas-b8c3d3add5260c3c7517755704259341-1024-1024.webp";
  }
  if (rolloSurtido) {
    rolloSurtido.image = "https://depositoelmayorista.com.ar/wp-content/uploads/2026/04/Diseno-sin-titulo-2026-04-29T153529.931-600x600.png";
  }

  yummy.name = "Yummy Gomitas 500 g";
  yummy.variants = yummy500g;
  yummy.codes = yummy500g.map((variant) => variant.code);
  yummy.unit = `${yummy500g.length} opciones disponibles`;
  yummy.image = yummy500g[0]?.image || yummy.image;
  yummy.skuCount = yummy500g.length;
  yummy.coverImages = yummy500g.filter((variant) => variant.image).map((variant) => ({ src: variant.image, label: variant.name }));

  window.CATALOG_PRODUCTS_BATCH21.push(
    migrateYummyVariants(makeYummyFamily("catalog-yummy-gomitas-x12", "Yummy Gomitas x 12", yummyX12), yummyX12),
    migrateYummyVariants(makeYummyFamily("catalog-yummy-gomitas-x36", "Yummy Gomitas x 36", yummyX36), yummyX36)
  );
})();
