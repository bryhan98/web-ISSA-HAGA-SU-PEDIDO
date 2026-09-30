// 20 SKUs from the latest supplier PDF. All are marked out of stock there.
(() => {
  const product = (batch, id) => {
    const found = (window[`CATALOG_PRODUCTS_BATCH${batch}`] || []).find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog family: ${id}`);
    return found;
  };

  const addVariant = (family, variant) => {
    family.codes ||= [];
    family.variants ||= [];
    if (family.codes.includes(variant.code)) throw new Error(`Duplicate SKU: ${variant.code}`);
    family.codes.push(variant.code);
    family.coverImages ||= family.variants.filter((item) => item.image).map((item) => ({ src: item.image, label: item.name }));
    family.variants.push(variant);
    family.coverImages.push({ src: variant.image, label: variant.name });
    family.skuCount = family.codes.length;
    family.unit = `${family.skuCount} opciones disponibles`;
  };

  const tang = product(1, "catalog-tang");
  [
    { name: "Durazno", code: "0526", price: 7600, presentation: "Display x 20 sobres", image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/10104/27329/tang-durazno-display__76651.1706815329.jpg?c=2%3Fimbypass%3Don" },
    { name: "Naranja / Banana", code: "0533", price: 7600, presentation: "Display x 20 sobres", image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/9068/25456/tang-jugo-en-polvo-naranja-banana__42779.1691520928.jpg?c=2" },
    { name: "Pera", code: "0537", price: 7600, presentation: "Display x 20 sobres", image: "https://mdlzargentina.vtexassets.com/arquivos/ids/156219-800-800?aspect=true&height=800&v=638518315996800000&width=800" },
    { name: "Pomelo Rosado", code: "0538", price: 7600, presentation: "Display x 20 sobres", image: "https://clickandfoods.com/cdn/shop/files/156207-1200-1200.webp?v=1750543541" }
  ].forEach((variant) => addVariant(tang, { ...variant, inStock: false }));

  const fideos = product(8, "catalog-pdf-443");
  [
    { name: "Codito", code: "0322", price: 890, presentation: "Paquete 500 g · bulto x 15", image: "https://tienda.pago24.com.ar/media/catalog/product/cache/691ed25d8189b25c0fdca4df887c0a57/f/i/fideos_codo_sol_pampeano.png" },
    { name: "Tirabuzón", code: "0653", price: 890, presentation: "Paquete 500 g · bulto x 15", image: "https://www.mayoristagrupomax.com/mods/html/fil/Model/Product/669/6645071b71f73-19003.jpg.webp" }
  ].forEach((variant) => addVariant(fideos, { ...variant, inStock: false }));

  const baggio = product(1, "catalog-baggio-200");
  [
    { name: "Chocolatada", code: "0065", price: 11900, presentation: "Pack x 18 · envase 200 ml", image: "https://acdn-us.mitiendanube.com/stores/323/592/products/chocolata-baggio-200n-8a74e989e2441d387417691182242734-1024-1024.webp" },
    { name: "Manzana", code: "0060", price: 13900, presentation: "Caja x 8 · envase 1 L", image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/1690/4414/13712717-510x510__81829.1648827329.png?c=2" },
    { name: "Naranja", code: "0064", price: 13900, presentation: "Caja x 8 · envase 1 L", image: "https://cdn.pedix.app/CCPRKsfYXZa4LrEK7SOy/products/jUTeoCoVaUlzVtkEfHqWX.png?size=1600x1600" }
  ].forEach((variant) => addVariant(baggio, { ...variant, inStock: false }));

  const cofler = {
    id: "catalog-cofler-chocolates",
    code: "",
    codes: [],
    name: "Cofler Chocolates",
    category: "Golosinas y chocolates",
    price: 0,
    unit: "3 opciones disponibles",
    image: "https://jumboargentina.vtexassets.com/arquivos/ids/583090/Chocolate-Cofler-Aireado-55-Gr-1-40287.jpg?v=637234676609700000",
    variants: [
      { name: "Aireado Leche 55 g", code: "170", price: 3800, presentation: "Tableta 55 g", image: "https://jumboargentina.vtexassets.com/arquivos/ids/583090/Chocolate-Cofler-Aireado-55-Gr-1-40287.jpg?v=637234676609700000", inStock: false },
      { name: "Macizo Frutilla 64 g", code: "0089", price: 3500, presentation: "Tableta 64 g · bulto x 10", image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/6046/17107/Chocolate-Cofler-Yougurt-Frutilla-64g1__15943.1653074624.jpg?c=2", inStock: false },
      { name: "Macizo Leche 55 g", code: "0197", price: 3500, presentation: "Tableta 55 g · bulto x 10", image: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/2212/5504/7790580103484_Cofler_MacizoLeche_55g__30698.1613062177.png?c=2", inStock: false }
    ],
    catalog: true,
    skuCount: 3
  };
  cofler.codes = cofler.variants.map((variant) => variant.code);
  cofler.coverImages = cofler.variants.map((variant) => ({ src: variant.image, label: variant.name }));

  const bulldog = product(2, "catalog-bulldog-regaliz");
  [
    { name: "Frambuesa 75 g", code: "0034", price: 790, presentation: "Bolsa 75 g · bulto x 24", image: "https://http2.mlstatic.com/D_NQ_NP_853185-MLA86290568123_062025-O.webp" },
    { name: "Tutti-Frutti 75 g", code: "0633", price: 790, presentation: "Bolsa 75 g · bulto x 24", image: "https://d3340tyzmtlo4u.cloudfront.net/users/11748/images/detailed/21/Bull_Dog_Sour_Licorice_Tutti_Frutti%2C_75_g__2.65_oz.jpg" }
  ].forEach((variant) => addVariant(bulldog, { ...variant, inStock: false }));

  const donSatur = product(3, "catalog-don-satur-bizcochos");
  addVariant(donSatur, {
    name: "Negritos",
    code: "96381",
    price: 1090,
    presentation: "Paquete 200 g",
    image: "https://ardiaprod.vtexassets.com/arquivos/ids/294811-500-auto?aspect=true&height=auto&v=638459584544570000&width=500",
    inStock: false
  });

  const pelotitas = product(3, "catalog-lheritier-pelotitas");
  const priorPelotitas = {
    name: "Pelotitas surtidas",
    code: pelotitas.code,
    price: pelotitas.price,
    presentation: pelotitas.unit,
    image: pelotitas.image
  };
  pelotitas.code = "";
  pelotitas.price = 0;
  pelotitas.variants = [priorPelotitas];
  pelotitas.codes = [priorPelotitas.code];
  pelotitas.coverImages = [{ src: priorPelotitas.image, label: priorPelotitas.name }];
  addVariant(pelotitas, {
    name: "Pelotitas Dulce de Leche",
    code: "533",
    price: 2300,
    presentation: "Bolsa x 50 unidades",
    image: "https://cdn11.bigcommerce.com/s-ftsflnse4o/images/stencil/1280x1280/products/363409/1492425/D_604430-MLA50924525209_072022-O__16549.1731228103.jpg?c=1%3Fimbypass%3Don",
    inStock: false
  });

  const hamlet = product(7, "catalog-hamlet-chocolates");
  addVariant(hamlet, {
    name: "Yoghurt Frutilla 45 g",
    code: "96409",
    price: 880,
    presentation: "Tableta 45 g",
    image: "https://jumboargentina.vtexassets.com/arquivos/ids/636221/Tab-hamlet-Yoghu-frut-8x21x43g-1-859657.jpg?v=637535809429900000",
    inStock: false
  });

  const yummy = product(16, "catalog-yummy-gomitas");
  addVariant(yummy, {
    name: "Dientes 500 g",
    code: "96367",
    price: 4900,
    presentation: "Bolsa 500 g",
    image: "https://acdn-us.mitiendanube.com/stores/516/580/products/yummy-500g-dientes_chico-1024x1024-cb9b0eab43eaee316e17429510638390-1024-1024.webp",
    inStock: false
  });

  const misky = {
    id: "catalog-misky-chocolates",
    code: "",
    codes: ["0892", "381"],
    name: "Misky Chocolates",
    category: "Golosinas y chocolates",
    price: 0,
    unit: "2 opciones disponibles",
    image: "https://www.zanettigolosinas.com.ar/datos/uploads/mod_catalogo/32431/diseno-sin-titulo-8-6840c22f25cea.png",
    variants: [
      { name: "Chocolate Blanco 50 g", code: "0892", price: 1430, presentation: "Tableta 50 g · caja x 21", image: "https://www.zanettigolosinas.com.ar/datos/uploads/mod_catalogo/32431/diseno-sin-titulo-8-6840c22f25cea.png", inStock: false },
      { name: "Chocolate Negro 50 g", code: "381", price: 1430, presentation: "Tableta 50 g · caja x 21", image: "https://www.santiagoaza.com/uploads/centum/articles/original/858_1.jpg", inStock: false }
    ],
    catalog: true,
    skuCount: 2
  };
  misky.coverImages = misky.variants.map((variant) => ({ src: variant.image, label: variant.name }));

  window.CATALOG_PRODUCTS_BATCH23 = [cofler, misky];
})();
