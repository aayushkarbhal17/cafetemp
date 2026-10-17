export const cafeInfo = {
  name: "WOAT Café",
  tagline: "Good coffee. No rush.",
  subtitle: "Specialty Coffee & Slow Bakery",
  established: "Est. 2021",
  address: {
    street: "04 Carter Road",
    district: "Bandra West",
    city: "Mumbai",
    landmark: "Corner of Market & 4th, across from the Old Library",
    full: "04 Carter Road, Bandra West, Mumbai, Maharashtra",
    mapsUrl: "https://www.google.com/maps/place/Carter+Rd,+Bandra+West,+400050/@19.0593156,72.8193365,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c96bda2c82cd:0xb264afc7c14ea246!8m2!3d19.0593105!4d72.8219114!16s%2Fg%2F11y1kzm2h8?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
  },
  contact: {
    phone: "+91 9892409460",
    phoneHref: "tel:+9892409460",
    whatsapp: "+91 9892409460",
    whatsappHref: "https://wa.me/9892409460?text=Hello%20WOAT%20Cafe%2C%20I%20would%20like%20to%20inquire%20about...",
    email: "hello@woatcafe.com",
    emailHref: "mailto:hello@woatcafe.com",
  },
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 5:00 PM", note: "Espresso bar opens at 7:00 AM" },
    { days: "Saturday – Sunday", time: "8:00 AM – 7:00 PM", note: "Weekend brunch & slow pourovers" },
    { days: "Artisanal Bakery", time: "Daily from 7:00 AM", note: "Baked fresh every dawn until sold out" },
  ],
  amenities: [
    "High-speed fiber WiFi",
    "Quiet reading corners",
    "Outdoor garden patio",
    "Dog-friendly seating",
    "Custom ceramic drinkware",
    "Plant-based milks at no surcharge"
  ]
};

export const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Craft & Roast", href: "#craft" },
  { label: "Signature Menu", href: "#menu" },
  { label: "Atmosphere", href: "#atmosphere" },
  { label: "Visit & Hours", href: "#visit" },
];

export const heroData = {
  badge: "Single-Origin Micro-Roastery · Seattle, WA",
  headline: "Good coffee. No rush.",
  description:
    "A light-filled sanctuary designed for slow mornings, thoughtful brewing, and warm conversations. Every cup is extracted with quiet precision from ethically sourced microlots.",
  stats: [
    { value: "88+", label: "Q-Grade Cup Score" },
    { value: "36h", label: "Cold Ferment Pastry" },
    { value: "100%", label: "Direct Farm Trade" },
  ],
  image: "/images/hero-espresso.jpg",
  imageAlt: "Barista pouring a silky espresso shot into a handcrafted ceramic cup with morning light on wooden counters",
  primaryCta: { label: "Explore Signature Menu", href: "#menu" },
  secondaryCta: { label: "Plan Your Visit", href: "#visit" },
};

export const editorialPillars = [
  {
    kicker: "01 / SOURCING",
    title: "Direct-Farm Microlots",
    description:
      "We partner directly with generational farmers in Huila, Yirgacheffe, and Antigua. Every single harvest is cupped and scored above 88 points.",
    tag: "High-Altitude Crops",
  },
  {
    kicker: "02 / THE EXTRACTION",
    title: "Artisanal Pourover & Pull",
    description:
      "Custom remineralized mountain water at 93°C meets custom ceramic flat-bottom drippers. Pure origin clarity in every sip.",
    tag: "Precision Extraction",
  },
  {
    kicker: "03 / THE MORNING BAKE",
    title: "36-Hour Sourdough Viennoiserie",
    description:
      "Cold-fermented laminated dough made with Normandy churned butter and wild sourdough cultures, baked fresh at dawn every single morning.",
    tag: "Fresh From Dawn",
  },
];

export const tickerItems = [
  "Single-Origin Specialty Beans",
  "Slow Natural Fermentation",
  "Daily Fresh Viennoiserie",
  "Handcrafted Ceramic Mugs",
  "Zero Rushed Mornings",
  "Ethically Traded Microlots",
  "Pure Mountain-Filtered Water",
];

export const storyData = {
  kicker: "THE WOAT PHILOSOPHY",
  headline: "An ode to slow living, warm light, and honest craft.",
  paragraphs: [
    "WOAT was founded on a simple observation: modern coffee had become an anxious rush — paper cups grabbed in transit, swallowed without tasting, discarded within minutes.",
    "We wanted to build something quieter. A sanctuary where the morning sun streams across solid white oak benches, where baristas know your preferred brew ratio, and where the air carries the fragrance of freshly bloomed Ethiopian coffee and warm laminated butter.",
    "Every detail in our space — from the tactile speckled ceramics thrown by local potters to the acoustic cork panels and olive tree in the sunroom — exists to invite you to slow down. Stay an hour. Read a chapter. Let the coffee cool to reveal its delicate berry notes.",
  ],
  quote: {
    text: "Coffee should not be a transaction you endure to survive the morning, but an anchor that returns you to yourself.",
    author: "Elena Vance & Marcus Thorne",
    role: "Founders & Head Roasters",
  },
  image: "/images/story-interior.jpg",
  imageAlt: "Sunlit interior of WOAT Cafe showing white oak tables, indoor olive tree, patrons reading quietly, and floor-to-ceiling iron windows",
  milestones: [
    { label: "Community Tables", desc: "White oak & linen" },
    { label: "Bean Roasting", desc: "Twice weekly small-batch" },
    { label: "Zero Artificial Flavors", desc: "Real vanilla, pure honey" },
  ]
};

export const menuCategories = [
  { id: "all", label: "Full Menu" },
  { id: "espresso", label: "Espresso & Pourover" },
  { id: "cold", label: "House Cold & Iced" },
  { id: "bakery", label: "Artisanal Bakery" },
];

export const menuFeatured = [
  {
    title: "Cascara & Vanilla Cold Foam Latte",
    category: "cold",
    price: "650/-",
    image: "/images/menu-iced-latte.jpg",
    description:
      "Double shot of washed Huila espresso poured over textured oat milk, topped with cloud-like vanilla bean cold foam and dried botanical aromatics.",
    tags: ["Signature", "Customer Favorite", "Oat Milk"],
    tastingNotes: "Bourbon Vanilla · Honeycomb · Dark Cocoa",
  },
  {
    title: "Hand-Laminated Butter Croissant & Brownie",
    category: "bakery",
    price: "500/- / 550/-",
    image: "/images/menu-pastries.jpg",
    description:
      "Golden 48-ply butter croissant with airy honeycomb interior, paired with our fudgy 70% Valrhona dark chocolate brownie sprinkled with Maldon flakes.",
    tags: ["Baked at Dawn", "Normandy Butter", "Maldon Sea Salt"],
    tastingNotes: "Toasted Butter · Roasted Hazelnut · Dark Fudge",
  },
];

export const menuItems = [
  // Espresso & Pourover
  {
    category: "espresso",
    name: "Filter V60 Pourover (Single Origin)",
    description: "Ethiopia Guji Uraga, washed process. Brewed to order with tasting notes of bergamot, jasmine flower, and ripe peach.",
    price: "600/-",
    tags: ["Single Origin", "Rotating Harvest"],
  },
  {
    category: "espresso",
    name: "Cortado (4 oz)",
    description: "Equal parts double ristretto espresso and velvety steamed milk in a warm Gibraltar glass. Dense and sweet.",
    price: "450/-",
    tags: ["Balanced", "House Favorite"],
  },
  {
    category: "espresso",
    name: "Velvet Flat White (6 oz)",
    description: "Double extraction of our seasonal heirloom blend folded into micro-foamed whole milk with delicate tulip latte art.",
    price: "475/-",
    tags: ["Silky Microfoam"],
  },
  {
    category: "espresso",
    name: "Double Shot Espresso",
    description: "Pulled on our customized La Marzocco KB90. Rich crema with lingering notes of dark chocolate, dried plum, and toasted walnut.",
    price: "350/-",
    tags: ["Direct Roast"],
  },
  {
    category: "espresso",
    name: "Cardamom Spiced Latte",
    description: "Freshly ground green cardamom steeped directly into espresso, steamed with golden honey and oat milk.",
    price: "575/-",
    tags: ["Seasonal Warmth"],
  },

  // House Cold & Iced
  {
    category: "cold",
    name: "Reserve Cold Brew (18-Hour Steep)",
    description: "Slow immersion steeped Colombian Geisha blend. Exceptionally clean, low acidity, naturally sweet finish over clear ice sphere.",
    price: "550/- ",
    tags: ["18h Cold Brew", "Low Acidity"],
  },
  {
    category: "cold",
    name: "Cascara Blood Orange Espresso Tonic",
    description: "Artisanal botanical tonic, cascara fruit syrup, fresh blood orange wheel, crowned with a floating espresso shot.",
    price: "625/-",
    tags: ["Sparkling", "Refreshing"],
  },
  {
    category: "cold",
    name: "Ceremonial Uji Matcha Latte (Iced)",
    description: "First-harvest stone-ground ceremonial matcha from Kyoto, hand-whisked to order with raw wildflower honey and cold whole milk.",
    price: "625/-",
    tags: ["Kyoto Import", "Antioxidant"],
  },
  {
    category: "cold",
    name: "Iced Sea Salt Caramel Macchiato",
    description: "Handmade brown sugar caramel, house-brewed espresso, cold milk, and a dusting of smoked mineral salt.",
    price: "650/-",
    tags: ["House Caramel"],
  },

  // Artisanal Bakery & Fare
  {
    category: "bakery",
    name: "Classic Viennoise Croissant",
    description: "36-hour cold fermented laminated dough made with Isigny Sainte-Mère butter. Shattering exterior and airy interior.",
    price: "475/-",
    tags: ["Baked Fresh Daily"],
  },
  {
    category: "bakery",
    name: "Valrhona 70% Dark Sea Salt Brownie",
    description: "Ultra-fudgy single-estate dark chocolate square studded with cocoa nibs and finished with crunchy Maldon sea salt.",
    price: "525/-",
    tags: ["Gluten-Friendly Option"],
  },
  {
    category: "bakery",
    name: "Cardamom Almond Morning Bun",
    description: "Swedish-inspired brioche twist infused with freshly crushed green cardamom and topped with toasted sliced almonds.",
    price: "560/-",
    tags: ["Bakers Choice"],
  },
  {
    category: "bakery",
    name: "Whipped Ricotta & Mission Fig Sourdough",
    description: "Toasted country sourdough topped with whipped lemon ricotta, caramelized mission figs, wildflower honey, and fresh thyme.",
    price: "850/-",
    tags: ["Savory Light Fare", "House Sourdough"],
  },
];

export const galleryItems = [
  {
    id: "g1",
    image: "/images/pourover-craft.jpg",
    title: "Precision Pourover",
    caption: "Slow kettle circles and bloom at 93°C",
    tag: "Brew Bar",
    aspect: "landscape",
  },
  {
    id: "g2",
    image: "/images/story-interior.jpg",
    title: "Sun-drenched Oak",
    caption: "Acoustic peace, indoor olive tree & morning light",
    tag: "Interior",
    aspect: "wide",
  },
  {
    id: "g3",
    image: "/images/menu-iced-latte.jpg",
    title: "Cascara Cold Foam",
    caption: "Cloud-like foam meeting single-origin espresso",
    tag: "Signatures",
    aspect: "portrait",
  },
  {
    id: "g4",
    image: "/images/hero-espresso.jpg",
    title: "The Morning Pull",
    caption: "Freshly pulled shot into speckled ceramic",
    tag: "Espresso Bar",
    aspect: "landscape",
  },
  {
    id: "g5",
    image: "/images/ritual-moment.jpg",
    title: "Quiet Mornings",
    caption: "Journaling with a velvet flat white",
    tag: "Atmosphere",
    aspect: "landscape",
  },
  {
    id: "g6",
    image: "/images/beans-roast.jpg",
    title: "Small-Batch Roasting",
    caption: "Ethically sourced microlots roasted weekly",
    tag: "Roastery",
    aspect: "landscape",
  },
];

export const footerLinks = {
  navigation: [
    { label: "Our Story", href: "#story" },
    { label: "Craft & Roast", href: "#craft" },
    { label: "Signature Menu", href: "#menu" },
    { label: "Atmosphere & Gallery", href: "#atmosphere" },
    { label: "Hours & Location", href: "#visit" },
  ],
  socials: [
    { label: "Instagram", url: "https://instagram.com", handle: "@woatcafe" },
    { label: "Pinterest", url: "https://pinterest.com", handle: "woat_spaces" },
    { label: "Spotify", url: "https://spotify.com", handle: "Morning at WOAT" },
  ],
};
