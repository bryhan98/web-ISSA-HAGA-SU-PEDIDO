// Batch 27: 14 distinct supplier-PDF SKUs to bring the catalogue to 685.
(() => {
  const all = Array.from({ length: 26 }, (_, i) => window[`CATALOG_PRODUCTS_BATCH${i + 1}`] || []).flat();
  const family = (id) => {
    const found = all.find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog family: ${id}`);
    return found;
  };
  const addVariant = (target, item) => {
    target.codes ||= [];
    target.variants ||= [];
    if (target.codes.includes(item.code)) throw new Error(`Duplicate SKU: ${item.code}`);
    target.coverImages ||= target.variants.filter((entry) => entry.image).map((entry) => ({ src: entry.image, label: entry.name }));
    target.codes.push(item.code);
    target.variants.push(item);
    target.coverImages.push({ src: item.image, label: item.name });
    target.code = "";
    target.price = 0;
    target.skuCount = target.codes.length;
    target.unit = `${target.skuCount} opciones disponibles`;
  };
  const variant = (name, code, price, presentation, image, inStock = true) => ({
    name, code, price, presentation, image, inStock
  });
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

  // Add to the existing brand families so each choice has its own image.
  addVariant(family("catalog-krachitos-snacks-batch26"), variant(
    "Chizitos sabor queso 270 g", "0365", 4200, "Bolsa 270 g",
    "https://jumboargentina.vtexassets.com/arquivos/ids/767064/Chizitos-Krach-itos-Sabor-Queso-X170g-1-944915.jpg?v=638110353745470000", false
  ));
  addVariant(family("catalog-pdf-96352"), variant(
    "Mediatarde clásicas x 3", "0580", 1490, "Pack x 3 unidades",
    "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/mediatarde-603a669669318.png"
  ));
  addVariant(family("catalog-misky-chocolates"), variant(
    "Chocolatín negro x 20 · 8 g", "96328", 5800, "Caja x 20 unidades · 8 g c/u",
    "https://d22fxaf9t8d39k.cloudfront.net/567b6ed8869da78fd120e5757336e5bb2f9e4d04e772b96e9ff443a67314ede081989.png", false
  ));
  addVariant(family("catalog-open-candy-golosinas"), variant(
    "Pinballs masticables x 200", "0226", 4400, "Bolsa x 200 unidades",
    "https://www.angelitagolosinas.com.ar/Articulo_Foto/foto1_12771_0.jpeg", false
  ));
  addVariant(family("catalog-toconato-pepas"), variant(
    "Pepas de membrillo 200 g", "339", 599, "Paquete 200 g",
    "https://galletitastoconato.com.ar/img/200gr-membrillo.webp", false
  ));
  addVariant(family("catalog-yummy-gomitas"), variant(
    "Moritas 500 g", "272", 4900, "Bolsa 500 g",
    "https://http2.mlstatic.com/D_NQ_NP_836687-MLA99831893245_112025-O.webp", false
  ));
  addVariant(family("catalog-alfajor-jorgito"), variant(
    "Conitos x 12", "0085", 11100, "Caja x 12 unidades",
    "https://chitarroni.com.ar/images/product_image/599/0?fit=fill&h=630&w=1200"
  ));
  addVariant(family("catalog-tnt-caramelos"), variant(
    "Caramelo clásico x 60", "297", 4100, "Display x 60 unidades",
    "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/tnt-caramelo-688ce5ee12718.jpg"
  ));

  // Standalone products from the PDF. Items marked SIN STOCK remain visible but cannot be ordered.
  const granby = single("357", "Jabón en polvo Granby Matic", "Limpieza y hogar", 1100, "Bolsa 400 g · caja x 24",
    "https://eldoradouy.vtexassets.com/arquivos/ids/1155202/7791290793484.jpg?v=638324833474100000", false);
  const miskyMasticables = single("0397", "Caramelos Masticables Misky Ácidos", "Golosinas y chocolates", 5900, "Bolsa 800 g",
    "https://d3340tyzmtlo4u.cloudfront.net/users/864/images/detailed/16/Misky_Crazy_Caramelos_Masticables_Sabor_a_Tutti_Frutti%2C_800_g.webp", false);
  const panRallado = single("0609", "Pan rallado Manieri", "Almacén", 890, "Paquete 500 g · caja x 12",
    "https://acdn-us.mitiendanube.com/stores/004/462/347/products/pan-rallado-1-ad806cc590c91a358a17537986083503-1024-1024.webp", false);
  const providencia = single("189", "Galletitas La Providencia x 3", "Cereales y galletitas", 1290, "Pack x 3 unidades",
    "https://http2.mlstatic.com/D_NQ_NP_911218-MLA49741056969_042022-O.webp", false);
  const velaComun = single("283", "Velas largas", "Limpieza y hogar", 1080, "Paquete x 4 unidades",
    "https://www.distriecono.com.ar/images/4949_00.jpg");
  const velaConde = single("287", "Velas largas El Conde", "Limpieza y hogar", 790, "Paquete x 4 unidades",
    "https://i00.eu/img/687/768x768f/3vle1bo2/77330.jpg");

  window.CATALOG_PRODUCTS_BATCH27 = [granby, miskyMasticables, panRallado, providencia, velaComun, velaConde];
})();
