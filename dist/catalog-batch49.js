// Move the three Bull Dog chewy lollipop flavors into the acidic pastilles family.
(() => {
  const products = Array.from({ length: 48 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []).flat();
  const product = (id) => {
    const found = products.find((item) => item.id === id);
    if (!found) throw new Error(`Missing catalog item: ${id}`);
    return found;
  };

  const chewy = product("catalog-bulldog-masticables");
  const pastilles = product("catalog-bulldog-pastillas");
  const movedCodes = new Set(["0091", "0088", "0092"]);
  const moved = chewy.variants.filter((variant) => movedCodes.has(String(variant.code)));
  if (moved.length !== movedCodes.size) throw new Error("Bull Dog flavor move did not find all three SKUs");

  const existingCodes = new Set(pastilles.variants.map((variant) => String(variant.code)));
  for (const variant of moved) {
    if (existingCodes.has(String(variant.code))) throw new Error(`Duplicate Bull Dog SKU: ${variant.code}`);
    pastilles.variants.push({
      ...variant,
      image: variant.image || `assets/catalog/variants/${variant.code}.webp`
    });
    existingCodes.add(String(variant.code));
  }

  chewy.variants = chewy.variants.filter((variant) => !movedCodes.has(String(variant.code)));
  chewy.codes = chewy.variants.map((variant) => String(variant.code));
  chewy.skuCount = chewy.codes.length;
  chewy.unit = chewy.skuCount === 1 ? "1 opción disponible" : `${chewy.skuCount} opciones disponibles`;
  chewy.coverImages = chewy.variants.map((variant) => ({
    src: variant.image || (variant.code ? `assets/catalog/variants/${variant.code}.webp` : chewy.image),
    label: variant.name
  }));

  const uva = pastilles.variants.find((variant) => String(variant.code) === "0096");
  if (!uva) throw new Error("Missing Bull Dog acidic grape SKU 0096");
  uva.price = 4680;
  pastilles.codes = pastilles.variants.map((variant) => String(variant.code));
  pastilles.skuCount = pastilles.codes.length;
  pastilles.unit = `${pastilles.skuCount} opciones disponibles`;
  pastilles.coverImages = pastilles.variants.map((variant) => ({
    src: variant.image || (variant.code ? `assets/catalog/variants/${variant.code}.webp` : pastilles.image),
    label: variant.name
  }));
  pastilles.migratedVariantsFrom = [
    ...(pastilles.migratedVariantsFrom || []),
    ...moved.map((variant) => ({
      id: chewy.id,
      sourceVariant: variant.name,
      variant: variant.name
    }))
  ];

  window.CATALOG_PRODUCTS_BATCH49 = [];
})();
