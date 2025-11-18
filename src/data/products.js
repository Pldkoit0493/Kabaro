/*
 * Product listing and filtering logic
 *
 * This script defines a catalogue of products and functions to render
 * product cards, filter them by category, and add them to the shopping cart.
 */

// Define an array of products. When adding new products, update this list.
export const products = [
  {
    id: 'prod1',
    name: 'Plain T‑Shirt',
    brand: 'Bench',
    category: 'Men',
    price: 499,
    description: 'A comfortable plain T‑shirt made from soft cotton. Perfect for everyday wear.',
    image: 'plain_tshirt.png'
  },
  {
    id: 'prod2',
    name: 'Denim Jeans',
    brand: 'Penshoppe',
    category: 'Men',
    price: 999,
    description: 'Classic blue denim jeans with a slim fit and durable construction.',
    image: 'jeans.png'
  },
  {
    id: 'prod3',
    name: 'Floral Blouse',
    brand: 'Kamiseta',
    category: 'Women',
    price: 699,
    description: 'A lightweight blouse with a floral pattern, perfect for a casual chic look.',
    image: 'floral_blouse.png'
  },
  {
    id: 'prod4',
    name: 'Maxi Dress',
    brand: 'Penshoppe',
    category: 'Women',
    price: 1299,
    description: 'A stylish maxi dress featuring a flattering silhouette and breathable fabric.',
    image: 'maxi_dress.png'
  },
  {
    id: 'prod5',
    name: 'Hoodie',
    brand: 'Folded & Hung',
    category: 'Unisex',
    price: 1299,
    description: 'A cozy hoodie suitable for chilly weather or relaxed weekends.',
    image: 'hoodie.png'
  },
  {
    id: 'prod6',
    name: 'Women\'s Shorts',
    brand: 'Bayo',
    category: 'Women',
    price: 549,
    description: 'Comfortable cotton shorts designed for casual wear on warm days.',
    image: 'womens_shorts.png'
  },
  {
    id: 'prod7',
    name: 'Polo Shirt',
    brand: 'Regatta',
    category: 'Men',
    price: 799,
    description: 'A classic polo shirt made with breathable fabric, ideal for smart casual occasions.',
    image: 'polo_shirt.png'
  },
  {
    id: 'prod8',
    name: 'Kids T‑Shirt',
    brand: 'Penshoppe',
    category: 'Kids',
    price: 399,
    description: 'A vibrant T‑shirt for kids featuring playful prints and a comfortable fit.',
    image: 'kids_graphic_tee.png'
  },
  {
    id: 'prod9',
    name: 'Kids Shorts',
    brand: 'Bench',
    category: 'Kids',
    price: 349,
    description: 'Durable shorts for active kids, crafted from soft and breathable materials.',
    image: 'kids_shorts.png'
  },
  {
    id: 'prod10',
    name: 'Streetwear Tee',
    brand: 'Origin Manila',
    category: 'Unisex',
    price: 599,
    description: 'A trendy graphic tee from local streetwear label Origin Manila, celebrating Filipino artistry.',
    image: 'streetwear_tee.png'
  }
  ,
  // Additional local brand products
  // Bench
  {
    id: 'prod11',
    name: 'Bench Basic Tee',
    brand: 'Bench',
    category: 'Men',
    price: 499,
    description: 'A basic crew‑neck tee made from soft cotton, ideal for everyday wear.',
    image: 'bench_product.png'
  },
  {
    id: 'prod12',
    name: 'Bench Denim Shorts',
    brand: 'Bench',
    category: 'Men',
    price: 899,
    description: 'Casual denim shorts featuring a relaxed fit and durable fabric.',
    image: 'bench_product.png'
  },
  {
    id: 'prod13',
    name: 'Bench Active Joggers',
    brand: 'Bench',
    category: 'Unisex',
    price: 1099,
    description: 'Lightweight joggers designed for comfort, perfect for workouts or lounging.',
    image: 'bench_product.png'
  },
  // Penshoppe
  {
    id: 'prod14',
    name: 'Penshoppe Graphic Tee',
    brand: 'Penshoppe',
    category: 'Men',
    price: 599,
    description: 'A street‑style graphic tee with a bold print for a trendy look.',
    image: 'penshoppe_product.png'
  },
  {
    id: 'prod15',
    name: 'Penshoppe Skinny Jeans',
    brand: 'Penshoppe',
    category: 'Men',
    price: 1199,
    description: 'Slim‑fit jeans crafted from stretchy denim for all‑day comfort.',
    image: 'penshoppe_product.png'
  },
  {
    id: 'prod16',
    name: 'Penshoppe Denim Jacket',
    brand: 'Penshoppe',
    category: 'Unisex',
    price: 1399,
    description: 'A classic denim jacket with a modern cut, perfect for layering.',
    image: 'penshoppe_product.png'
  },
  // Bayo
  {
    id: 'prod17',
    name: 'Bayo Linen Dress',
    brand: 'Bayo',
    category: 'Women',
    price: 999,
    description: 'A modest linen dress in neutral tones, designed for effortless elegance.',
    image: 'bayo_product.png'
  },
  {
    id: 'prod18',
    name: 'Bayo Blouse',
    brand: 'Bayo',
    category: 'Women',
    price: 699,
    description: 'A classic blouse crafted from breathable fabric, perfect for any occasion.',
    image: 'bayo_product.png'
  },
  {
    id: 'prod19',
    name: 'Bayo Midi Skirt',
    brand: 'Bayo',
    category: 'Women',
    price: 799,
    description: 'A versatile midi skirt with a flattering silhouette and soft texture.',
    image: 'bayo_product.png'
  },
  // Kamiseta
  {
    id: 'prod20',
    name: 'Kamiseta Pastel Blouse',
    brand: 'Kamiseta',
    category: 'Women',
    price: 749,
    description: 'A pastel‑colored blouse with delicate details for a feminine look.',
    image: 'kamiseta_product.png'
  },
  {
    id: 'prod21',
    name: 'Kamiseta A‑line Skirt',
    brand: 'Kamiseta',
    category: 'Women',
    price: 799,
    description: 'A flattering A‑line skirt that pairs perfectly with blouses and tees.',
    image: 'kamiseta_product.png'
  },
  {
    id: 'prod22',
    name: 'Kamiseta Floral Dress',
    brand: 'Kamiseta',
    category: 'Women',
    price: 1199,
    description: 'A youthful floral dress in pastel hues, ideal for casual outings.',
    image: 'kamiseta_product.png'
  },
  // Plains & Prints
  {
    id: 'prod23',
    name: 'Plains & Prints Printed Blouse',
    brand: 'Plains & Prints',
    category: 'Women',
    price: 899,
    description: 'A tailored blouse with an abstract print, suited for office or casual wear.',
    image: 'plains_prints_product.png'
  },
  {
    id: 'prod24',
    name: 'Plains & Prints Tailored Pants',
    brand: 'Plains & Prints',
    category: 'Women',
    price: 1099,
    description: 'Elegant tailored pants that provide comfort and sophistication.',
    image: 'plains_prints_product.png'
  },
  {
    id: 'prod25',
    name: 'Plains & Prints Shift Dress',
    brand: 'Plains & Prints',
    category: 'Women',
    price: 1299,
    description: 'A classic shift dress with subtle prints, perfect for work or events.',
    image: 'plains_prints_product.png'
  },
  // Unica Hija
  {
    id: 'prod26',
    name: 'Unica Hija Blazer',
    brand: 'Unica Hija',
    category: 'Women',
    price: 1399,
    description: 'A structured blazer offering a polished and professional look.',
    image: 'unica_hija_product.png'
  },
  {
    id: 'prod27',
    name: 'Unica Hija Pencil Skirt',
    brand: 'Unica Hija',
    category: 'Women',
    price: 799,
    description: 'A sleek pencil skirt made for office and smart casual outfits.',
    image: 'unica_hija_product.png'
  },
  {
    id: 'prod28',
    name: 'Unica Hija Button‑Down Shirt',
    brand: 'Unica Hija',
    category: 'Women',
    price: 999,
    description: 'A versatile button‑down shirt that can be styled for work or weekends.',
    image: 'unica_hija_product.png'
  },
  // Habi PH
  {
    id: 'prod29',
    name: 'Habi PH Handwoven Top',
    brand: 'Habi PH',
    category: 'Women',
    price: 1199,
    description: 'A handwoven top made from natural fibers, showcasing Filipino craftsmanship.',
    image: 'habi_ph_product.png'
  },
  {
    id: 'prod30',
    name: 'Habi PH Kultura Dress',
    brand: 'Habi PH',
    category: 'Women',
    price: 1599,
    description: 'A modern Filipiniana dress with puff sleeves and traditional weaving patterns.',
    image: 'habi_ph_product.png'
  },
  {
    id: 'prod31',
    name: 'Habi PH Abaca Tote',
    brand: 'Habi PH',
    category: 'Women',
    price: 899,
    description: 'A sturdy tote bag crafted from abaca fibers, perfect for daily use.',
    image: 'habi_ph_product.png'
  },
  // Rags2Riches
  {
    id: 'prod32',
    name: 'Rags2Riches Patchwork Bag',
    brand: 'Rags2Riches',
    category: 'Unisex',
    price: 1499,
    description: 'A colorful patchwork handbag made from upcycled textiles, supporting artisans.',
    image: 'rags2riches_product.png'
  },
  {
    id: 'prod33',
    name: 'Rags2Riches Upcycled Skirt',
    brand: 'Rags2Riches',
    category: 'Women',
    price: 1299,
    description: 'An upcycled skirt featuring unique fabric combinations and eco‑ethical flair.',
    image: 'rags2riches_product.png'
  },
  {
    id: 'prod34',
    name: 'Rags2Riches Colorful Tunic',
    brand: 'Rags2Riches',
    category: 'Women',
    price: 999,
    description: 'A vibrant tunic top designed from overstock fabrics with a relaxed fit.',
    image: 'rags2riches_product.png'
  },
  // Cariño
  {
    id: 'prod35',
    name: 'Cariño Linen Top',
    brand: 'Cariño',
    category: 'Women',
    price: 1099,
    description: 'A linen top with delicate embroidery, embodying slow fashion and sustainability.',
    image: 'carino_product.png'
  },
  {
    id: 'prod36',
    name: 'Cariño Embroidered Polo',
    brand: 'Cariño',
    category: 'Unisex',
    price: 1199,
    description: 'A collared polo shirt with subtle embroidered accents for a bespoke touch.',
    image: 'carino_product.png'
  },
  {
    id: 'prod37',
    name: 'Cariño Denim Shorts',
    brand: 'Cariño',
    category: 'Women',
    price: 799,
    description: 'Comfortable denim shorts crafted from reclaimed fabrics, perfect for casual days.',
    image: 'carino_product.png'
  },
  // RIOTaso
  {
    id: 'prod38',
    name: 'RIOTaso Patchwork Jacket',
    brand: 'RIOTaso',
    category: 'Unisex',
    price: 1599,
    description: 'A statement patchwork jacket created from vibrant fabric scraps.',
    image: 'riotaso_product.png'
  },
  {
    id: 'prod39',
    name: 'RIOTaso Upcycled Cap',
    brand: 'RIOTaso',
    category: 'Accessories',
    price: 699,
    description: 'An upcycled cap featuring a patchwork design and eco‑conscious materials.',
    image: 'riotaso_product.png'
  },
  {
    id: 'prod40',
    name: 'RIOTaso Patchwork Shorts',
    brand: 'RIOTaso',
    category: 'Unisex',
    price: 899,
    description: 'Playful patchwork shorts made from repurposed textile remnants.',
    image: 'riotaso_product.png'
  }
];
