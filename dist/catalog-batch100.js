// Catalog prices, availability and product corrections from the November 25 supplier PDF (684 unique articles).
// Compatible drop-in script to load right after catalog-batch99.js.
(() => {
  const products = [];
  for (let batch = 1; batch <= 99; batch++) {
    products.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  }

  const aliases = {
    "0498": "498",
    "0294": "294",
    "0175": "175",
    "0260": "260",
    "0450": "450",
    "0105": "105",
    "0230": "230",
    "0329": "329",
    "0333": "333",
    "0447": "447",
    "0094": "094"
  };

  const rows = {"6691":[1190,false],"243":[1190,true],"12365":[1190,true],"169":[2480,false],"96351":[2790,true],"0283":[2790,true],"0646":[2900,true],"0611":[1590,true],"0607":[1590,true],"0640":[1840,true],"96432":[1540,true],"0785":[1540,true],"406":[1540,true],"96431":[1540,true],"0593":[12400,true],"96363":[6200,true],"181":[12400,true],"0059":[13140,true],"0332":[10080,false],"171":[10080,false],"0615":[13140,true],"0326":[12720,true],"0394":[12720,true],"0449":[9080,true],"0026":[9080,true],"0027":[9080,true],"148":[8400,false],"149":[8400,false],"0829":[1390,true],"0695":[1499,true],"00321":[1290,true],"0362":[1290,true],"0042":[1499,true],"0017":[1499,true],"0016":[1499,true],"182":[480,false],"183":[480,false],"96417":[10900,true],"0179":[10900,true],"95487":[1180,false],"0033":[10500,true],"0035":[10500,true],"0290":[10500,true],"0028":[1990,true],"0036":[1480,true],"408":[7400,false],"96372":[13200,false],"00562":[8800,false],"0617":[3900,true],"478":[1299,true],"430":[2100,true],"0065":[13950,false],"0063":[9720,false],"0060":[13900,false],"0062":[9720,true],"0374":[13900,true],"457":[9720,true],"0064":[13900,true],"214":[11800,false],"0629":[5900,true],"0368":[14200,true],"534":[13900,true],"0072":[13900,true],"0074":[13900,true],"0077":[13900,true],"0377":[4500,true],"0426":[5700,false],"140":[5700,false],"0079":[4700,false],"0081":[4700,false],"13003":[4900,true],"273":[4700,true],"6688":[14700,false],"315":[5300,true],"0620":[990,true],"0621":[1100,true],"0622":[1590,true],"0623":[1980,true],"0619":[2100,true],"0663":[9400,true],"531":[8600,true],"0551":[1440,false],"0066":[3100,false],"0324":[3400,false],"0168":[1990,true],"0086":[16700,true],"0675":[1080,true],"0091":[4680,true],"0434":[4800,true],"099":[4800,true],"0265":[4800,true],"479":[4900,true],"0786":[5200,true],"0090":[4680,true],"0088":[4680,true],"0092":[4680,true],"0633":[790,false],"96356":[790,false],"0334":[3100,false],"0212":[16800,true],"0095":[3100,true],"0275":[790,false],"0093":[4680,true],"0096":[4680,true],"0101":[11800,true],"0726":[11800,true],"0298":[11800,true],"519":[11800,true],"0103":[11800,true],"96338":[11800,true],"96414":[8900,true],"0425":[840,true],"0626":[990,true],"0627":[1199,true],"413":[880,true],"0369":[4800,false],"96333":[4900,true],"6698":[4900,true],"96359":[1440,true],"6401":[1650,true],"6690":[1240,true],"309":[1850,true],"13004":[620,true],"0529":[1900,true],"0117":[590,true],"278":[590,true],"0118":[590,true],"0120":[590,true],"0122":[590,true],"0810":[590,true],"0431":[590,true],"0188":[899,true],"0637":[2400,true],"343":[2400,true],"348":[1980,true],"344":[2400,true],"456":[1540,false],"5520":[1540,true],"0699":[1540,true],"134":[1540,true],"528":[1540,true],"0645":[1540,true],"425":[1540,true],"6500":[1540,true],"0157":[7900,false],"0159":[7900,true],"0163":[7900,false],"0166":[7900,true],"0164":[7900,true],"0165":[7900,true],"0167":[7900,true],"0169":[7900,true],"170":[3800,false],"520":[1699,false],"0197":[3500,false],"0652":[2100,true],"317":[1100,true],"0132":[5300,true],"0195":[5300,true],"211":[5300,true],"00600":[5300,true],"417":[13700,true],"6693":[4100,true],"0648":[4100,true],"245":[1599,true],"0129":[6900,true],"198":[6900,true],"6685":[6900,true],"0134":[6900,true],"0543":[1050,true],"0143":[1770,true],"6686":[2360,true],"121":[4200,true],"0031":[4200,true],"0144":[6500,true],"0471":[1500,true],"533":[2600,true],"0145":[2600,true],"0202":[1800,true],"0153":[6500,false],"301":[5976,false],"122":[4500,false],"0823":[8500,true],"0155":[5200,true],"6672":[1200,true],"349":[1240,true],"0030":[1100,true],"0193":[1140,true],"0194":[1140,true],"96381":[1140,true],"0678":[499,true],"0208":[1290,true],"0209":[860,true],"327":[4200,true],"380":[2200,true],"491":[3500,false],"0021":[3500,false],"319":[3500,false],"311":[3500,true],"0216":[3500,true],"345":[5200,true],"521":[6300,true],"0654":[3300,true],"254":[5200,true],"184":[2800,true],"96425":[1690,true],"0108":[620,true],"414":[430,true],"215":[800,true],"0658":[1199,true],"402":[1150,true],"0521":[1150,true],"96395":[1150,false],"0272":[1150,true],"0583":[1150,true],"96430":[1410,false],"0009":[25700,false],"0227":[699,true],"261":[39400,true],"0594":[21900,true],"96429":[740,true],"248":[27000,true],"244":[3690,true],"0307":[658,true],"458":[1380,true],"0322":[890,false],"0161":[890,false],"443":[890,false],"0385":[890,false],"207":[5900,false],"96317":[3500,true],"0278":[3500,true],"265":[3500,true],"0243":[3300,false],"419":[3300,true],"173":[3300,true],"0245":[3300,true],"0246":[3300,true],"0242":[3500,true],"96401":[3500,true],"0759":[6800,true],"0518":[6800,true],"0135":[3300,false],"0327":[6900,true],"156":[6900,false],"0253":[7200,true],"0257":[7200,true],"0256":[7200,true],"0258":[7200,true],"0040":[7200,true],"0628":[990,true],"0898":[3100,false],"427":[3100,false],"0259":[6900,false],"96382":[4800,true],"0820":[4900,false],"0413":[1430,true],"0345":[12000,true],"200":[21600,true],"0279":[13900,true],"96361":[29000,true],"0459":[1590,true],"0070":[3000,false],"346":[3000,true],"176":[3000,false],"96419":[6900,false],"0366":[370,true],"0011":[370,true],"511":[370,true],"0559":[370,true],"96408":[4320,false],"0297":[34000,true],"96405":[1290,true],"0288":[1290,true],"466":[1290,true],"276":[1290,true],"0325":[1290,true],"0474":[1290,true],"357":[1100,false],"0317":[490,false],"0313":[11700,false],"0318":[490,false],"0315":[11700,false],"0316":[11700,false],"500":[5040,true],"501":[5040,true],"493":[8900,true],"250":[7900,true],"426":[7900,true],"0330":[880,false],"0331":[880,false],"96409":[880,false],"0335":[880,false],"138":[15800,true],"0336":[9400,true],"0338":[12800,true],"0339":[18600,true],"0690":[1380,true],"227":[1380,true],"96345":[1920,true],"0271":[1990,true],"6699":[910,true],"102":[1190,true],"0497":[1190,true],"0520":[1190,true],"530":[1790,true],"0187":[2640,true],"429":[15800,true],"96370":[17900,true],"0282":[18900,false],"120":[8800,true],"299":[12600,true],"498":[19800,true],"0214":[1599,true],"0344":[1240,true],"0346":[1240,true],"0692":[2600,true],"0693":[2600,true],"0694":[2600,true],"444":[2990,true],"0353":[1230,true],"0354":[1230,true],"0355":[960,true],"523":[960,true],"0356":[960,true],"0085":[11900,false],"0211":[1740,true],"0398":[1740,true],"106":[1740,true],"0314":[33492,true],"6676":[33492,true],"316":[34560,true],"150":[4800,false],"0365":[4200,false],"0370":[9600,false],"0372":[9600,true],"294":[13600,true],"0378":[8400,true],"0506":[1100,true],"175":[820,true],"304":[7400,true],"0010":[660,true],"0783":[1080,true],"0740":[5900,true],"0773":[14700,true],"0682":[1290,true],"450":[5200,true],"0781":[960,true],"0720":[960,true],"0013":[880,true],"0679":[880,true],"96346":[2090,true],"356":[15000,true],"432":[11430,false],"448":[12900,false],"218":[2640,true],"96365":[7600,true],"0397":[6990,true],"12000":[11800,false],"96368":[11800,true],"89031":[18300,true],"0631":[13500,true],"0580":[1590,true],"96352":[1644,false],"0123":[1480,true],"0407":[12900,true],"0110":[6700,true],"0309":[6700,true],"291":[6700,true],"368":[6700,true],"0410":[3996,true],"0408":[3996,true],"0411":[3996,true],"0412":[3996,false],"0002":[3996,true],"0415":[9900,true],"0414":[4940,true],"505":[6500,true],"0203":[810,false],"253":[810,false],"0892":[1430,false],"381":[1430,false],"469":[5800,false],"96328":[5800,false],"0481":[5000,true],"0302":[9900,true],"0301":[9900,true],"0075":[5000,true],"0300":[9900,true],"6696":[5400,true],"20325":[6100,false],"0463":[3705,false],"454":[1470,true],"0386":[1470,true],"0499":[690,true],"135":[620,true],"0435":[690,true],"0390":[750,true],"0672":[690,true],"160":[5900,false],"0200":[5900,false],"0440":[20800,true],"96415":[725,false],"96428":[725,false],"0684":[725,false],"439":[7200,true],"418":[7200,true],"0428":[7200,true],"96343":[7400,true],"0515":[12480,false],"260":[3600,true],"105":[4720,false],"0752":[5900,true],"434":[4900,true],"0395":[9900,true],"0226":[4800,true],"0811":[825,true],"0442":[1080,true],"0444":[1990,true],"0445":[10300,true],"96406":[3790,true],"499":[3690,true],"0510":[3990,true],"494":[3990,false],"0446":[1030,true],"0609":[890,true],"0190":[7700,true],"285":[7700,true],"0618":[420,true],"0448":[960,true],"230":[1040,false],"257":[960,true],"0451":[960,false],"0452":[960,true],"0453":[960,true],"0455":[1560,false],"0456":[1260,true],"0458":[1560,true],"0460":[1260,true],"0274":[1590,false],"0464":[15000,false],"220":[2000,false],"0697":[16500,true],"0698":[16500,true],"275":[4990,false],"66545":[4990,false],"0273":[4990,false],"0304":[4990,false],"0766":[4990,false],"0467":[7200,true],"115":[7200,true],"96427":[1040,true],"0487":[1040,true],"0468":[1040,false],"0469":[1040,true],"0470":[1040,false],"0472":[1040,true],"0473":[1040,true],"464":[3680,true],"239":[1190,true],"463":[3680,true],"6655":[3400,true],"6657":[3400,true],"6656":[3400,true],"374":[1980,true],"0701":[1980,true],"0702":[1980,true],"0700":[1980,true],"0653":[1080,true],"6680":[1080,true],"0421":[1080,true],"300":[1080,true],"96342":[1080,true],"6670":[1690,true],"0210":[1690,true],"0563":[1690,true],"527":[1690,true],"96377":[1080,true],"352":[3800,true],"353":[3800,true],"354":[3800,true],"189":[1290,false],"370":[590,true],"0480":[10788,true],"0476":[10400,false],"0482":[13900,true],"506":[1800,true],"144":[7400,true],"0483":[15360,false],"194":[630,true],"0549":[2400,true],"336":[3900,true],"337":[3900,true],"0713":[3900,true],"0714":[3900,true],"341":[3900,true],"338":[3900,true],"340":[3900,true],"0715":[1290,true],"0716":[2490,true],"385":[5400,true],"391":[5400,true],"386":[5400,true],"390":[5400,true],"388":[5400,false],"383":[5400,true],"384":[5400,true],"387":[5400,true],"397":[5400,true],"396":[5400,false],"392":[5400,true],"96396":[5400,true],"437":[5400,false],"0660":[5400,false],"0485":[27200,true],"0486":[20200,true],"0488":[21600,true],"0098":[10300,true],"306":[16000,true],"0490":[6500,true],"141":[4800,true],"96379":[1480,false],"0493":[1090,true],"00514":[9500,true],"0522":[9500,true],"284":[9500,true],"0348":[4620,true],"0496":[4620,true],"0516":[4620,true],"0505":[7200,false],"96369":[10500,true],"0507":[10500,true],"0140":[1490,false],"334":[2980,true],"335":[2980,true],"364":[2980,true],"0722":[5800,true],"0604":[3100,true],"0721":[5800,true],"0603":[3100,true],"0601":[3100,true],"330":[2980,true],"329":[2980,true],"96385":[3100,true],"0201":[3100,true],"332":[2980,true],"333":[2980,true],"331":[2980,true],"0725":[5800,true],"0724":[5800,true],"0602":[3100,true],"447":[24400,true],"094":[799,true],"96407":[1755,true],"96404":[1790,true],"0281":[1899,true],"96387":[1999,true],"0068":[1699,true],"0427":[955,true],"0687":[955,true],"0186":[1899,true],"0504":[1899,true],"0172":[1850,true],"0367":[1850,false],"0034":[1899,false],"0685":[1625,true],"0089":[830,true],"6400":[830,true],"96362":[830,true],"0391":[1899,true],"01021":[1980,true],"0517":[1480,true],"0734":[3600,true],"0735":[3600,true],"0639":[3600,true],"0519":[7600,true],"0523":[2440,false],"0524":[2680,true],"0513":[2100,true],"0029":[3400,true],"0501":[3400,true],"0526":[7200,false],"0558":[7200,false],"0527":[7200,true],"0528":[7200,true],"0525":[7200,false],"0531":[7200,true],"0532":[7200,true],"0533":[7200,false],"0534":[7200,true],"0535":[7200,false],"0536":[7200,true],"0537":[7200,false],"0538":[7200,false],"0541":[8500,true],"302":[1430,true],"0387":[2400,true],"0542":[12600,true],"0545":[12600,true],"0544":[12600,true],"0546":[12600,true],"297":[4100,false],"89574":[4100,false],"097":[3800,true],"465":[3100,false],"525":[6400,false],"6695":[2990,true],"339":[660,true],"0562":[1140,true],"325":[1580,false],"0104":[14400,true],"0540":[14400,true],"0285":[14400,true],"369":[14400,true],"0484":[6720,true],"453":[1080,true],"497":[940,true],"0643":[899,true],"0015":[1380,true],"0189":[1380,false],"509":[1380,true],"96422":[1380,true],"96315":[1380,true],"96339":[1340,false],"0561":[735,true],"0560":[1880,true],"252":[1380,true],"0984":[1340,false],"0651":[1380,true],"0738":[2290,true],"213":[980,true],"095":[890,true],"0564":[310,true],"0037":[10400,true],"0567":[7750,true],"0080":[8900,false],"0569":[11000,true],"157":[9800,true],"0625":[9504,true],"0574":[2300,true],"287":[790,false],"0575":[860,true],"307":[1490,false],"6682":[1490,false],"085":[1490,true],"529":[1490,true],"0371":[11900,true],"96433":[1450,true],"0775":[2150,true],"433":[2150,true],"0666":[2150,true],"394":[1790,true],"0751":[1790,true],"0745":[1790,true],"0299":[3900,true],"0585":[3900,true],"120001":[4990,true],"283":[4900,true],"405":[4900,true],"96353":[4900,false],"0787":[4900,true],"482":[4900,true],"272":[4900,false],"96410":[4900,true],"0264":[4900,true],"96371":[4900,true],"96367":[4900,true],"0514":[4990,false],"0039":[6912,true],"0586":[4990,true],"0711":[4990,true],"292":[4990,false],"96397":[8900,true],"96426":[4990,true],"186":[8600,false],"0587":[4990,true],"96413":[4990,false],"084":[4990,false],"093":[4990,true],"379":[4900,true],"0466":[4990,true],"289":[599,true],"0287":[599,true],"376":[599,true]};

  const find = (id) => products.find((p) => p.id === id);

  const removeProductFromBatches = (target) => {
    if (!target) return;
    for (let batch = 1; batch <= 99; batch++) {
      const list = window[`CATALOG_PRODUCTS_BATCH${batch}`];
      if (!Array.isArray(list)) continue;
      const idx = list.indexOf(target);
      if (idx >= 0) list.splice(idx, 1);
    }
    const pIdx = products.indexOf(target);
    if (pIdx >= 0) products.splice(pIdx, 1);
  };

  // 1. Integrar nuevos SKUs en familias ya existentes para evitar duplicados de marca/línea:
  // - 96432: ALF.AGUILA MINITORTA X 3 (21) -> catalog-alfajor-aguila
  const aguila = find("catalog-alfajor-aguila");
  if (aguila && !(aguila.variants || []).some((v) => v.code === "96432")) {
    aguila.variants = aguila.variants || [];
    aguila.variants.push({
      name: "Minitorta (bulto x 21)",
      code: "96432",
      price: 1540,
      presentation: "C/U · triple · bulto x 21",
      image: aguila.image
    });
    delete aguila.coverImages;
  }

  // - 96431: ALF.CHOCOTORTA X 3 (21) -> catalog-alfajor-chocotorta (convertir a familia con variantes)
  const chocotorta = find("catalog-alfajor-chocotorta");
  if (chocotorta && !(chocotorta.variants || []).some((v) => v.code === "96431")) {
    const baseImg = chocotorta.image;
    chocotorta.code = "";
    chocotorta.variants = [
      {
        name: "Triple 71,5 g",
        code: "0362",
        price: 1480,
        presentation: "C/U · triple · 71,5 g",
        image: baseImg
      },
      {
        name: "Triple x 3 (bulto x 21)",
        code: "96431",
        price: 1540,
        presentation: "Pack x 3 · bulto x 21",
        image: baseImg
      }
    ];
    delete chocotorta.coverImages;
  }

  // - 96430: FELFORT DOS CORAZONES FRACCIONADO -> catalog-felfort-dos-corazones
  const dosCorazones = find("catalog-felfort-dos-corazones");
  if (dosCorazones && !(dosCorazones.variants || []).some((v) => v.code === "96430")) {
    dosCorazones.code = "";
    dosCorazones.variants = [
      {
        name: "Unidad fraccionada",
        code: "96430",
        price: 1410,
        presentation: "Unidad 26 g",
        image: "assets/catalog/variants/felfort-dos-corazones-unidad-20261002.png"
      },
      {
        name: "Caja x 20",
        code: "0009",
        price: 25700,
        presentation: "Caja x 20 unidades · 26 g c/u",
        image: "assets/catalog/variants/felfort-dos-corazones-caja-20-20261002.png"
      }
    ];
  }

  // - 96429: FELFORT PARAGUITAS FRACCIONADO -> catalog-felfort-paraguitas
  const paraguitas = find("catalog-felfort-paraguitas");
  if (paraguitas && !(paraguitas.variants || []).some((v) => v.code === "96429")) {
    paraguitas.code = "";
    paraguitas.variants = [
      {
        name: "Unidad fraccionada",
        code: "96429",
        price: 740,
        presentation: "Unidad 13,5 g",
        image: "assets/catalog/variants/felfort-paraguitas-unidad-20261001.png"
      },
      {
        name: "Caja x 40",
        code: "248",
        price: 27000,
        presentation: "Caja x 40 unidades · 13,5 g c/u",
        image: "assets/catalog/variants/felfort-paraguitas-caja-40-20261001.png"
      }
    ];
  }

  // 2. Nuevos productos independientes que no pertenecían a ninguna familia previa:
  const extra = [];
  const existingCodes = new Set();
  for (const p of products) {
    const list = p.variants && p.variants.length ? p.variants : [p];
    for (const v of list) {
      const norm = aliases[v.code] || v.code;
      if (norm) existingCodes.add(norm);
    }
  }

  if (!existingCodes.has("96433")) {
    extra.push({
      id: "catalog-yerba-la-tranquera",
      code: "96433",
      codes: ["96433"],
      name: "Yerba La Tranquera Clásica",
      category: "Bebidas",
      price: 1450,
      unit: "Paquete 500 g · bulto x 12",
      image: "assets/catalog/yerba-la-tranquera.webp",
      variants: [],
      catalog: true,
      skuCount: 1,
      inStock: true
    });
  }

  // 3. Depurar códigos dados de baja en el PDF del 25/11 y deduplicar SKUs en todo el catálogo:
  const seenCodes = new Set();
  const toRemove = [];

  for (const p of [...products, ...extra]) {
    if (Array.isArray(p.variants) && p.variants.length > 0) {
      const cleanVariants = [];
      for (const v of p.variants) {
        v.code = aliases[v.code] || v.code;
        const row = rows[v.code];
        if (!row) continue; // Eliminar variante si su código ya no existe en el PDF 25/11
        if (seenCodes.has(v.code)) continue; // Evitar cualquier código duplicado
        seenCodes.add(v.code);
        v.price = row[0];
        v.inStock = row[1];
        cleanVariants.push(v);
      }
      p.variants = cleanVariants;
      if (p.variants.length === 0) {
        toRemove.push(p);
        continue;
      }
      p.codes = p.variants.map((v) => v.code);
      p.skuCount = new Set(p.codes).size;
      p.price = 0;
      p.inStock = p.variants.some((v) => v.inStock);
      if (/^\d+ opcion(es)? disponible(s)?$/.test(p.unit || "")) {
        p.unit = `${p.variants.length} ${p.variants.length === 1 ? "opción disponible" : "opciones disponibles"}`;
      }
      if (Array.isArray(p.coverImages) && p.coverImages.length > p.variants.length) {
        p.coverImages = p.variants
          .filter((v) => v.image)
          .map((v) => ({ src: v.image, label: v.name }));
      }
    } else {
      p.code = aliases[p.code] || p.code;
      const row = rows[p.code];
      if (!row || seenCodes.has(p.code)) {
        toRemove.push(p);
        continue;
      }
      seenCodes.add(p.code);
      p.price = row[0];
      p.inStock = row[1];
      p.codes = [p.code];
      p.skuCount = 1;
    }
  }

  for (const p of toRemove) {
    const extraIdx = extra.indexOf(p);
    if (extraIdx >= 0) {
      extra.splice(extraIdx, 1);
    } else {
      removeProductFromBatches(p);
    }
  }

  window.CATALOG_PRODUCTS_BATCH100 = extra;
})();
