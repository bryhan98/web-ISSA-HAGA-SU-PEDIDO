// Match La Piñata gummy variants to the supplied photos and expose all five catalog options.
(() => {
  const product = (window.CATALOG_PRODUCTS_BATCH10 || []).find((item) => item.id === "catalog-pdf-la-pinata-gomitas-700");
  if (!product) throw new Error("Missing catalog family: Gomitas La Piñata x700 g");

  const photos = {
    "0304": "assets/catalog/variants/pinata-huesos-0304.png",
    "0766": "assets/catalog/variants/pinata-redonditas-0766.png",
    "0273": "assets/catalog/variants/pinata-eucaliptus-0273.png",
    "66545": "assets/catalog/variants/pinata-anillos-66545.png",
    "275": "assets/catalog/variants/pinata-surtidas-275.png"
  };
  const names = {
    "0304": "Huesos · 700 g",
    "0766": "Redonditas · 700 g",
    "0273": "Eucaliptus · 700 g",
    "66545": "Anillos · 700 g",
    "275": "Surtidas · 700 g"
  };
  const variantsByCode = new Map((product.variants || []).map((variant) => [String(variant.code), variant]));
  const bonesCode = "0304";
  if (!variantsByCode.has(bonesCode)) {
    const bones = {
      name: names[bonesCode], code: bonesCode, price: 4990,
      presentation: "Bolsa 700 g", image: photos[bonesCode], inStock: false
    };
    product.variants.push(bones);
    variantsByCode.set(bonesCode, bones);
  }

  const orderedCodes = ["0304", "0766", "0273", "66545", "275"];
  product.variants = orderedCodes.map((code) => {
    const variant = variantsByCode.get(code);
    if (!variant) throw new Error(`Missing La Piñata SKU ${code}`);
    variant.name = names[code];
    variant.image = photos[code];
    delete variant.imageCrop;
    return variant;
  });
  product.codes = orderedCodes;
  product.image = photos[bonesCode];
  product.skuCount = product.variants.length;
  product.unit = `${product.skuCount} variedades disponibles`;
  product.coverImages = orderedCodes.map((code) => ({ src: photos[code], label: names[code] }));

  window.CATALOG_PRODUCTS_BATCH61 = [];
})();
