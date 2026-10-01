(function () {
  const products = window.CATALOG_PRODUCTS_BATCH17 || [];
  const original = products.find((product) => product.id === "catalog-plusbelle-cuidado-personal");
  if (!original) return;

  const images = {
    soap: {
      "Jabón · Frescura Intensa": "assets/catalog/variants/plusbelle-jabon-frescura-intensa-20261001.png",
      "Jabón · Belleza Radiante": "assets/catalog/variants/plusbelle-jabon-belleza-radiante-20261001.png",
      "Jabón · Sensación Nutritiva": "assets/catalog/variants/plusbelle-jabon-nutricion-20261001.png",
      "Jabón · Detox": "assets/catalog/variants/plusbelle-jabon-detox-20261001.png",
      "Jabón · Energía Renovadora": "assets/catalog/variants/plusbelle-jabon-energia-20261001.png",
    },
    shampoo: {
      "Shampoo · Nutrición": "assets/catalog/variants/plusbelle-shampoo-nutricion-20261001.png",
      "Shampoo · Detox": "assets/catalog/variants/plusbelle-shampoo-detox-20261001.png",
      "Shampoo · Frescura": "assets/catalog/variants/plusbelle-shampoo-frescura-20261001.png",
      "Shampoo · Balance": "assets/catalog/variants/plusbelle-shampoo-balance-20261001.png",
      "Shampoo · Brillo": "assets/catalog/variants/plusbelle-shampoo-brillo-20261001.png",
      "Shampoo · Docilidad": "assets/catalog/variants/plusbelle-shampoo-docilidad-20261001.png",
      "Shampoo · Hidratación": "assets/catalog/variants/plusbelle-shampoo-hidratacion-20261001.png",
      "Shampoo · Antioxidante": "assets/catalog/variants/plusbelle-shampoo-antioxidante-20261001.png",
      "Shampoo · Protección": "assets/catalog/variants/plusbelle-shampoo-proteccion-20261001.png",
    },
  };

  const soapVariants = original.variants.filter((variant) => variant.name.startsWith("Jabón ·"));
  const shampooVariants = original.variants.filter((variant) => variant.name.startsWith("Shampoo ·"));
  const conditionerVariants = [
    ["Suavidad", "assets/catalog/variants/plusbelle-acondicionador-suavidad-20261001.png"],
    ["Nutrición", "assets/catalog/variants/plusbelle-acondicionador-nutricion-20261001.png"],
    ["Detox", "assets/catalog/variants/plusbelle-acondicionador-detox-20261001.png"],
    ["Frescura", "assets/catalog/variants/plusbelle-acondicionador-frescura-20261001.png"],
    ["Balance", "assets/catalog/variants/plusbelle-acondicionador-balance-20261001.png"],
  ].map(([flavor, image]) => ({
    name: `Acondicionador · ${flavor}`,
    code: "464",
    price: 3680,
    presentation: "Acondicionador 1000 ml · caja x 12",
    image,
  }));

  const prepare = (sourceVariants, id, title, unit) => {
    const variants = sourceVariants.map((variant) => {
      const renamed = variant.name === "Shampoo · Cocuidado" ? "Shampoo · Docilidad" : variant.name;
      const image = images.soap[renamed] || images.shampoo[renamed] || variant.image;
      return { ...variant, name: renamed, image };
    });
    return {
      ...original,
      id,
      name: title,
      code: "",
      codes: [...new Set(variants.map((variant) => variant.code))],
      price: 0,
      unit,
      image: variants[0].image,
      variants,
      skuCount: variants.length,
      coverImages: variants.map((variant) => ({ src: variant.image, label: variant.name })),
      selectionSummary: `${variants.length} opciones disponibles`,
    };
  };

  const soap = prepare(soapVariants, "catalog-plusbelle-jabones", "Plusbelle Jabones", "5 opciones disponibles");
  const shampoo = prepare(shampooVariants, "catalog-plusbelle-shampoo", "Plusbelle Shampoo", "10 opciones disponibles");
  const conditioner = prepare(conditionerVariants, "catalog-plusbelle-acondicionador", "Plusbelle Acondicionador", "5 opciones disponibles");

  products.splice(products.indexOf(original), 1, soap, shampoo, conditioner);
})();
