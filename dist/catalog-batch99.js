// Catalog prices, availability and product corrections from the October 13 supplier PDF.
// Rinde 2 uses the explicitly confirmed price: $5,400 per display, $540 per sachet.
(() => {
  const products = [];
  for (let batch = 1; batch <= 98; batch++) products.push(...(window[`CATALOG_PRODUCTS_BATCH${batch}`] || []));
  const aliases = {"0498":"498","0294":"294","0175":"175","0260":"260","0450":"450","0105":"105","0230":"230","0329":"329","0333":"333","0447":"447","0094":"094"};
  const rows = {"5521":[1250.0,true],"6691":[1190.0,true],"243":[1190.0,true],"12365":[1190.0,true],"169":[2480.0,false],"96351":[2790.0,false],"0283":[2790.0,true],"0646":[2800.0,true],"0611":[1590.0,true],"0607":[1590.0,true],"0182":[2180.0,true],"0640":[1790.0,true],"406":[1499.0,true],"0785":[1480.0,false],"00321":[1480.0,false],"0362":[1480.0,false],"0593":[12400.0,true],"96363":[6200.0,true],"181":[12400.0,true],"0059":[12300.0,true],"0332":[10160.0,false],"171":[10160.0,false],"345":[6900.0,true],"0615":[12300.0,true],"0326":[11800.0,true],"0394":[11800.0,false],"0449":[8880.0,true],"0026":[8880.0,true],"0027":[8880.0,true],"148":[8900.0,true],"149":[8900.0,true],"0829":[1390.0,true],"0695":[1420.0,true],"0042":[1420.0,true],"0017":[1420.0,true],"0016":[1420.0,true],"182":[470.0,true],"183":[470.0,true],"96417":[10900.0,true],"0179":[10900.0,true],"95487":[1180.0,true],"0033":[10500.0,true],"0035":[10500.0,true],"0290":[10500.0,true],"0028":[1740.0,true],"0036":[1430.0,true],"408":[7400.0,true],"96372":[13200.0,true],"00562":[8800.0,true],"0617":[3620.0,true],"478":[1299.0,true],"430":[2100.0,true],"0065":[11900.0,false],"0062":[9720.0,true],"0060":[13900.0,false],"0374":[13900.0,false],"0063":[9720.0,false],"457":[9720.0,true],"0064":[13900.0,false],"214":[11800.0,true],"0629":[5990.0,false],"0368":[14200.0,true],"534":[13400.0,true],"0072":[13400.0,true],"0074":[13400.0,false],"0077":[13400.0,true],"0377":[4500.0,true],"0299":[5700.0,true],"0426":[5700.0,true],"140":[5700.0,true],"0079":[4200.0,true],"0081":[4200.0,true],"13003":[4900.0,true],"273":[4200.0,true],"6688":[14700.0,true],"315":[5300.0,true],"0620":[990.0,true],"0621":[1100.0,true],"0622":[1540.0,true],"0623":[1890.0,true],"0619":[1990.0,true],"0663":[9400.0,true],"531":[8600.0,true],"0551":[1440.0,false],"0066":[3100.0,false],"0324":[3400.0,false],"0168":[1880.0,false],"0086":[16590.0,true],"0675":[1080.0,true],"0091":[4680.0,true],"0434":[4800.0,true],"96407":[4800.0,false],"099":[4800.0,true],"0265":[4800.0,true],"479":[4900.0,true],"0786":[5900.0,true],"0090":[4680.0,true],"0088":[4680.0,true],"0092":[4680.0,true],"0034":[790.0,false],"0633":[790.0,false],"96356":[790.0,false],"0334":[3100.0,true],"0212":[16800.0,true],"0275":[790.0,false],"0540":[1620.0,true],"0095":[3100.0,true],"0093":[4680.0,true],"0096":[4680.0,true],"0101":[11800.0,true],"0726":[11800.0,true],"0298":[11800.0,true],"519":[11800.0,true],"0103":[11800.0,true],"96338":[11800.0,true],"96414":[8900.0,true],"0425":[840.0,true],"0421":[24500.0,true],"96346":[24500.0,true],"0626":[990.0,true],"0627":[1199.0,true],"413":[880.0,true],"0369":[4800.0,true],"96333":[4800.0,true],"6698":[4800.0,true],"96359":[1440.0,true],"6401":[1650.0,true],"6690":[1240.0,true],"309":[1850.0,true],"13004":[620.0,true],"0529":[1900.0,true],"0810":[590.0,true],"0117":[590.0,true],"278":[590.0,true],"0118":[590.0,true],"0120":[590.0,true],"0122":[590.0,true],"0431":[590.0,true],"0188":[899.0,true],"0637":[2400.0,true],"343":[2400.0,true],"348":[1980.0,true],"344":[2400.0,true],"456":[1480.0,true],"5520":[1480.0,true],"0699":[1410.0,true],"134":[1410.0,true],"528":[1480.0,true],"0645":[1480.0,true],"425":[1480.0,true],"6500":[1410.0,true],"0157":[7900.0,false],"0159":[7900.0,true],"0163":[7900.0,true],"0166":[7900.0,true],"0164":[7900.0,true],"0165":[7900.0,true],"0167":[7900.0,true],"0169":[7900.0,true],"170":[3800.0,false],"520":[1699.0,true],"0089":[3500.0,false],"0197":[3500.0,false],"0652":[2100.0,true],"317":[1100.0,true],"509":[790.0,true],"0132":[5300.0,true],"0195":[5300.0,true],"211":[5300.0,true],"00600":[5300.0,true],"417":[13700.0,true],"6693":[4100.0,true],"0648":[4100.0,true],"245":[1599.0,true],"0129":[6500.0,true],"198":[6500.0,true],"6685":[6500.0,true],"0134":[6500.0,true],"0543":[1050.0,true],"0143":[1610.0,true],"6686":[2180.0,true],"121":[4200.0,true],"0031":[4200.0,true],"0144":[6500.0,true],"0471":[1500.0,true],"533":[2300.0,false],"0145":[2900.0,true],"0202":[1800.0,true],"0153":[6500.0,false],"122":[5976.0,false],"301":[5976.0,false],"173":[5976.0,false],"0823":[8500.0,true],"0155":[5200.0,true],"6672":[1299.0,true],"349":[1310.0,true],"0030":[1270.0,true],"0193":[1090.0,true],"0194":[1090.0,true],"96381":[1090.0,true],"0678":[499.0,true],"0208":[1290.0,true],"0209":[860.0,true],"327":[4200.0,true],"380":[1940.0,true],"491":[3200.0,true],"0021":[3200.0,true],"319":[3200.0,true],"311":[3200.0,true],"0216":[3200.0,true],"521":[6300.0,true],"0654":[3300.0,true],"96374":[4900.0,true],"254":[5200.0,true],"184":[2699.0,true],"96425":[1520.0,true],"0108":[507.0,true],"300":[1790.0,true],"414":[430.0,true],"215":[800.0,true],"0658":[1199.0,true],"402":[1150.0,true],"0521":[1150.0,true],"96395":[1150.0,false],"0272":[1150.0,true],"0583":[1150.0,true],"6680":[12400.0,false],"0009":[25700.0,true],"0227":[699.0,true],"261":[39400.0,true],"0594":[21900.0,true],"248":[27000.0,true],"244":[3490.0,true],"96342":[658.0,true],"523":[658.0,true],"0307":[658.0,true],"0558":[658.0,true],"458":[1380.0,false],"0322":[890.0,false],"0161":[890.0,false],"443":[890.0,true],"0385":[890.0,true],"0653":[890.0,false],"207":[5900.0,true],"96317":[3200.0,true],"0278":[3200.0,false],"265":[3200.0,true],"0243":[3200.0,true],"419":[3200.0,false],"0245":[3200.0,true],"0246":[3200.0,true],"0242":[3200.0,false],"96401":[3200.0,true],"0518":[6100.0,true],"0759":[3300.0,false],"0135":[3300.0,true],"0327":[7900.0,true],"156":[7900.0,false],"0253":[7200.0,true],"0257":[7200.0,true],"0256":[7200.0,true],"0258":[7200.0,true],"0040":[7200.0,true],"0628":[699.0,true],"0898":[2700.0,true],"427":[2700.0,true],"0259":[6900.0,true],"96382":[4800.0,true],"0820":[4900.0,false],"0413":[1430.0,true],"0187":[2300.0,false],"0345":[14900.0,true],"200":[21480.0,true],"0279":[12900.0,true],"96361":[36000.0,true],"0459":[1590.0,true],"0070":[3000.0,false],"346":[3000.0,true],"176":[3000.0,false],"96419":[6900.0,false],"0366":[370.0,true],"0011":[370.0,true],"511":[370.0,true],"0559":[370.0,true],"96408":[4320.0,true],"0297":[28800.0,true],"96405":[1290.0,true],"0288":[1290.0,true],"466":[1290.0,true],"276":[1290.0,true],"0325":[1290.0,true],"0474":[1290.0,true],"357":[1100.0,false],"0317":[490.0,true],"0313":[11700.0,true],"96406":[11700.0,false],"0318":[490.0,true],"0315":[11700.0,true],"0316":[11700.0,true],"500":[5040.0,true],"501":[5040.0,true],"493":[8900.0,true],"250":[7900.0,true],"426":[7900.0,true],"0330":[880.0,false],"0331":[880.0,false],"96362":[880.0,false],"96409":[880.0,false],"0335":[880.0,false],"138":[15800.0,true],"0336":[9400.0,true],"0338":[12800.0,true],"0339":[18600.0,true],"0690":[1160.0,true],"227":[1160.0,true],"96345":[1790.0,true],"0271":[1740.0,true],"6699":[825.0,true],"102":[990.0,true],"0497":[990.0,true],"0520":[990.0,true],"530":[1780.0,true],"429":[15800.0,true],"96370":[17900.0,true],"0282":[18900.0,true],"120":[8800.0,true],"299":[12600.0,true],"498":[19800.0,true],"226":[15900.0,false],"0214":[1180.0,true],"0344":[1240.0,true],"0346":[1240.0,true],"0692":[2600.0,true],"0693":[2600.0,true],"0694":[2600.0,true],"96424":[2990.0,true],"444":[2990.0,true],"0353":[1230.0,true],"0354":[1230.0,true],"0355":[930.0,true],"0356":[930.0,true],"0085":[11100.0,true],"0211":[1740.0,true],"0398":[1740.0,true],"106":[1740.0,true],"0314":[33492.0,true],"6676":[33492.0,true],"316":[31200.0,true],"150":[4800.0,false],"0365":[4200.0,false],"0370":[9600.0,false],"0372":[9600.0,true],"294":[13600.0,true],"0378":[8400.0,true],"0506":[1100.0,true],"175":[780.0,true],"260":[740.0,true],"304":[7400.0,true],"0010":[660.0,true],"0783":[1140.0,true],"0740":[5900.0,true],"0773":[14700.0,true],"0682":[1290.0,true],"450":[5200.0,true],"0781":[980.0,true],"0720":[980.0,false],"0013":[880.0,true],"0679":[880.0,true],"356":[14300.0,true],"432":[11430.0,false],"448":[12900.0,false],"218":[2640.0,true],"96365":[7600.0,true],"0397":[6300.0,true],"12000":[11800.0,true],"96368":[11800.0,true],"89031":[17900.0,false],"0631":[12300.0,true],"0580":[1490.0,false],"96352":[1590.0,true],"0123":[1430.0,true],"0407":[12900.0,true],"0110":[6700.0,true],"0309":[6700.0,true],"291":[6700.0,true],"368":[6700.0,true],"0410":[3996.0,true],"0408":[3996.0,true],"0411":[3996.0,true],"0412":[3996.0,true],"0002":[3996.0,true],"0415":[9900.0,true],"0414":[4940.0,true],"505":[6500.0,true],"0203":[810.0,false],"253":[810.0,false],"0892":[1430.0,false],"381":[1430.0,false],"469":[5800.0,false],"96328":[5800.0,false],"0481":[5000.0,true],"0302":[9900.0,true],"0301":[9900.0,true],"0075":[5000.0,true],"0300":[9900.0,true],"6696":[4800.0,false],"20325":[6100.0,false],"0463":[3705.0,true],"454":[1470.0,true],"0386":[1470.0,true],"0499":[690.0,true],"135":[620.0,true],"0435":[690.0,true],"0390":[750.0,true],"0672":[690.0,true],"160":[5900.0,true],"0200":[5900.0,true],"0440":[20800.0,true],"96415":[725.0,false],"0402":[725.0,false],"96428":[725.0,false],"0684":[725.0,false],"439":[7200.0,true],"418":[7200.0,true],"0428":[7200.0,true],"96343":[7400.0,true],"0515":[12480.0,false],"105":[4720.0,false],"0752":[5800.0,false],"434":[4900.0,true],"0395":[9900.0,true],"0226":[4400.0,false],"0811":[740.0,true],"0442":[930.0,true],"0444":[1799.0,true],"0445":[9800.0,false],"0510":[3900.0,true],"494":[3900.0,true],"0446":[1030.0,true],"0609":[890.0,false],"0190":[7200.0,false],"285":[7200.0,true],"0618":[420.0,true],"0448":[890.0,true],"230":[960.0,true],"257":[890.0,true],"0451":[890.0,true],"0452":[890.0,true],"0453":[890.0,true],"0455":[1560.0,true],"0456":[1260.0,true],"0458":[1560.0,true],"0460":[1260.0,true],"0274":[1590.0,true],"0464":[15000.0,true],"220":[2000.0,true],"0697":[16500.0,true],"0698":[16500.0,true],"275":[4990.0,true],"66545":[4990.0,true],"0273":[4990.0,true],"0304":[4990.0,true],"0766":[4990.0,true],"0467":[7200.0,true],"115":[7200.0,true],"96427":[960.0,true],"0487":[960.0,true],"0468":[960.0,true],"0469":[960.0,true],"0470":[960.0,true],"0472":[960.0,true],"0473":[960.0,true],"464":[3680.0,true],"239":[1090.0,true],"463":[3680.0,true],"6655":[3400.0,true],"6657":[3400.0,true],"6656":[3400.0,true],"374":[1980.0,true],"0701":[1980.0,true],"0702":[1980.0,true],"0700":[1980.0,true],"6670":[1650.0,true],"0210":[1650.0,true],"0563":[1650.0,true],"527":[1650.0,true],"96377":[1080.0,true],"352":[3600.0,true],"353":[3600.0,true],"354":[3600.0,true],"189":[1290.0,false],"370":[540.0,true],"0480":[9900.0,false],"499":[10800.0,false],"0476":[10400.0,true],"0482":[13600.0,true],"506":[1240.0,false],"144":[6890.0,true],"0483":[15360.0,true],"194":[630.0,true],"0549":[2400.0,true],"336":[3900.0,true],"337":[3900.0,true],"0713":[3900.0,true],"0714":[3900.0,true],"341":[3900.0,true],"338":[3900.0,true],"340":[3900.0,true],"0715":[1290.0,true],"0716":[2490.0,true],"385":[5400,true],"391":[5400,true],"386":[5400,true],"390":[5400,true],"388":[5400,false],"383":[5400,true],"384":[5400,true],"387":[5400,true],"397":[5400,true],"396":[5400,true],"392":[5400,true],"96396":[5400,true],"437":[5400,true],"0660":[5400,true],"0485":[27200.0,true],"0486":[20200.0,true],"0488":[21600.0,true],"0098":[10300.0,true],"306":[16000.0,true],"0490":[6500.0,true],"141":[4800.0,true],"96379":[1430.0,false],"0493":[1050.0,true],"00514":[9500.0,true],"0522":[9500.0,true],"284":[9500.0,true],"0348":[4700.0,true],"0496":[4700.0,false],"0516":[4700.0,true],"0505":[7200.0,false],"0068":[7200.0,true],"96369":[10500.0,true],"0507":[10500.0,true],"0140":[1490.0,true],"334":[2980.0,true],"335":[2980.0,true],"364":[2980.0,true],"0722":[5800.0,true],"0604":[3100.0,true],"0721":[5800.0,true],"0603":[3100.0,true],"0601":[3100.0,true],"330":[2980.0,true],"329":[2980.0,true],"96385":[3100.0,true],"0201":[3100.0,true],"332":[2980.0,true],"333":[2980.0,true],"331":[2980.0,true],"0725":[5800.0,true],"0724":[5800.0,true],"0602":[3100.0,true],"447":[24400.0,true],"094":[799.0,true],"96404":[1790.0,false],"0281":[1790.0,true],"96387":[1890.0,true],"0427":[899.0,true],"0687":[899.0,true],"0186":[1790.0,false],"0504":[1790.0,true],"0172":[1699.0,true],"0367":[1699.0,false],"0685":[1520.0,true],"0391":[1790.0,true],"01021":[1980.0,true],"0517":[1320.0,true],"0734":[3600.0,true],"0735":[3600.0,true],"0639":[3400.0,true],"0519":[7200.0,true],"0523":[2440.0,false],"0524":[2570.0,true],"0513":[2100.0,true],"0029":[3400.0,true],"0501":[3400.0,true],"0525":[7600.0,false],"0526":[7600.0,false],"0527":[7600.0,true],"0528":[7600.0,true],"0531":[7600.0,true],"0532":[7600.0,true],"0533":[7600.0,false],"0534":[7600.0,true],"0535":[7600.0,false],"0536":[7600.0,true],"0537":[7600.0,false],"0538":[7600.0,false],"0541":[8500.0,true],"302":[1430.0,true],"0387":[2300.0,true],"0542":[12600.0,true],"0545":[12600.0,true],"0544":[12600.0,true],"0546":[12600.0,true],"297":[4100.0,true],"89574":[4100.0,true],"097":[3800.0,true],"465":[3100.0,false],"525":[6400.0,true],"6695":[2800.0,true],"339":[599.0,false],"0562":[1140.0,true],"325":[1580.0,true],"6400":[1899.0,false],"0104":[14400.0,true],"0285":[14400.0,true],"369":[14400.0,true],"0484":[6888.0,true],"453":[990.0,true],"497":[990.0,true],"0643":[860.0,true],"0015":[1290.0,true],"0189":[1290.0,true],"96422":[1290.0,true],"96315":[1290.0,false],"96339":[1290.0,true],"0561":[735.0,true],"0560":[1790.0,true],"252":[1290.0,true],"0984":[1290.0,true],"0651":[1290.0,true],"0738":[2290.0,true],"213":[970.0,false],"095":[890.0,true],"0564":[310.0,true],"0037":[10400.0,true],"0567":[6500.0,false],"0080":[8900.0,true],"0569":[11000.0,true],"157":[9800.0,true],"0625":[9504.0,true],"0574":[2300.0,true],"287":[790.0,false],"0575":[860.0,true],"307":[1490.0,true],"6682":[1490.0,true],"085":[1490.0,true],"529":[1490.0,true],"0371":[10900.0,true],"0775":[2150.0,true],"433":[2150.0,true],"0666":[2150.0,true],"394":[1790.0,true],"0751":[1790.0,true],"0745":[1790.0,true],"0585":[3900.0,true],"120001":[4990.0,true],"283":[4900.0,true],"405":[4900.0,true],"96353":[4900.0,true],"0787":[4900.0,true],"482":[4900.0,true],"272":[4900.0,true],"96410":[4900.0,true],"0264":[4900.0,true],"96371":[4900.0,true],"96367":[4900.0,true],"0514":[4990.0,true],"0039":[6912.0,true],"0586":[4990.0,true],"0711":[4990.0,true],"292":[4990.0,true],"96397":[8900.0,true],"96426":[4990.0,true],"186":[8600.0,false],"0587":[4990.0,true],"96413":[4990.0,true],"084":[4990.0,true],"093":[4990.0,true],"379":[4900.0,true],"0466":[4990.0,true],"289":[699.0,true],"0287":[699.0,true],"376":[699.0,true]};
  const find = id => {
    const p = products.find(p => p.id === id);
    if (!p) throw new Error(`Missing catalog family: ${id}`);
    return p;
  };
  const variant = (id, code) => {
    const v = find(id).variants.find(v => v.code === code);
    if (!v) throw new Error(`Missing catalog code: ${code}`);
    return v;
  };
  const extra = [];
  const removeVariant = (id, code) => {
    const p = find(id);
    p.variants = p.variants.filter(v => v.code !== code);
    delete p.coverImages;
  };
  const addProduct = (id, code, name, category, unit, image) => {
    extra.push({id, code, codes:[code], name, category, price:0, unit, image, variants:[], catalog:true, skuCount:1});
  };
  removeVariant('catalog-copadas-galletitas', '417');
  addProduct('catalog-cremino-surtidos', '417', 'Cremino Caramelos Surtidos', 'Golosinas y chocolates', 'Bolsa 940 g', 'assets/catalog/variants/cremino-940g-20261013.webp');
  find('catalog-copadas-galletitas').name = 'Copadas Galletitas con Chips';
  find('catalog-copadas-galletitas').image = find('catalog-copadas-galletitas').variants[0].image;
  removeVariant('catalog-tokke-chocolates', '0039');
  addProduct('catalog-yummy-croack-xl', '0039', 'Yummy Croack XL Aireado', 'Golosinas y chocolates', 'Display x 24 unidades · 20 g c/u', 'assets/products/174-20261012.webp');
  removeVariant('catalog-pipa-semillas', '0466');
  find('catalog-yummy-gomitas-x12').variants.push({name:'Terror x 12',code:'0466',price:4990,presentation:'Display x 12 · 30 g c/u',image:'assets/catalog/variants/yummy-terror-30g-individual-20261013.png'});
  delete find('catalog-yummy-gomitas-x12').coverImages;
  const croack = find('catalog-pdf-283');
  Object.assign(croack, {name:'Yummy Gomitas Croack',category:'Golosinas y chocolates',pdfCategory:'Golosinas y chocolates',unit:'Bolsa 500 g',image:'assets/products/165-20261012.webp'});
  const nucita = find('catalog-pdf-0200');
  Object.assign(nucita, {name:'Nucita Frutilla',unit:'Display x 48 unidades',image:'assets/products/163-20261012.webp'});
  Object.assign(find('catalog-pdf-160'), {image:'assets/products/163-20261012.webp'});
  const budin = find('catalog-pdf-0386');
  budin.name = 'Budín Fantasía Nevares';
  Object.assign(variant(budin.id,'0386'),{name:'Chocolate 160 g',presentation:'Budín 160 g · caja x 10',image:'assets/products/159-20261012.webp'});
  Object.assign(variant(budin.id,'454'),{name:'Limón 160 g',presentation:'Budín 160 g · caja x 10',image:'assets/products/159-20261012.webp'});
  budin.image='assets/products/159-20261012.webp';delete budin.coverImages;
  Object.assign(find('catalog-pdf-0397'),{name:'Caramelos Masticables Misky Surtidos',image:'assets/products/154-20261012.webp'});
  Object.assign(find('catalog-bon-o-bon-clasico'),{name:'Bon o Bon Original',image:'assets/products/161-20261012.webp'});
  Object.assign(find('catalog-push-pop-duo'),{name:'Push Pop',image:'assets/products/151-20261012.webp'});
  Object.assign(find('catalog-vocacion-clasica'),{name:'Vocación Acaramelada',image:'assets/catalog/variants/vocacion-acaramelada-20261013.jpg'});
  Object.assign(find('catalog-cereal-yogur'),{name:'Cereal Mix Yogur Frutilla'});
  Object.assign(variant('catalog-cereal-fort','0810'),{name:'Action',image:'assets/catalog/variants/cereal-fort-action.png'});
  Object.assign(variant('catalog-cereal-fort','0118'),{name:'Flekos',image:'assets/catalog/variants/cereal-fort-flekos-20261013.jpg'});
  delete find('catalog-cereal-fort').coverImages;
  variant('catalog-gillette-maquinas','0279').presentation='Tira x 12 unidades';
  Object.assign(variant('catalog-trio-galletitas','0984'),{name:'Tri Choc',presentation:'Paquete 300 g · caja x 12',image:'assets/catalog/variants/trio-trichoc-300g-20261013.png'});
  variant('catalog-trio-galletitas','0015').presentation='Paquete 300 g · caja x 10';
  variant('catalog-trio-galletitas','0189').presentation='Paquete 300 g · caja x 10';
  variant('catalog-trio-galletitas','0651').presentation='Paquete 300 g · caja x 10';
  delete find('catalog-trio-galletitas').coverImages;
  Object.assign(variant('catalog-hamlet-chocolates','0335'),{name:'Surtido',presentation:'Tableta 45 g'});
  delete find('catalog-hamlet-chocolates').coverImages;
  find('catalog-toconato-pepas').variants.push({name:'Pepas de membrillo 400 g',code:'0562',price:1140,presentation:'Paquete 400 g · caja x 12',image:'assets/catalog/toconato-pepas.webp'});
  delete find('catalog-toconato-pepas').coverImages;
  find('catalog-pdf-96352').variants.push({name:'Mediatarde Sandwich tripack',code:'96352',price:1590,presentation:'Pack familiar x 3 · caja x 16',image:'assets/products/169-20261012.webp'});
  delete find('catalog-pdf-96352').coverImages;
  for (const id of ['catalog-pdf-283','catalog-pdf-0200','catalog-pdf-160','catalog-pdf-0397','catalog-bon-o-bon-clasico','catalog-push-pop-duo','catalog-vocacion-clasica']) delete find(id).coverImages;
  // Use the supplier photos explicitly supplied by the owner for the full catalog.
  const photo = name => `assets/catalog/variants/${name}-corregida-20261013.png`;
  find('catalog-pdf-120').image='assets/catalog/variants/higienico-lye-30-rollos-20261013.png';
  delete find('catalog-pdf-120').coverImages;
  find('catalog-pdf-287').image='assets/catalog/variants/velas-largas-el-conde-x4-20261013.png';
  delete find('catalog-pdf-287').coverImages;
  variant('catalog-bon-mase-bizcochuelo','0066').image='assets/catalog/variants/bon-mase-bizcochuelo-vainilla-20261013.png';
  variant('catalog-bon-mase-bizcochuelo','0324').image='assets/catalog/variants/bon-mase-bizcochuelo-chocolate-20261013.png';
  find('catalog-bon-mase-bizcochuelo').image=variant('catalog-bon-mase-bizcochuelo','0066').image;
  delete find('catalog-bon-mase-bizcochuelo').coverImages;
  find('catalog-vocacion-clasica').image=photo('vocacion-acaramelada');
  variant('catalog-cilo-galletitas','5520').image=photo('cilo-anillos-vainilla');
  delete find('catalog-cilo-galletitas').coverImages;
  variant(budin.id,'0386').image=photo('nevares-budin-chocolate');
  variant(budin.id,'454').image=photo('nevares-budin-limon');
  budin.image=photo('nevares-budin-chocolate');
  variant('catalog-pdf-96352','96352').image=photo('mediatarde-sandwich-tripack');
  find('catalog-pdf-96352').image=photo('mediatarde-sandwich-tripack');
  find('catalog-bon-o-bon-clasico').image=photo('bon-o-bon-original');
  find('catalog-push-pop-duo').image=photo('push-pop');
  find('catalog-pdf-0397').image=photo('misky-masticables-surtidos');
  extra.find(p=>p.id==='catalog-yummy-croack-xl').image=photo('yummy-croack-xl');
  const removeProduct = p => {
    for(let batch=1;batch<=98;batch++) {
      const list=window[`CATALOG_PRODUCTS_BATCH${batch}`]||[];
      const index=list.indexOf(p);if(index>=0)list.splice(index,1);
    }
    products.splice(products.indexOf(p),1);
  };
  const bicolor=find('catalog-pdf-160');
  bicolor.name='Nucita Bicolor y Frutilla';bicolor.code='';bicolor.image=photo('nucita-bicolor');
  bicolor.variants=[
    {name:'Bicolor',code:'160',price:5900,presentation:'Display x 48 unidades',image:photo('nucita-bicolor')},
    {name:'Frutilla',code:'0200',price:5900,presentation:'Display x 48 unidades',image:photo('nucita-frutilla')}
  ];
  bicolor.migratedFrom=[{id:bicolor.id,variant:'Bicolor'},{id:nucita.id,variant:'Frutilla'}];
  removeProduct(nucita);
  const gummies=find('catalog-yummy-gomitas');
  croack.name='Yummy Gomitas 500 g';croack.image='assets/catalog/variants/yummy-croack-500g-individual-20261013.png';
  croack.variants=[...gummies.variants,{name:'Croack 500 g',code:'283',price:4900,presentation:'Bolsa 500 g',image:croack.image}];
  croack.migratedVariantsFrom=gummies.variants.map(v=>({id:gummies.id,sourceVariant:v.name,variant:v.name}));
  croack.migratedFrom=[{id:croack.id,variant:'Croack 500 g'}];
  removeProduct(gummies);
  for (const p of [...products,...extra]) {
    const variants=p.variants||[];
    for (const v of (variants.length ? variants : [p])) {
      v.code=aliases[v.code]||v.code;
      const row=rows[v.code];
      if (!row) throw new Error(`PDF is missing catalog code: ${v.code}`);
      v.price=row[0]; v.inStock=row[1];
      if(p.id==='catalog-rinde-dos')v.presentation='Display x 10 sobres · $540 c/u';
      // Owner confirmed that both Tereré varieties are unavailable.
      if(p.id==='catalog-rinde-dos'&&['437','0660'].includes(v.code))v.inStock=false;
    }
    p.codes=(variants.length?variants:[p]).map(v=>v.code);
    p.skuCount=new Set(p.codes).size;
    if(variants.length){
      p.price=0;p.inStock=variants.some(v=>v.inStock);
      if (/^\d+ opciones disponibles$/.test(p.unit || '')) p.unit=`${variants.length} ${variants.length===1?'opción disponible':'opciones disponibles'}`;
    }
    if(p.id==='catalog-rinde-dos')p.unit='Display x 10 sobres · $540 c/u';
  }
  window.CATALOG_PRODUCTS_BATCH99=extra;
})();
