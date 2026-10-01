// Replace the old Guaymallén collage with the supplied pack photos.
(() => {
  const guaymallen = (window.CATALOG_PRODUCTS_BATCH7 || []).find(
    (item) => item.id === "catalog-guaymallen-alfajores"
  );
  if (!guaymallen) throw new Error("Missing catalog family: catalog-guaymallen-alfajores");

  const images = {
    boxWhite: "assets/catalog/guaymallen-caja-blanco.png",
    boxBlack: "assets/catalog/guaymallen-caja-negro.png",
    boxFruit: "assets/catalog/guaymallen-caja-fruta.png",
    tripleWhite: "assets/catalog/guaymallen-triple-blanco.png",
    tripleBlack: "assets/catalog/guaymallen-triple-negro.png",
    simpleWhite: "assets/catalog/guaymallen-simple-blanco.png",
    simpleBlack: "assets/catalog/guaymallen-simple-negro.png",
    simpleFruit: "assets/catalog/guaymallen-simple-fruta.png",
    assorted: "assets/catalog/guaymallen-caja-surtida.png"
  };
  const variantImages = {
    "0317": images.tripleWhite,
    "0313": images.boxWhite,
    "0318": images.tripleBlack,
    "0315": images.boxBlack,
    "0316": images.assorted,
    "96406": images.boxFruit
  };

  for (const variant of guaymallen.variants || []) {
    if (variantImages[variant.code]) {
      variant.image = variantImages[variant.code];
      delete variant.imageCrop;
      delete variant.crop;
    }
  }

  // The simple wrappers are shown as references in the gallery. The current
  // price list has no separate simple-unit SKUs, so they aren't added as options.
  guaymallen.image = images.assorted;
  guaymallen.coverImages = [
    { src: images.boxWhite, label: "Blanco · caja x 40" },
    { src: images.boxBlack, label: "Negro · caja x 40" },
    { src: images.boxFruit, label: "Fruta · caja x 40" },
    { src: images.tripleWhite, label: "Triple blanco · unidad" },
    { src: images.tripleBlack, label: "Triple negro · unidad" },
    { src: images.simpleWhite, label: "Simple blanco · referencia" },
    { src: images.simpleBlack, label: "Simple negro · referencia" },
    { src: images.simpleFruit, label: "Simple fruta · referencia" },
    { src: images.assorted, label: "Surtido · caja x 40" }
  ];

  window.CATALOG_PRODUCTS_BATCH70 = [];
})();
