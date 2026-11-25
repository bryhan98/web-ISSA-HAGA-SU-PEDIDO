const WHATSAPP_NUMBER = '5491168259465';
const PRODUCTS = [
  ["174","Yummy Croack XL aireado","Golosinas",6912,"Caja x 24 · 20 g ($288 c/u)","023_Billiken_cod_174.png"],
  ["17","Alteza chocolate para taza","Almacén",1990,"C/U · 90 g","001_Alteza_cod_17.png"],
  ["129","Caramelos Arcor","Golosinas",0,"Bolsas de 810 g / 335 g","002_Arcor_cod_129.png"],
  ["oferta-saladix","Saladix Tira","Golosinas",4620,"Tira x 6 · 40 g ($770 c/u)","003_SALADIX.png"],
  ["107","Misky gomitas","Golosinas",5000,"Bolsa x 500 g · caja x 12","004_Arcor_cod_107.png"],
  ["134","Turrón Misky de maní","Golosinas",11000,"Caja x 50 · 25 g ($220 c/u)","005_Arcor_cod_134.png"],
  ["158","Misky gomitas 1 kg","Golosinas",9900,"Bolsa x 1 kg","007_Arcor_cod_158.png"],
  ["12","Bull Dog regaliz multicolor","Golosinas",16800,"Caja x 24 · 19 g ($700 c/u)","011_Billiken_cod_12.png"],
  ["80","Bull Dog pastillas","Golosinas",4680,"Pack x 12 · 30 g ($390 c/u)","013_Billiken_cod_80.png"],
  ["166","Billiken Gongys","Golosinas",370,"C/U · 28 g","016_Billiken_cod_166.png"],
  ["67","TNT Sour Blocks cubos ácidos","Golosinas",2800,"Bolsa x 250 g","050_Rican_cod_67.png"],
  ["115","Espirales Búho repelente","Cuidado",0,"Paquetes x 12 / x 4","024_Buho_cod_115.png"],
  ["140","Encendedores Fuegolandia","Hogar",5200,"Display x 25 · $208 c/u","030_Fuegolandia_cod_140.png"],
  ["143","Alfajores Fulbito","Alfajores",9080,"Caja x 44 · 30 g ($227 c/u)","031_Fulbito_cod_143.png"],
  ["130","Glin's galletitas rellenas Frutilla","Galletitas",1590,"C/U · 200 g","033_Glin_s_cod_130.png"],
  ["50","Play Pop mini paletas","Golosinas",1800,"Pack x 50 · 4,5 g ($36 c/u)","037_Lheritier_cod_50.png"],
  ["170","Mayonesa Natura","Almacén",13500,"Caja x 20 · 125 cm³ ($675 c/u)","039_Natura_cod_170.png"],
  ["011","Cubanitos Oblita Nougat x 48","Galletitas",4100,"Caja x 48 · 5,5 g ($85,42 c/u)","042_Oblita_cod_011.png"],
  ["012","Cubanitos Oblita Marroc x 48","Galletitas",4100,"Caja x 48 · 5,5 g ($85,42 c/u)","043_Oblita_cod_012.png"],
  ["33","Frutomila masticables rellenos","Golosinas",4800,"Bolsa x 500 g","045_Peccin_cod_33.png"],
  ["86","Estrellitas frutales","Golosinas",4900,"Pack x 100 · 230 g ($49 c/u)","070_Open_Candy_cod_86.png"],
  ["8","Rompe Muelas","Golosinas",4800,"Pack x 50 · 11 g ($96 c/u)","053_Rompe_Muelas_cod_8.png"],
  ["131","Turimar galletitas surtidas","Galletitas",890,"C/U · 170 g · caja x 36","058_Turimar_cod_131.png"],
  ["157","Pan dulce Fantoche con chips","Galletitas",31920,"Caja x 8 · 400 g ($3.990 c/u)","063_Fantoche_cod_157.png"],
  ["oferta-fierita-chicle","Fierita chicle globo","Golosinas",3500,"Display x 100 ($35 c/u)","065_FIERITA X 100.png"],
  ["oferta-fierita-relleno","Fierita chicle relleno","Golosinas",3300,"Display x 50 ($66 c/u)","066_RELLENOS FIERITAS.png"],
  ["oferta-pinballs","Open Candy Pinballs masticable","Golosinas",4800,"Bolsa x 200 unidades","067_pinballs masticable.png"],
  ["oferta-tennis","Chicle Open Candy Tennis","Golosinas",3600,"Display x 30 ($120 c/u)","068_TENNIS.png"],
  ["oferta-maestros-chicle","Fierita chicle relleno Maestros del Terror","Golosinas",3300,"Display x 50 ($66 c/u)","069_FIERITA MAESTROS DEL TERROR X 50 UN.png"],
  ["oferta-fierita-tatto","Fierita chupetín Tatto","Golosinas",6800,"Display x 50 ($136 c/u)","070_MAESTROS DEL TERRROR.png"],
  ["oferta-turron-fulbito","Turrón Fulbito","Golosinas",7750,"Pack x 50 · 25 g ($155 c/u)","097_TURRON FULBITO.png"],
  ["oferta-bel-bombones","Bel bombones surtidos","Golosinas",5900,"Bolsa x 450 g","074_bel.png"],
  ["3","Bel monedas de chocolate","Golosinas",14200,"Estuche x 100 · 370 g ($142 c/u)","075_Bel_cod_3.png"],
  ["oferta-solitas-160","Solitas Ekin galletitas","Galletitas",955,"C/U · 160 g · caja x 25","076_SOLITAS 160g.png"],
  ["oferta-solitas-400","Solitas galletitas con confites","Galletitas",0,"Caja x 10 · 400 g","083_SOLITAS 400g.png"],
  ["oferta-mafaldas","Mafalda bizcochos de hojaldre","Galletitas",960,"C/U · 150 g · caja x 18","085_MAFALDAS.png"],
  ["oferta-open-paletas","Open Candy chupetín Patitas","Golosinas",5900,"Bolsa x 100 · 400 g ($59 c/u)","086_OPEN PALETAS.png"],
  ["oferta-turimar-chips","Turimar galletitas con chips","Galletitas",980,"C/U · 150 g · caja x 36","092_TURIMAR.png"],
  ["oferta-natura-250","Mayonesa Natura 250 cm³","Almacén",18300,"Caja x 12 · 250 cm³ ($1.525 c/u)","093_NATURAS.png"],
  ["oferta-quesera","Queso rallado La Quesera","Almacén",13900,"Caja x 20 · 40 g ($695 c/u)","096_QUESERA.png"],
  ["oferta-tosti-arroz","Tosti galleta de arroz","Almacén",11280,"Pack x 12 · 110 g ($940 c/u)","166.png"],
  ["oferta-puloil","Jabón Puloil en pan","Hogar",590,"C/U · 150 g","099_puloil.png"],
  ["126","Pipas Clásicas","Golosinas",7200,"Display x 30 · 18 g ($240 c/u)","126.png"],
  ["127","Pipas Gigantes","Golosinas",7200,"Display x 12 · 50 g ($600 c/u)","127.png"],
  ["oferta-nevares-budin","Nevares Budín Fantasía","Galletitas",14700,"Caja x 10 · 160 g ($1.470 c/u)","159.png"],
  ["oferta-zupay","Zupay Obleas","Galletitas",599,"C/U · 100 g","160.png"],
  ["oferta-pelotitas","Chupetín Lheritier Pelotitas","Golosinas",2600,"Bolsa x 50 · 450 g","161.png"],
  ["150","Ring Pop","Golosinas",6720,"Display x 24 ($280 c/u)","162.png"],
  ["100","Tocoñato Pepas","Galletitas",0,"200 g / 400 g","163.png"],
  ["oferta-billiken-masticables","Caramelos masticables Billiken","Golosinas",5200,"Bolsa x 700 g","165.png"],
  ["oferta-palitos-selva","Palitos de la Selva","Golosinas",10300,"Bolsa x 600 g (146 unidades)","palito de la selva.png"],
  ["oferta-pan-dulce-donsatur-chips","Pan dulce Don Satur con chips","Galletitas",22740,"Caja x 6 · 400 g ($3.790 c/u)","Pan Dulce Don Satur con Chips.png"],
  ["175","Jugo Rinde Dos","Bebidas",0,"Display x 10 · 10 sabores","Promoción mayorista Rinde Dos ISSA.png"],
  ["85","Tosti tostadas clásicas","Almacén",12960,"Caja x 12 · 200 g ($1.080 c/u)","167.png"],
  ["oferta-aceitunas-nicanor","Aceitunas Don Nicanor","Almacén",0,"Clásicas 170 g / Descarozadas 140 g","168.png"],
  ["oferta-cilo-lenguitas","Cilo galletitas Lengüitas","Galletitas",1540,"C/U · 400 g · caja x 12","170.png"],
  ["oferta-cilo-300","Cilo galletitas 300 g","Galletitas",1540,"C/U · 300 g · caja x 12","171.png"],
  ["oferta-full-mani","Georgalos Full Maní","Golosinas",12000,"Display x 15 · 30 g ($800 c/u)","FULL MANI.png"],
  ["154","Caramelos masticables Misky surtidos","Golosinas",6990,"Bolsa x 800 g","misky.png"],
  ["oferta-pan-dulce-donsatur-frutas","Pan dulce Don Satur con frutas","Galletitas",22140,"Caja x 6 · 400 g ($3.690 c/u)","Oferta navideña de pan dulce Don Satur.png"],
  ["oferta-budin-pozo","Budín Pozo","Galletitas",1080,"C/U · 170 g · caja x 20","Promoción navideña de budines Pozo.png"]
].map(([id,name,category,price,unit,file])=>({id,code:id.startsWith('oferta-')?'—':id,name,category,price,unit,image:`assets/offers-20261123/${encodeURIComponent(file)}`}));

const VARIANTS = {
  "129":[["Menta Cristal · 810 g",12900],["Miel & Menta · 335 g",4940]],
  "oferta-saladix":[["Jamón",4620],["Pizza",4620]],
  "107":[["Dientitos",5000],["Gusanitos ácidos",5000]],
  "158":[["Eucalipto · 1 kg",9900],["Fantasía · 1 kg",9900],["Jelly Roll · 1 kg",9900]],
  "80":[["Tutti",4680],["Uva / Mandarina",4680],["Uva",4680],["Tutti / Limón",4680],["Sandía",4680],["Sandía / Manzana",4680]],
  "166":[["Clásico",370],["Nubecitas",370],["Frutilla",370]],
  "115":[["Paquete x 12 unidades",1690],["Paquete x 4 unidades",620]],
  "143":[["Chocolate",9080],["Maní",9080],["Black",9080]],
  "oferta-fierita-chicle":[["Menta",3500],["Uva",3500],["Banana",3500],["Tutti",3500],["Frutilla",3500]],
  "oferta-fierita-relleno":[["Menta",3300],["Frutilla",3300],["Tutti",3300]],
  "oferta-maestros-chicle":[["Arándano",3300],["Frutilla",3300],["Mandarina",3300]],
  "oferta-fierita-tatto":[["Maestros del Terror · Multifruita",6800],["Frutilla",6800]],
  "oferta-solitas-160":[["Chocolate · 160 g",955],["Vainilla · 160 g",955]],
  "oferta-solitas-400":[["Dulces Números · Caja x 10 · 400 g ($1.699 c/u)",16990],["Abecedario · Caja x 10 · 400 g ($1.755 c/u)",17550]],
  "oferta-mafaldas":[["Triángulo · 150 g",960],["Larguitas · 150 g",960]],
  "oferta-nevares-budin":[["Chocolate · Caja x 10 · 160 g",14700],["Limón · Caja x 10 · 160 g",14700]],
  "oferta-zupay":[["Frutilla · 100 g",599],["Chocolate · 100 g",599],["Vainilla · 100 g",599]],
  "oferta-pelotitas":[["Frutal · Bolsa x 50",2600],["Dulce de Leche · Bolsa x 50",2600]],
  "100":[["200 g · C/U (caja x 24)",660],["400 g · Caja x 12 ($1.140 c/u)",13680]],
  "oferta-billiken-masticables":[["Dropsy Selva · Bolsa x 700 g",5200],["Bull Dog · Bolsa x 700 g",5200]],
  "175":[
    ["Naranja / Banana · 1 a 5 displays ($540 c/u)",5400],
    ["Naranja / Banana · 6+ displays ($525 c/u)",5250],
    ["Naranja / Durazno · 1 a 5 displays ($540 c/u)",5400],
    ["Naranja / Durazno · 6+ displays ($525 c/u)",5250],
    ["Frutilla · 1 a 5 displays ($540 c/u)",5400],
    ["Frutilla · 6+ displays ($525 c/u)",5250],
    ["Ananá · 1 a 5 displays ($540 c/u)",5400],
    ["Ananá · 6+ displays ($525 c/u)",5250],
    ["Pomelo rosado · 1 a 5 displays ($540 c/u)",5400],
    ["Pomelo rosado · 6+ displays ($525 c/u)",5250],
    ["Pera · 1 a 5 displays ($540 c/u)",5400],
    ["Pera · 6+ displays ($525 c/u)",5250],
    ["Mix frutal · 1 a 5 displays ($540 c/u)",5400],
    ["Mix frutal · 6+ displays ($525 c/u)",5250],
    ["Limón · 1 a 5 displays ($540 c/u)",5400],
    ["Limón · 6+ displays ($525 c/u)",5250],
    ["Durazno · 1 a 5 displays ($540 c/u)",5400],
    ["Durazno · 6+ displays ($525 c/u)",5250],
    ["Naranja · 1 a 5 displays ($540 c/u)",5400],
    ["Naranja · 6+ displays ($525 c/u)",5250]
  ],
  "oferta-aceitunas-nicanor":[["Clásicas · 170 g",1200],["Descarozadas · 140 g",1240]],
  "oferta-cilo-300":[["Chips · 300 g",1540],["Topings · 300 g",1540]],
  "oferta-budin-pozo":[["Vainilla · 170 g",1080],["Con Frutas · 170 g",1080],["Con Chips · 170 g",1080],["Marmolado · 170 g",1080],["Relleno Dulce de Leche · 170 g",1080]]
};
PRODUCTS.forEach(p=>{p.price=Number(p.price)||0;p.variants=(VARIANTS[p.id]||[]).map(([name,price])=>({name,price:Number(price)||0}))});
const BATCH1_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH1||[];
const BATCH2_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH2||[];
const BATCH3_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH3||[];
const BATCH4_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH4||[];
const BATCH5_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH5||[];
const BATCH6_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH6||[];
const BATCH7_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH7||[];
const BATCH8_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH8||[];
const BATCH9_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH9||[];
const BATCH10_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH10||[];
const BATCH11_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH11||[];
const BATCH12_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH12||[];
const BATCH13_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH13||[];
const BATCH14_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH14||[];
const BATCH15_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH15||[];
const BATCH16_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH16||[];
const BATCH17_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH17||[];
const BATCH18_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH18||[];
const BATCH19_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH19||[];
const BATCH20_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH20||[];
const BATCH21_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH21||[];
const BATCH22_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH22||[];
const BATCH23_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH23||[];
const BATCH24_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH24||[];
const BATCH25_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH25||[];
const BATCH26_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH26||[];
const BATCH27_CATALOG_PRODUCTS=window.CATALOG_PRODUCTS_BATCH27||[];
const SUPPLIER_CATALOG_PRODUCTS=[...BATCH2_CATALOG_PRODUCTS,...BATCH3_CATALOG_PRODUCTS,...BATCH4_CATALOG_PRODUCTS,...BATCH5_CATALOG_PRODUCTS,...BATCH6_CATALOG_PRODUCTS,...BATCH7_CATALOG_PRODUCTS,...BATCH8_CATALOG_PRODUCTS,...BATCH9_CATALOG_PRODUCTS,...BATCH10_CATALOG_PRODUCTS,...BATCH11_CATALOG_PRODUCTS,...BATCH12_CATALOG_PRODUCTS,...BATCH13_CATALOG_PRODUCTS,...BATCH14_CATALOG_PRODUCTS,...BATCH15_CATALOG_PRODUCTS,...BATCH16_CATALOG_PRODUCTS,...BATCH17_CATALOG_PRODUCTS,...BATCH18_CATALOG_PRODUCTS,...BATCH19_CATALOG_PRODUCTS,...BATCH20_CATALOG_PRODUCTS,...BATCH21_CATALOG_PRODUCTS,...BATCH22_CATALOG_PRODUCTS,...BATCH23_CATALOG_PRODUCTS,...BATCH24_CATALOG_PRODUCTS,...BATCH25_CATALOG_PRODUCTS,...BATCH26_CATALOG_PRODUCTS,...BATCH27_CATALOG_PRODUCTS];
const CATALOG_SECTIONS = [
  {name:'Galletitas y panificados',ids:['catalog-amor-galletitas','catalog-bon-mase-pionono','catalog-chocolinas','catalog-merengadas','catalog-glins-frutilla','catalog-mafalda-mini-bizcochos','catalog-lia-surtido','catalog-pdf-96352','catalog-terepin-pepas','catalog-toconato-pepas','catalog-tosti','catalog-trio-galletitas','catalog-turimar',...BATCH24_CATALOG_PRODUCTS.filter(p=>p.category==='Galletitas y panificados').map(p=>p.id),...BATCH25_CATALOG_PRODUCTS.filter(p=>p.category==='Galletitas y panificados').map(p=>p.id),...BATCH26_CATALOG_PRODUCTS.filter(p=>p.category==='Galletitas y panificados').map(p=>p.id),...BATCH27_CATALOG_PRODUCTS.filter(p=>p.category==='Galletitas y panificados').map(p=>p.id)]},
  {name:'Obleas, turrones y bocaditos',ids:['catalog-cubanitos-oblita','catalog-fantoche-oblea-big','catalog-oblea-bonobon','catalog-oblita-obleas','catalog-oblita-oblibon','catalog-turron-oblita','catalog-zupay-obleas']},
  {name:'Alfajores',ids:[...BATCH1_CATALOG_PRODUCTS.filter(p=>p.category==='Alfajores').map(p=>p.id),...BATCH24_CATALOG_PRODUCTS.filter(p=>p.category==='Alfajores').map(p=>p.id),...BATCH25_CATALOG_PRODUCTS.filter(p=>p.category==='Alfajores').map(p=>p.id),...BATCH26_CATALOG_PRODUCTS.filter(p=>p.category==='Alfajores').map(p=>p.id),...BATCH27_CATALOG_PRODUCTS.filter(p=>p.category==='Alfajores').map(p=>p.id)]},
  {name:'Jugos y bebidas',ids:['catalog-baggio-200','catalog-rinde-dos','catalog-tang']},
  {name:'Café, té y yerba',ids:['catalog-dolca-50','catalog-te-taragui','catalog-yerba-don-arregui','catalog-yerba-insignia','catalog-yerba-mananita','catalog-yerba-taragui','catalog-yerba-union','catalog-yerba-verdeflor-manzanilla']},
  ...['Cereales y galletitas','Golosinas y chocolates','Almacén','Limpieza y hogar','Cuidado personal'].map(name=>({name,ids:SUPPLIER_CATALOG_PRODUCTS.filter(p=>p.category===name).map(p=>p.id)}))
];
const CATALOG_SECTION_BY_ID=Object.fromEntries(CATALOG_SECTIONS.flatMap(section=>section.ids.map(id=>[id,section.name])));
const CATALOG_PRODUCTS=[...BATCH1_CATALOG_PRODUCTS,...BATCH2_CATALOG_PRODUCTS,...BATCH3_CATALOG_PRODUCTS,...BATCH4_CATALOG_PRODUCTS,...BATCH5_CATALOG_PRODUCTS,...BATCH6_CATALOG_PRODUCTS,...BATCH7_CATALOG_PRODUCTS,...BATCH8_CATALOG_PRODUCTS,...BATCH9_CATALOG_PRODUCTS,...BATCH10_CATALOG_PRODUCTS,...BATCH11_CATALOG_PRODUCTS,...BATCH12_CATALOG_PRODUCTS,...BATCH13_CATALOG_PRODUCTS,...BATCH14_CATALOG_PRODUCTS,...BATCH15_CATALOG_PRODUCTS,...BATCH16_CATALOG_PRODUCTS,...BATCH17_CATALOG_PRODUCTS,...BATCH18_CATALOG_PRODUCTS,...BATCH19_CATALOG_PRODUCTS,...BATCH20_CATALOG_PRODUCTS,...BATCH21_CATALOG_PRODUCTS,...BATCH22_CATALOG_PRODUCTS,...BATCH23_CATALOG_PRODUCTS,...BATCH24_CATALOG_PRODUCTS,...BATCH25_CATALOG_PRODUCTS,...BATCH26_CATALOG_PRODUCTS,...BATCH27_CATALOG_PRODUCTS,...(window.CATALOG_PRODUCTS_BATCH28||[]),...(window.CATALOG_PRODUCTS_BATCH29||[]),...(window.CATALOG_PRODUCTS_BATCH30||[]),...(window.CATALOG_PRODUCTS_BATCH31||[]),...(window.CATALOG_PRODUCTS_BATCH32||[]),...(window.CATALOG_PRODUCTS_BATCH33||[]),...(window.CATALOG_PRODUCTS_BATCH34||[]),...(window.CATALOG_PRODUCTS_BATCH35||[]),...(window.CATALOG_PRODUCTS_BATCH36||[]),...(window.CATALOG_PRODUCTS_BATCH37||[]),...(window.CATALOG_PRODUCTS_BATCH38||[]),...(window.CATALOG_PRODUCTS_BATCH39||[]),...(window.CATALOG_PRODUCTS_BATCH40||[]),...(window.CATALOG_PRODUCTS_BATCH41||[]),...(window.CATALOG_PRODUCTS_BATCH42||[]),...(window.CATALOG_PRODUCTS_BATCH43||[]),...(window.CATALOG_PRODUCTS_BATCH99||[])].map(p=>({...p,category:p.pdfCategory||CATALOG_SECTION_BY_ID[p.id]||p.category,price:Number(p.price)||0,variants:(p.variants||[]).map(v=>({...v,price:Number(v.price)||0}))}));
const ALL_PRODUCTS=[...PRODUCTS,...CATALOG_PRODUCTS];

const $ = s => document.querySelector(s);
const formatMoney = n => new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(Number.isFinite(Number(n))?Number(n):0);
const normalize = s => (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const pdfText = s => (s||'').replace(/[·—–]/g,' - ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\x20-\x7E]/g,'').replace(/\s+/g,' ').trim();
const CUSTOMER_LIMITS={seller:60,name:100,business:100,phone:50,city:100,address:250,notes:500};
const cleanText=(value,max=500)=>typeof value==='string'?value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g,'').slice(0,max):'';
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isRecord=value=>value!==null&&typeof value==='object'&&!Array.isArray(value);
function readStored(key){try{const value=JSON.parse(localStorage.getItem(key)||'{}');return isRecord(value)?value:{}}catch{return {}}}
function writeStored(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
function cleanCustomer(value){return Object.fromEntries(Object.entries(CUSTOMER_LIMITS).map(([key,max])=>[key,cleanText(value?.[key],max).trim()]))}
function cleanCart(value){
  const result={};
  for(const [id,item] of Object.entries(value)){
    if(['__proto__','constructor','prototype'].includes(id)||!isRecord(item))continue;
    const entry={id,qty:Math.min(999,safeQty(item.qty,0)),note:cleanText(item.note)};
    if(isRecord(item.variants))entry.variants=Object.fromEntries(Object.entries(item.variants).filter(([name])=>!['__proto__','constructor','prototype'].includes(name)).map(([name,qty])=>[name,Math.min(999,safeQty(qty,0))]));
    result[id]=entry;
  }
  return result;
}
let cart = cleanCart(readStored('issa-cart-v1'));
let activeCategory = 'Todos';
let activeCatalogCategory = 'Todos';
let toastTimer;
let activeVariantId = null;

function productById(id){return ALL_PRODUCTS.find(p=>p.id===id)}
function safeQty(value,fallback=0){const n=Number(value);return Number.isFinite(n)&&n>0?Math.floor(n):fallback}
let migratedCart=false;CATALOG_PRODUCTS.forEach(p=>{(p.migratedVariantsFrom||[]).forEach(source=>{const sourceItem=cart[source.id],quantity=safeQty(sourceItem?.variants?.[source.sourceVariant],0);if(!quantity)return;const current=cart[p.id]||{qty:0,variants:{},note:sourceItem.note||''};if(!current.variants)current.variants={};current.variants[source.variant]=safeQty(current.variants[source.variant],0)+quantity;current.qty=Object.values(current.variants).reduce((sum,n)=>sum+safeQty(n,0),0);cart[p.id]=current;delete sourceItem.variants[source.sourceVariant];sourceItem.qty=Object.values(sourceItem.variants).reduce((sum,n)=>sum+safeQty(n,0),0);migratedCart=true});(p.migratedFrom||[]).forEach(source=>{const old=cart[source.id];if(!old||(source.id===p.id&&old.variants))return;const amount=safeQty(old.qty,0);if(!amount)return;const current=cart[p.id]||{qty:0,variants:{},note:old.note||''};if(!current.variants)current.variants={};current.variants[source.variant]=(safeQty(current.variants[source.variant],0)+amount);current.qty=Object.values(current.variants).reduce((a,n)=>a+safeQty(n,0),0);cart[p.id]=current;if(source.id!==p.id)delete cart[source.id];else if(old.variants){}else cart[p.id].qty=amount;migratedCart=true})});if(migratedCart)writeStored('issa-cart-v1',cart);
Object.keys(cart).forEach(id=>{const item=cart[id],p=productById(id);if(!p||!item||p.inStock===false){delete cart[id];return}if(item.variants){Object.keys(item.variants).forEach(name=>{if(!variantFor(p,name)||variantFor(p,name).inStock===false)delete item.variants[name]});const qty=selectedVariants(item).reduce((sum,[,amount])=>sum+amount,0);item.qty=qty;if(!qty)delete cart[id];return}item.qty=safeQty(item.qty,0);if(!item.qty)delete cart[id]});
function saveCart(){writeStored('issa-cart-v1',cart);renderCart();updateCounts()}
function updateCounts(){const count=Object.values(cart).reduce((a,x)=>a+safeQty(x.qty,0),0);$('#cartCount').textContent=count;$('#mobileCartCount').textContent=count;$('#mobileCart').hidden=count===0;const offerCount=$('#offerCount');if(offerCount)offerCount.textContent=PRODUCTS.length}
function variantFor(p,name){return p?.variants?.find(v=>v.name===name)}
function selectedVariants(item){return Object.entries(item?.variants||{}).map(([name,qty])=>[name,safeQty(qty,0)]).filter(([,qty])=>qty>0)}
function variantPresentation(p,name){const variant=variantFor(p,name);if(variant?.presentation)return variant.presentation;return /\d+\s*(?:g|kg|ml|un)\b|\bx\s*\d+|caja|pack|paquete|bolsa|display/i.test(name)?'':p.unit}
function itemTotal(item,p=productById(item.id)){
  if(!p)return 0;
  const selected=selectedVariants(item);
  if(selected.length)return selected.reduce((sum,[name,qty])=>sum+(Number(variantFor(p,name)?.price)||0)*qty,0);
  return (Number(p.price)||0)*safeQty(item.qty,0);
}
function itemHasPending(item,p=productById(item.id)){
  if(!p)return true;
  const selected=selectedVariants(item);
  if(p.variants.length&&selected.length)return selected.some(([name])=>!(Number(variantFor(p,name)?.price)>0));
  return !(Number(p.price)>0);
}
function displayPrice(p){
  if(!p.variants.length)return p.price?formatMoney(p.price):'Ver imagen';
  const prices=[...new Set(p.variants.map(v=>Number(v.price)||0).filter(Boolean))];
  if(!prices.length)return 'A confirmar';
  if(prices.length===1)return formatMoney(prices[0]);
  return `${formatMoney(Math.min(...prices))} – ${formatMoney(Math.max(...prices))}`;
}
function orderLines(){
  const lines=[];
  Object.values(cart).forEach(item=>{
    const p=productById(item.id);if(!p)return;
    const selected=selectedVariants(item);
    if(selected.length){
      selected.forEach(([name,qty])=>{const variant=variantFor(p,name),price=Number(variant?.price)||0;lines.push({code:variant?.code||p.code||p.id,name:p.name,detail:name,presentation:variantPresentation(p,name),qty,saleUnit: saleUnit(p,name),price,subtotal:price*qty,note:item.note||''})});
    }else{
      const qty=safeQty(item.qty,0),price=Number(p.price)||0;if(qty)lines.push({code:p.code||p.id,name:p.name,detail:p.variants.length?'Sin gustos especificados':p.unit,qty,saleUnit: saleUnit(p),price,subtotal:price*qty,note:item.note||''});
    }
  });
  return lines;
}
function createOrderMeta(){
  const now=new Date(),invoiceLines=orderLines();
  return {
    now,
    code:`ISSA-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`,
    total:invoiceLines.reduce((sum,line)=>sum+(Number(line.subtotal)||0),0),
    hasPending:invoiceLines.some(line=>!(Number(line.price)>0))
  };
}
function renderChips(){const cats=['Todos',...new Set(PRODUCTS.map(p=>p.category))];$('#categoryChips').innerHTML=cats.map(c=>`<button class="chip ${c===activeCategory?'active':''}" data-category="${c}" type="button">${c}</button>`).join('')}
function renderCatalogChips(){const cats=['Todos',...new Set(CATALOG_PRODUCTS.map(p=>p.category))];$('#catalogCategoryChips').innerHTML=cats.map(c=>`<button class="chip ${c===activeCatalogCategory?'active':''}" data-catalog-category="${c}" type="button">${c}</button>`).join('')}
function coverGalleryItems(p){
  if(p.coverImages?.length)return p.coverImages;
  if(p.variants?.length>1){
    const items=p.variants.map(v=>({src:v.image||p.image,label:v.name,imageCrop:v.imageCrop||v.crop}));
    const key=item=>`${item.src}|${item.imageCrop?`${item.imageCrop.cols||1}x${item.imageCrop.rows||1}:${item.imageCrop.index||0}`:''}`;
    if(items.every(item=>item.src&&(item.imageCrop||p.variants.find(v=>v.name===item.label)?.image))&&new Set(items.map(key)).size===items.length)return items;
  }
  return null;
}
function variantIsUnavailable(p,v){return p.inStock===false||v?.inStock===false}
function coverGalleryMarkup(p){
  const items=coverGalleryItems(p);
  if(!items)return `<img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" data-zoom="${p.image}" role="button" tabindex="0" aria-label="Ampliar foto de ${p.name}"><span class="code-badge">${p.code==='—'?'OFERTA':p.catalog&&p.skuCount>1?`${p.skuCount} VARIEDADES`:`CÓD. ${p.code||p.id}`}</span><button class="zoom-button" data-zoom="${p.image}" aria-label="Ampliar imagen" type="button">↗</button>`;
  const columns=Math.min(4,Math.ceil(Math.sqrt(items.length)));
  return `<div class="cover-image-gallery" style="--cover-columns:${columns}" aria-label="Variedades de ${p.name}">${items.map(item=>{const crop=item.imageCrop||item.crop;const cropAttrs=crop?`data-zoom-cols="${crop.cols||1}" data-zoom-rows="${crop.rows||1}" data-zoom-index="${crop.index||0}"`:'';const visual=crop?`<span class="cover-image-crop" style="background-image:url('${item.src}');background-size:${(crop.cols||1)*100}% ${(crop.rows||1)*100}%;background-position:${(crop.cols||1)===1?0:(crop.index||0)%(crop.cols||1)/((crop.cols||1)-1)*100}% ${Math.floor((crop.index||0)/(crop.cols||1))===0?0:Math.floor((crop.index||0)/(crop.cols||1))/((crop.rows||1)-1)*100}%"></span>`:`<img src="${item.src}" alt="${item.label}" loading="lazy">`;const variant=p.variants.find(v=>v.name===item.label),unavailable=variant&&variantIsUnavailable(p,variant);return `<button class="cover-image-choice ${unavailable?'is-sold-out':''}" data-zoom="${item.src}" ${cropAttrs} aria-label="Ampliar ${item.label}${unavailable?' · sin stock':''}" type="button">${visual}<span>${item.label}</span>${unavailable?'<b class="cover-image-stock">Sin stock</b>':''}</button>`}).join('')}</div>`;
}
function variantImageMarkup(p,v){
  const image=v.image||(p.catalog&&v.code?`assets/catalog/variants/${v.code}.webp`:p.image);
  const crop=v.imageCrop||v.crop;
  if(crop){const {cols=1,rows=1,index=0}=crop,col=index%cols,row=Math.floor(index/cols),x=cols===1?0:col/(cols-1)*100,y=rows===1?0:row/(rows-1)*100;return `<button class="variant-row-thumb variant-row-crop" type="button" data-zoom="${image}" data-zoom-cols="${cols}" data-zoom-rows="${rows}" data-zoom-index="${index}" aria-label="Ampliar foto de ${p.name} ${v.name}" style="background-image:url('${image}');background-size:${cols*100}% ${rows*100}%;background-position:${x}% ${y}%"></button>`}
  if(v.imageUnavailable)return `<span class="variant-row-thumb variant-row-no-image" role="img" aria-label="Foto no disponible para ${p.name} ${v.name}">Foto no disponible</span>`;
  return `<img class="variant-row-thumb" src="${image}" alt="${p.name} ${v.name}" loading="lazy" data-zoom="${image}" role="button" tabindex="0" aria-label="Ampliar foto de ${p.name} ${v.name}">`;
}
function productCardMarkup(p){
  const added=cart[p.id]?.qty||0;
  const availableVariantCount=p.variants.filter(v=>!variantIsUnavailable(p,v)).length;
  const controls=p.variants.length
    ? `<div class="variant-hint">${p.variants.length} ${p.catalog?'variedades':'gustos / presentaciones'} · ${availableVariantCount} disponibles${availableVariantCount===0?' · Sin stock':''}</div><div class="variant-add"><button class="variant-button" type="button" data-configure><span>${availableVariantCount?'Elegir variedad y cantidad':'Ver variedades'}</span><b>${added?`${added} elegidos`:availableVariantCount?'Elegir':'Sin stock'}</b></button></div>`
    : p.inStock===false?`<div class="out-of-stock">Sin stock</div>`:`<div class="qty-add"><div class="qty-control"><button type="button" data-minus aria-label="Restar">−</button><input type="number" value="${added||1}" min="1" max="999" inputmode="numeric" aria-label="Cantidad"><button type="button" data-plus aria-label="Sumar">+</button></div><button class="add-button" type="button" data-add>${added?`En pedido: ${added}`:'Agregar'}</button></div>`;
  return `<article class="product-card ${p.catalog?'catalog-card':''} ${added?'added':''}" data-id="${p.id}">
    <div class="product-image-wrap">${coverGalleryMarkup(p)}</div>
    <div class="product-info"><h3>${p.name}</h3><div class="product-meta"><span>${p.unit}</span><strong>${displayPrice(p)}</strong></div>
    ${controls}</div></article>`;
}
function renderProducts(){
  const term=normalize($('#searchInput').value);
  const items=PRODUCTS.filter(p=>(activeCategory==='Todos'||p.category===activeCategory)&&normalize(`${p.name} ${p.category} ${p.id} ${p.variants.map(v=>v.name).join(' ')}`).includes(term));
  $('#resultsCount').textContent=`${items.length} ${items.length===1?'producto':'productos'}`;
  $('#clearSearch').hidden=!term&&activeCategory==='Todos';$('#emptyState').hidden=items.length>0;
  $('#productGrid').innerHTML=items.map(productCardMarkup).join('');
}
function renderCatalogProducts(){
  const totalCatalogCodes=CATALOG_PRODUCTS.reduce((sum,p)=>sum+(Number(p.skuCount)||1),0);
  const totalCatalogFamilies=CATALOG_PRODUCTS.length;
  const totalCatalogCategories=new Set(CATALOG_PRODUCTS.map(p=>p.category)).size;
  document.querySelectorAll('[data-catalog-total]').forEach(el=>el.textContent=totalCatalogCodes);
  document.querySelectorAll('[data-catalog-families]').forEach(el=>el.textContent=totalCatalogFamilies);
  document.querySelectorAll('[data-catalog-categories]').forEach(el=>el.textContent=totalCatalogCategories);
  const term=normalize($('#catalogSearchInput').value);
  const items=CATALOG_PRODUCTS.filter(p=>(activeCatalogCategory==='Todos'||p.category===activeCatalogCategory)&&normalize(`${p.name} ${p.category} ${(p.codes||[]).join(' ')} ${p.variants.map(v=>`${v.name} ${v.code||''} ${v.presentation||''}`).join(' ')}`).includes(term));
  const codeCount=items.reduce((sum,p)=>sum+(p.skuCount||1),0);
  $('#catalogResultsCount').textContent=`${codeCount} ${codeCount===1?'producto disponible':'productos disponibles'} en ${items.length} ${items.length===1?'ficha':'fichas'}`;
  $('#clearCatalogSearch').hidden=!term&&activeCatalogCategory==='Todos';$('#catalogEmptyState').hidden=items.length>0;
  const visibleSections=CATALOG_SECTIONS.map(section=>section.name).filter(name=>activeCatalogCategory==='Todos'||name===activeCatalogCategory);
  $('#catalogProductGrid').innerHTML=visibleSections.map(section=>{
    const sectionItems=items.filter(p=>p.category===section);
    if(!sectionItems.length)return '';
    const sectionCount=sectionItems.reduce((sum,p)=>sum+(p.skuCount||1),0);
    return `<section class="catalog-group" aria-labelledby="catalog-${normalize(section).replace(/\s+/g,'-')}"><div class="catalog-group-heading"><div><span>CATEGORÍA</span><h3 id="catalog-${normalize(section).replace(/\s+/g,'-')}">${section}</h3></div><p><b>${sectionCount}</b> ${sectionCount===1?'producto':'productos'} · ${sectionItems.length} ${sectionItems.length===1?'ficha':'fichas'}</p></div><div class="product-grid catalog-group-grid">${sectionItems.map(productCardMarkup).join('')}</div></section>`;
  }).join('');
}
function renderCart(){
  const entries=Object.values(cart);$('#cartEmpty').hidden=entries.length>0;$('#cartFooter').hidden=entries.length===0;
  $('#cartItems').innerHTML=entries.map(item=>{
    const p=productById(item.id),selected=selectedVariants(item),subtotal=itemTotal(item,p),pending=itemHasPending(item,p);
    const details=p.variants.length
      ? `<div class="cart-variant-list">${selected.length?selected.map(([name,qty])=>{const variant=variantFor(p,name);return `<div class="cart-variant-line"><span>${name}${variant?.code?` · Cód. ${variant.code}`:''}</span><b>${quantityLabel(qty,saleUnit(p,name))}</b></div>`}).join(''):`<div class="cart-variant-line missing-variants"><span>Falta elegir opciones</span><b>x ${safeQty(item.qty,0)}</b></div>`}<button class="edit-variants" data-edit-variants type="button">Editar opciones y cantidades</button></div>`
      : '';
    const controls=p.variants.length?'':`<div class="cart-item-controls"><button data-cart-minus type="button">−</button><b>${quantityLabel(item.qty,saleUnit(p))}</b><button data-cart-plus type="button">+</button></div>`;
    return `<div class="cart-item" data-id="${p.id}"><img class="${p.catalog?'catalog-cart-image':''}" src="${p.image}" alt=""><div><h3>${p.name}</h3><span class="cart-item-price">${pending?'Precio a confirmar':`Subtotal ${formatMoney(subtotal)}`}</span>${controls}</div><button class="remove-item" data-remove type="button" aria-label="Quitar">×</button>${details}<input class="line-note" data-note maxlength="500" value="${escapeHTML(cleanText(item.note))}" placeholder="Otra aclaración opcional"></div>`;
  }).join('');
  const total=entries.reduce((sum,i)=>sum+itemTotal(i),0);const uncertain=entries.some(i=>itemHasPending(i));
  $('#cartTotal').textContent=formatMoney(total);$('#priceNote').textContent=uncertain?'Hay productos con variantes: el total final será confirmado por el vendedor.':'El vendedor confirmará disponibilidad y precio final.';
}
function changeProductQty(card,delta){const input=card.querySelector('input');input.value=Math.max(1,Math.min(999,(parseInt(input.value)||1)+delta))}
function addFromCard(card){const id=card.dataset.id;const qty=Math.max(1,parseInt(card.querySelector('input').value)||1);cart[id]={id,qty:(cart[id]?.qty||0)+qty,note:cart[id]?.note||''};saveCart();renderProducts();renderCatalogProducts();showToast(`${productById(id).name} agregado`)}
function updateVariantTotal(){
  const p=productById(activeVariantId),quantities={};
  [...$('#variantList').querySelectorAll('.variant-row')].forEach(row=>{const v=p?.variants[Number(row.dataset.variantIndex)],qty=safeQty(row.querySelector('input').value,0);if(qty){const unit=saleUnit(p,v?.name);quantities[unit]=(quantities[unit]||0)+qty}});
  $('#variantTotalQty').textContent=Object.entries(quantities).map(([unit,qty])=>quantityLabel(qty,unit)).join(' + ')||'Sin selección';
}
function openVariantPicker(id){
  const p=productById(id);if(!p?.variants.length)return;activeVariantId=id;const item=cart[id]||{variants:{},note:''};
  const availableVariantCount=p.variants.filter(v=>!variantIsUnavailable(p,v)).length;
  $('#variantProductName').textContent=p.name;$('#variantCode').textContent=`${p.variants.length} VARIEDADES · ${availableVariantCount} DISPONIBLES`;$('#variantProductUnit').textContent=`${p.unit} · Las agotadas aparecen marcadas como “Sin stock”.`;$('#variantImage').src=p.image;$('#variantImage').alt=p.name;$('#variantNote').value=item.note||'';
  $('#variantList').innerHTML=p.variants.map((v,index)=>{const unavailable=variantIsUnavailable(p,v),details=[v.presentation,v.price?formatMoney(v.price):'Precio a confirmar'].filter(Boolean).join(' · '),quantity=unavailable?0:safeQty(item.variants?.[v.name],0);return `<div class="variant-row ${unavailable?'is-sold-out':''}" data-variant-index="${index}"${unavailable?' aria-disabled="true"':''}>${variantImageMarkup(p,v)}<div class="variant-row-info"><strong>${v.name}</strong><div class="variant-row-detail">${v.code?`<span class="variant-code">Cód. ${v.code}</span>`:''}<small>${details}</small>${unavailable?'<b class="variant-stock-status">Sin stock</b>':''}</div></div><div class="variant-stepper"><button data-variant-minus type="button" aria-label="Restar"${unavailable?' disabled':''}>−</button><input type="number" min="0" max="999" value="${quantity}" inputmode="numeric" aria-label="Cantidad de ${v.name}"${unavailable?' disabled':''}><button data-variant-plus type="button" aria-label="Sumar"${unavailable?' disabled':''}>+</button></div></div>`}).join('');
  $('#saveVariants').disabled=availableVariantCount===0;$('#saveVariants').innerHTML=availableVariantCount?'Guardar en mi pedido <span>→</span>':'Sin stock';
  updateVariantTotal();$('#variantModal').showModal();
}
function saveVariantSelection(){
  const p=productById(activeVariantId);if(!p)return;const variants={};let qty=0;
  [...$('#variantList').querySelectorAll('.variant-row')].forEach(row=>{const v=p.variants[Number(row.dataset.variantIndex)],amount=variantIsUnavailable(p,v)?0:Math.min(999,safeQty(row.querySelector('input').value,0));if(amount){variants[v.name]=amount;qty+=amount}});
  if(!qty){showToast('Elegí al menos un gusto o presentación');return}
  cart[p.id]={id:p.id,qty,variants,note:cleanText($('#variantNote').value).trim()};saveCart();renderProducts();renderCatalogProducts();$('#variantModal').close();showToast(`${qty} opciones agregadas al pedido`);
}
function openCart(){renderCart();$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#backdrop').hidden=false;document.body.classList.add('locked')}
function closeCart(){ $('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#backdrop').hidden=true;document.body.classList.remove('locked')}
function showToast(msg){clearTimeout(toastTimer);$('#toast').textContent=msg;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2400)}
function showImage(src,crop){const modal=document.createElement('div');modal.className='image-modal';const visual=crop?(()=>{const {cols=1,rows=1,index=0}=crop,col=index%cols,row=Math.floor(index/cols),x=cols===1?0:col/(cols-1)*100,y=rows===1?0:row/(rows-1)*100;return `<div class="image-modal-crop" role="img" aria-label="Vista ampliada del producto" style="background-image:url('${src}');background-size:${cols*100}% ${rows*100}%;background-position:${x}% ${y}%"></div>`})():`<img src="${src}" alt="Vista ampliada del producto">`;modal.innerHTML=`<button aria-label="Cerrar" type="button">×</button>${visual}`;modal.addEventListener('click',e=>{if(e.target===modal||e.target.tagName==='BUTTON')modal.remove()});document.body.appendChild(modal)}
function showImageFromTarget(target){const crop=target.dataset.zoomCols?{cols:Number(target.dataset.zoomCols),rows:Number(target.dataset.zoomRows),index:Number(target.dataset.zoomIndex)}:null;showImage(target.dataset.zoom,crop)}
function orderData(){const fd=new FormData($('#checkoutForm'));return cleanCustomer(Object.fromEntries(fd.entries()))}
function validateForm(){const form=$('#checkoutForm'),data=orderData();Object.entries(data).forEach(([key,value])=>{form.elements.namedItem(key).value=value});return form.reportValidity()}
function wrapText(text,max=63){const words=pdfText(text).split(/\s+/);const lines=[];let line='';for(const word of words){if((line+' '+word).trim().length>max){lines.push(line);line=word}else line=(line+' '+word).trim()}if(line)lines.push(line);return lines}
// The purchase presentation comes before any wholesale packing information.
// A bag followed by “caja x 12” is sold by bag, not by box.
function saleUnit(p,name){
  const variant=variantFor(p,name);
  if(variant?.saleUnit||p?.saleUnit)return variant?.saleUnit||p.saleUnit;
  const namedPresentation=/^(?:bolsas?|cajas?|displays?|paquetes?|packs?|tiras?|estuches?|unidad(?:es)?|c\/u)\b/i.test(name||'')?name:'';
  const presentation=normalize(variant?.presentation||namedPresentation||p?.unit||'').split('·')[0].trim();
  if(/^(?:c\/u|unidad|fraccionad)/.test(presentation))return 'unidad';
  const firstPack=presentation.match(/\b(bolsas?|cajas?|displays?|paquetes?|packs?|tiras?|estuches?|bultos?)\b/);
  if(!firstPack)return 'unidad';
  return firstPack[1].replace(/s$/,'');
}
function quantityLabel(qty,unit='unidad'){
  const amount=safeQty(qty,0),plural={unidad:'unidades',bolsa:'bolsas',caja:'cajas',display:'displays',paquete:'paquetes',pack:'packs',tira:'tiras',estuche:'estuches',bulto:'bultos'};
  return `${amount} ${amount===1?unit:(plural[unit]||unit)}`;
}
async function generatePDF(download=true,orderMeta=null){
  const data=orderData();const {PDFDocument,StandardFonts,rgb}=PDFLib;const doc=await PDFDocument.create();const regular=await doc.embedFont(StandardFonts.Helvetica);const bold=await doc.embedFont(StandardFonts.HelveticaBold);const gold=rgb(.66,.45,.18),dark=rgb(.08,.08,.08),muted=rgb(.38,.38,.38),line=rgb(.78,.76,.72),soft=rgb(.97,.96,.94),white=rgb(1,1,1);const A4=[595.28,841.89];let page,y;
  const addPage=()=>{page=doc.addPage(A4);y=800;page.drawRectangle({x:0,y:786,width:A4[0],height:56,color:dark});page.drawText('ISSA',{x:38,y:807,size:22,font:bold,color:rgb(.91,.72,.36)});page.drawText('DISTRIBUIDORA  |  PEDIDO MAYORISTA',{x:104,y:812,size:9,font:bold,color:white});page.drawText('Pedido sujeto a revision y confirmacion del vendedor',{x:104,y:798,size:7,font:regular,color:rgb(.72,.72,.72)});page.drawText('Esta boleta no es una factura. Precios y disponibilidad sujetos a confirmacion.',{x:38,y:28,size:7,font:regular,color:muted});y=760};
  const tableColumns=[35,74,360,421,490,560];
  const drawRight=(text,right,yPos,size,font,color)=>page.drawText(text,{x:right-font.widthOfTextAtSize(text,size),y:yPos,size,font,color});
  const drawTableHeader=()=>{
    const height=25,bottom=y-height;
    page.drawRectangle({x:tableColumns[0],y:bottom,width:tableColumns[tableColumns.length-1]-tableColumns[0],height,color:dark,borderColor:dark,borderWidth:1});
    tableColumns.slice(1,-1).forEach(x=>page.drawLine({start:{x,y:bottom},end:{x,y},thickness:.6,color:rgb(.35,.35,.35)}));
    page.drawText('COD.',{x:40,y:bottom+9,size:7,font:bold,color:white});
    page.drawText('PRODUCTO / GUSTO O PRESENTACION',{x:80,y:bottom+9,size:7,font:bold,color:white});
    page.drawText('CANTIDAD',{x:366,y:bottom+9,size:7,font:bold,color:white});
    page.drawText('PRECIO UNIT.',{x:427,y:bottom+9,size:6.5,font:bold,color:white});
    page.drawText('SUBTOTAL',{x:500,y:bottom+9,size:7,font:bold,color:white});
    y=bottom;
  };
  addPage();
  const meta=orderMeta||createOrderMeta(),now=meta.now,code=meta.code;
  page.drawText(`Vendedor: ${pdfText(data.seller||'-').slice(0,60)}`,{x:38,y,size:11,font:bold,color:dark});y-=24;
  page.drawText(`BOLETA DE PEDIDO  ${code}`,{x:38,y,size:13,font:bold,color:dark});page.drawText(now.toLocaleString('es-AR'),{x:430,y,size:8,font:regular,color:muted});y-=28;
  const info=[['Cliente',data.name],['Comercio',data.business],['Telefono',data.phone],['Localidad',data.city],['Direccion',data.address||'-']];for(let i=0;i<info.length;i++){const [k,v]=info[i];const x=i%2?310:38;if(i&&i%2===0)y-=22;page.drawText(`${k}:`,{x,y,size:8,font:bold,color:muted});page.drawText(pdfText(v).slice(0,39),{x:x+55,y,size:9,font:regular,color:dark})}y-=31;
  drawTableHeader();
  const invoiceLines=orderLines();let total=Number(meta.total)||0,hasPending=Boolean(meta.hasPending);
  invoiceLines.forEach((item,index)=>{
    const detail=[item.detail,item.presentation].filter(Boolean).join(' - '),desc=`${item.name} - ${detail}${item.note?` | ${item.note}`:''}`,descriptionLines=wrapText(desc,47),height=Math.max(35,descriptionLines.length*10+15);
    if(y-height<72){addPage();drawTableHeader()}
    const top=y,bottom=y-height,fill=index%2?white:soft;
    page.drawRectangle({x:tableColumns[0],y:bottom,width:tableColumns[tableColumns.length-1]-tableColumns[0],height,color:fill,borderColor:line,borderWidth:.7});
    tableColumns.slice(1,-1).forEach(x=>page.drawLine({start:{x,y:bottom},end:{x,y:top},thickness:.6,color:line}));
    page.drawText(item.code,{x:40,y:top-20,size:7.5,font:bold,color:gold});
    descriptionLines.forEach((text,index)=>page.drawText(text,{x:80,y:top-16-index*10,size:7.6,font:regular,color:dark}));
    const qtyText=pdfText(quantityLabel(item.qty,item.saleUnit));drawRight(qtyText,416,top-20,6.8,bold,dark);
    const unitPrice=item.price?pdfText(formatMoney(Number(item.price)||0)):'A confirmar';drawRight(unitPrice,485,top-20,7,bold,item.price?dark:muted);
    const subtotal=item.price?pdfText(formatMoney(Number(item.subtotal)||0)):'A confirmar';drawRight(subtotal,555,top-20,7,bold,item.price?dark:muted);
    y=bottom;
  });
  const noteLines=data.notes?wrapText(data.notes,96).slice(0,5):[];const summarySpace=95+(noteLines.length*11);if(y-summarySpace<45)addPage();y-=18;
  page.drawRectangle({x:350,y:y-58,width:210,height:58,color:soft,borderColor:gold,borderWidth:1.2});
  page.drawText('TOTAL GENERAL ESTIMADO',{x:363,y:y-20,size:8,font:bold,color:muted});drawRight(pdfText(formatMoney(total)),548,y-45,17,bold,gold);y-=68;
  if(hasPending){page.drawText('* El total no incluye productos marcados A confirmar.',{x:350,y,size:7,font:regular,color:muted});y-=15}
  if(noteLines.length){y-=13;page.drawText('OBSERVACIONES',{x:38,y,size:8,font:bold,color:gold});y-=14;noteLines.forEach(text=>{page.drawText(text,{x:38,y,size:8,font:regular,color:dark});y-=11})}
  const bytes=await doc.save();const blob=new Blob([bytes],{type:'application/pdf'});const filename=`Pedido_${pdfText(data.business||data.name).replace(/\s+/g,'_')}_${code}.pdf`;if(download)downloadBlob(blob,filename);return {blob,code,total,hasPending,filename};
}
function downloadBlob(blob,filename){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000)}
function whatsappMessage(data,meta){
  const lines=orderLines().flatMap((item,index)=>{
    const detail=[item.detail,item.presentation].filter(Boolean).join(' · '),product=`*${index+1}. ${item.name} — ${detail}*\nCódigo ISSA: *${item.code}*${item.note?`\nAclaración: ${item.note}`:''}`;
    const price=item.price?formatMoney(item.price):'A confirmar',subtotal=item.price?formatMoney(item.subtotal):'A confirmar';
    return [product,`Cantidad: *${quantityLabel(item.qty,item.saleUnit)}*`,`Precio unitario: *${price}*`,`Subtotal: *${subtotal}*`,''];
  });
  return `*NUEVO PEDIDO ISSA*\n${meta.code}\n\n*Vendedor:* ${data.seller||'-'}\n*Cliente:* ${data.name}\n*Comercio:* ${data.business}\n*Teléfono:* ${data.phone}\n*Localidad:* ${data.city}\n*Dirección:* ${data.address||'-'}\n\n*DETALLE DEL PEDIDO*\n\n${lines.join('\n').trim()}\n\n*TOTAL GENERAL ESTIMADO: ${formatMoney(Number(meta.total)||0)}*${meta.hasPending?'\n+ Productos con precio a confirmar':''}\n\n${data.notes?`*Observaciones:* ${data.notes}\n\n`:''}Pedido generado desde el catálogo web de Distribuidora ISSA. Por favor revisar disponibilidad y total final.`;
}

async function shareOrderPDF(){
  if(!validateForm())return;
  const button=$('#sharePdf'),original=button.innerHTML;button.disabled=true;button.textContent='Preparando boleta PDF…';
  try{
    const data=orderData(),meta=createOrderMeta(),pdf=await generatePDF(false,meta);writeStored('issa-customer-v1',data);
    const file=typeof File==='function'?new File([pdf.blob],pdf.filename,{type:'application/pdf'}):null;let canShareFiles=false;
    if(file&&typeof navigator.share==='function'&&typeof navigator.canShare==='function'){try{canShareFiles=navigator.canShare({files:[file]})}catch{}}
    if(canShareFiles){
      await navigator.share({files:[file],title:`Boleta de pedido ${pdf.code}`,text:`Pedido de ${data.business||data.name} para Distribuidora ISSA`});
      showToast('Boleta PDF lista para enviar');
    }else{
      downloadBlob(pdf.blob,pdf.filename);showToast('Este dispositivo no permite compartir archivos: se descargó la boleta');
    }
  }catch(error){if(error?.name!=='AbortError'){console.error(error);showToast('No se pudo compartir la boleta PDF')}}finally{button.disabled=false;button.innerHTML=original}
}

$('#categoryChips').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;activeCategory=b.dataset.category;renderChips();renderProducts()});
$('#searchInput').addEventListener('input',renderProducts);$('#clearSearch').addEventListener('click',()=>{$('#searchInput').value='';activeCategory='Todos';renderChips();renderProducts()});
$('#catalogCategoryChips').addEventListener('click',e=>{const b=e.target.closest('[data-catalog-category]');if(!b)return;activeCatalogCategory=b.dataset.catalogCategory;renderCatalogChips();renderCatalogProducts()});
$('#catalogSearchInput').addEventListener('input',renderCatalogProducts);$('#clearCatalogSearch').addEventListener('click',()=>{$('#catalogSearchInput').value='';activeCatalogCategory='Todos';renderCatalogChips();renderCatalogProducts()});
function handleProductGridClick(e){const card=e.target.closest('.product-card');if(!card)return;if(e.target.closest('[data-minus]'))changeProductQty(card,-1);if(e.target.closest('[data-plus]'))changeProductQty(card,1);if(e.target.closest('[data-add]'))addFromCard(card);if(e.target.closest('[data-configure]'))openVariantPicker(card.dataset.id);const zoom=e.target.closest('[data-zoom]');if(zoom)showImageFromTarget(zoom)}
function handleZoomClick(e){const zoom=e.target.closest('[data-zoom]');if(zoom)showImageFromTarget(zoom)}
function handleZoomKeydown(e){if(!['Enter',' '].includes(e.key))return;const zoom=e.target.closest('[data-zoom][role="button"]');if(!zoom)return;e.preventDefault();showImageFromTarget(zoom)}
function handleProductGridChange(e){if(e.target.matches('input[type=number]'))e.target.value=Math.max(1,Math.min(999,parseInt(e.target.value)||1))}
$('#productGrid').addEventListener('click',handleProductGridClick);$('#catalogProductGrid').addEventListener('click',handleProductGridClick);
$('#productGrid').addEventListener('keydown',handleZoomKeydown);$('#catalogProductGrid').addEventListener('keydown',handleZoomKeydown);$('#variantList').addEventListener('click',handleZoomClick);$('#variantList').addEventListener('keydown',handleZoomKeydown);
$('#productGrid').addEventListener('change',handleProductGridChange);$('#catalogProductGrid').addEventListener('change',handleProductGridChange);
['#openCart','#heroCart','#mobileCart'].forEach(s=>$(s).addEventListener('click',openCart));$('#closeCart').addEventListener('click',closeCart);$('#backdrop').addEventListener('click',closeCart);$('#goCatalog').addEventListener('click',()=>{closeCart();$('#catalogo').scrollIntoView()});
$('#cartItems').addEventListener('click',e=>{const item=e.target.closest('.cart-item');if(!item)return;const id=item.dataset.id;if(e.target.closest('[data-cart-minus]')){cart[id].qty=safeQty(cart[id].qty,1)-1;if(cart[id].qty<=0)delete cart[id];saveCart();renderProducts();renderCatalogProducts()}if(e.target.closest('[data-cart-plus]')){cart[id].qty=safeQty(cart[id].qty,0)+1;saveCart();renderProducts();renderCatalogProducts()}if(e.target.closest('[data-edit-variants]'))openVariantPicker(id);if(e.target.closest('[data-remove]')){delete cart[id];saveCart();renderProducts();renderCatalogProducts()}});
$('#cartItems').addEventListener('input',e=>{if(e.target.matches('[data-note]')){cart[e.target.closest('.cart-item').dataset.id].note=cleanText(e.target.value);writeStored('issa-cart-v1',cart)}});
$('#clearCart').addEventListener('click',()=>{cart={};saveCart();renderProducts();renderCatalogProducts();showToast('Pedido vaciado')});
$('#variantList').addEventListener('click',e=>{const row=e.target.closest('.variant-row');if(!row)return;const input=row.querySelector('input');if(input.disabled)return;if(e.target.closest('[data-variant-minus]'))input.value=Math.max(0,safeQty(input.value,0)-1);if(e.target.closest('[data-variant-plus]'))input.value=Math.min(999,safeQty(input.value,0)+1);updateVariantTotal()});
$('#variantList').addEventListener('input',e=>{if(e.target.matches('input')&&!e.target.disabled){e.target.value=Math.max(0,Math.min(999,Number(e.target.value)||0));updateVariantTotal()}});
$('#closeVariants').addEventListener('click',()=>$('#variantModal').close());$('#saveVariants').addEventListener('click',saveVariantSelection);
$('#openCheckout').addEventListener('click',()=>{closeCart();$('#checkoutModal').showModal()});$('#closeCheckout').addEventListener('click',()=>$('#checkoutModal').close());
$('#sharePdf').addEventListener('click',shareOrderPDF);
$('#downloadPdfOnly').addEventListener('click',async()=>{if(!validateForm())return;await generatePDF(true);showToast('Boleta PDF descargada')});
$('#checkoutForm').addEventListener('submit',async e=>{
  e.preventDefault();if(!validateForm())return;
  const data=orderData(),meta=createOrderMeta(),msg=whatsappMessage(data,meta),url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  const whatsappTab=window.open(url,'_blank');if(whatsappTab)whatsappTab.opener=null;else window.location.href=url;
  writeStored('issa-customer-v1',data);showToast('WhatsApp abierto con precios y subtotales');
});
const savedCustomer=cleanCustomer(readStored('issa-customer-v1'));Object.entries(savedCustomer).forEach(([key,value])=>{const field=$('#checkoutForm').elements.namedItem(key);if(field)field.value=value});
Object.entries(CUSTOMER_LIMITS).forEach(([key,max])=>{$('#checkoutForm').elements.namedItem(key).maxLength=max});
$('#variantNote').maxLength=500;
$('#clearSavedData').addEventListener('click',()=>$('#clearDataModal').showModal());
$('#cancelClearData').addEventListener('click',()=>$('#clearDataModal').close());
$('#confirmClearData').addEventListener('click',()=>{
  try{localStorage.removeItem('issa-customer-v1');localStorage.removeItem('issa-cart-v1')}catch{}
  cart={};$('#checkoutForm').reset();$('#clearDataModal').close();$('#checkoutModal').close();renderCart();updateCounts();renderProducts();renderCatalogProducts();showToast('Datos y pedido guardados borrados de este dispositivo');
});
renderChips();renderProducts();renderCatalogChips();renderCatalogProducts();renderCart();updateCounts();
