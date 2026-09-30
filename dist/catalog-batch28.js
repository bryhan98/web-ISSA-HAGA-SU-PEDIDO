(() => {
  const batches = Array.from({ length: 27 }, (_, index) => window[`CATALOG_PRODUCTS_BATCH${index + 1}`] || []);
  const products = batches.flat();
  const find = (id) => {
    const product = products.find((entry) => entry.id === id);
    if (!product) throw new Error(`Missing catalog product for image update: ${id}`);
    return product;
  };
  const refreshGallery = (product) => {
    if (product.variants?.length > 1) {
      product.coverImages = product.variants.map((variant) => ({ src: variant.image || product.image, label: variant.name }));
    } else {
      delete product.coverImages;
    }
  };
  const setVariantImage = (product, code, image) => {
    const variant = product.variants.find((entry) => String(entry.code) === code);
    if (!variant) throw new Error(`Missing catalog variant ${code} in ${product.id}`);
    variant.image = image;
  };

  const asset = (name) => `assets/catalog/variants/${name}.webp`;

  const miniBizcochos = find("catalog-mafalda-mini-bizcochos");
  const mafalda = find("catalog-mafalda-hojaldres");
  mafalda.variants.push({
    name: "Mini bizcochos",
    code: miniBizcochos.code,
    price: miniBizcochos.price,
    presentation: miniBizcochos.unit,
    image: asset("mafalda-mini-bizcochos")
  });
  mafalda.codes.push(miniBizcochos.code);
  mafalda.skuCount = mafalda.codes.length;
  mafalda.unit = `${mafalda.skuCount} variedades disponibles`;
  window.CATALOG_PRODUCTS_BATCH1 = window.CATALOG_PRODUCTS_BATCH1.filter((entry) => entry.id !== miniBizcochos.id);
  setVariantImage(mafalda, "0781", asset("mafalda-larguitas-150g"));
  setVariantImage(mafalda, "0720", asset("mafalda-triangulo-150g"));
  setVariantImage(mafalda, "0679", asset("mafalda-mini-triangulitos-150g"));
  refreshGallery(mafalda);

  find("catalog-terepin-pepas").image = asset("terepin-pepas-400g");
  refreshGallery(find("catalog-terepin-pepas"));

  const fideos = find("catalog-pdf-443");
  setVariantImage(fideos, "0322", asset("sol-pampeano-codito"));
  setVariantImage(fideos, "0653", asset("sol-pampeano-tirabuzon"));
  setVariantImage(fideos, "458", asset("sol-pampeano-mono"));
  refreshGallery(fideos);

  const fantoche = find("catalog-fantoche-pan-dulce-frutas");
  setVariantImage(fantoche, "494", asset("fantoche-pan-dulce-frutas-400g"));
  fantoche.image = asset("fantoche-pan-dulce-frutas-400g");
  refreshGallery(fantoche);

  const bagley = find("catalog-pdf-0523");
  bagley.image = asset("galletitas-surtido-bagley");
  refreshGallery(bagley);

  const tang = find("catalog-tang");
  setVariantImage(tang, "0533", asset("tang-naranja-banana"));
  setVariantImage(tang, "0526", asset("tang-durazno"));
  refreshGallery(tang);

  const donSatur = find("catalog-don-satur-bizcochos");
  setVariantImage(donSatur, "0194", asset("don-satur-grasa"));
  setVariantImage(donSatur, "0193", asset("don-satur-agridulce"));
  setVariantImage(donSatur, "96381", asset("don-satur-negritos"));
  donSatur.image = asset("don-satur-grasa");
  refreshGallery(donSatur);

  const budines = find("catalog-pdf-0386");
  setVariantImage(budines, "454", asset("budin-pozo-frutas"));
  setVariantImage(budines, "0386", asset("budin-pozo-vainilla"));
  budines.image = asset("budin-pozo-vainilla");
  refreshGallery(budines);

  const providencia = find("catalog-pdf-189");
  providencia.image = asset("galletitas-la-providencia-pack-3");
  refreshGallery(providencia);

  window.CATALOG_PRODUCTS_BATCH28 = [];
})();
