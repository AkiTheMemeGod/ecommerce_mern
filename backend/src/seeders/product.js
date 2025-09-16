const products = [
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with 2.4GHz USB receiver.",
    Price: 799,
    category: "Electronics",
    stock: 50,
    imageUrl: "https://picsum.photos/600/300"
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches.",
    Price: 3499,
    category: "Electronics",
    stock: 30,
    imageUrl: "https://picsum.photos/601/300"
  },
  {
    name: "Gaming Headset",
    description: "Over-ear gaming headset with surround sound and mic.",
    Price: 2499,
    category: "Electronics",
    stock: 40,
    imageUrl: "https://picsum.photos/602/300"
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable aluminum stand for phones and tablets.",
    Price: 599,
    category: "Accessories",
    stock: 100,
    imageUrl: "https://picsum.photos/603/300"
  },
  {
    name: "USB-C Charger",
    description: "Fast-charging 20W USB-C wall adapter.",
    Price: 1299,
    category: "Electronics",
    stock: 75,
    imageUrl: "https://picsum.photos/604/300"
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with deep bass.",
    Price: 1999,
    category: "Electronics",
    stock: 25,
    imageUrl: "https://picsum.photos/605/300"
  },
  {
    name: "Office Chair",
    description: "Comfortable ergonomic office chair with lumbar support.",
    Price: 5499,
    category: "Furniture",
    stock: 12,
    imageUrl: "https://picsum.photos/606/300"
  },
  {
    name: "LED Desk Lamp",
    description: "Dimmable LED lamp with USB charging port.",
    Price: 999,
    category: "Furniture",
    stock: 60,
    imageUrl: "https://picsum.photos/607/300"
  },
  {
    name: "Notebook",
    description: "Hardcover ruled notebook, 200 pages.",
    Price: 299,
    category: "Stationery",
    stock: 150,
    imageUrl: "https://picsum.photos/608/300"
  },
  {
    name: "Ballpoint Pen Set",
    description: "Pack of 10 smooth-writing ballpoint pens.",
    Price: 199,
    category: "Stationery",
    stock: 200,
    imageUrl: "https://picsum.photos/609/300"
  },
  {
    name: "Running Shoes",
    description: "Lightweight breathable running shoes for men.",
    Price: 2799,
    category: "Clothing",
    stock: 20,
    imageUrl: "https://picsum.photos/610/300"
  },
  {
    name: "Backpack",
    description: "Water-resistant laptop backpack with multiple compartments.",
    Price: 1899,
    category: "Accessories",
    stock: 35,
    imageUrl: "https://picsum.photos/611/300"
  },
  {
    name: "Smart Fitness Band",
    description: "Track your steps, heart rate, and sleep with this waterproof fitness band.",
    Price: 1599,
    category: "Electronics",
    stock: 80,
    imageUrl: "https://picsum.photos/600/301"
  },
  {
    name: "Portable Power Bank",
    description: "10000mAh fast-charging portable power bank for all devices.",
    Price: 1299,
    category: "Electronics",
    stock: 60,
    imageUrl: "https://picsum.photos/600/302"
  },
  {
    name: "Wireless Earbuds",
    description: "Noise-cancelling wireless earbuds with charging case.",
    Price: 2499,
    category: "Electronics",
    stock: 45,
    imageUrl: "https://picsum.photos/600/303"
  },
  {
    name: "Desk Organizer",
    description: "Multi-compartment wooden desk organizer for stationery.",
    Price: 499,
    category: "Furniture",
    stock: 70,
    imageUrl: "https://picsum.photos/600/304"
  },
  {
    name: "Insulated Water Bottle",
    description: "Stainless steel bottle keeps drinks hot or cold for 12 hours.",
    Price: 899,
    category: "Accessories",
    stock: 90,
    imageUrl: "https://picsum.photos/600/305"
  },
  {
    name: "Yoga Mat",
    description: "Non-slip, eco-friendly yoga mat for all types of exercise.",
    Price: 1099,
    category: "Fitness",
    stock: 40,
    imageUrl: "https://picsum.photos/600/306"
  },
  {
    name: "Table Fan",
    description: "Compact, quiet table fan with adjustable speed settings.",
    Price: 1399,
    category: "Electronics",
    stock: 25,
    imageUrl: "https://picsum.photos/600/307"
  },
  {
    name: "Wireless Charger",
    description: "Qi-certified fast wireless charger for smartphones.",
    Price: 999,
    category: "Electronics",
    stock: 55,
    imageUrl: "https://picsum.photos/600/308"
  },
  {
    name: "Sunglasses",
    description: "UV-protected stylish sunglasses for men and women.",
    Price: 799,
    category: "Accessories",
    stock: 120,
    imageUrl: "https://picsum.photos/600/309"
  },
  {
    name: "Travel Mug",
    description: "Leak-proof insulated travel mug for hot and cold drinks.",
    Price: 699,
    category: "Accessories",
    stock: 65,
    imageUrl: "https://picsum.photos/600/310"
  },
  {
    name: "Bluetooth Tracker",
    description: "Attach to keys or bags and track with your phone app.",
    Price: 599,
    category: "Electronics",
    stock: 85,
    imageUrl: "https://picsum.photos/600/311"
  },
  {
    name: "Mini Projector",
    description: "Portable mini projector for movies and presentations.",
    Price: 3999,
    category: "Electronics",
    stock: 18,
    imageUrl: "https://picsum.photos/600/312"
  },
  {
    name: "Electric Kettle",
    description: "1.5L stainless steel electric kettle with auto shut-off.",
    Price: 1499,
    category: "Electronics",
    stock: 33,
    imageUrl: "https://picsum.photos/600/313"
  },
  {
    name: "Fitness Dumbbells Set",
    description: "Pair of 5kg neoprene dumbbells for home workouts.",
    Price: 1599,
    category: "Fitness",
    stock: 22,
    imageUrl: "https://picsum.photos/600/314"
  },
  {
    name: "Wall Clock",
    description: "Modern silent wall clock for home or office.",
    Price: 499,
    category: "Furniture",
    stock: 75,
    imageUrl: "https://picsum.photos/600/315"
  },
  {
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    Price: 1199,
    category: "Accessories",
    stock: 50,
    imageUrl: "https://picsum.photos/600/316"
  },
  {
    name: "Wireless Presenter",
    description: "Remote control for presentations with laser pointer.",
    Price: 899,
    category: "Electronics",
    stock: 38,
    imageUrl: "https://picsum.photos/600/317"
  },
  {
    name: "Desk Plant",
    description: "Artificial succulent plant in a ceramic pot.",
    Price: 349,
    category: "Furniture",
    stock: 110,
    imageUrl: "https://picsum.photos/600/318"
  },
  {
    name: "Magnetic Whiteboard",
    description: "Magnetic dry erase whiteboard for notes and reminders.",
    Price: 799,
    category: "Stationery",
    stock: 42,
    imageUrl: "https://picsum.photos/600/319"
  },
  {
    name: "Folding Umbrella",
    description: "Windproof compact folding umbrella with cover.",
    Price: 599,
    category: "Accessories",
    stock: 95,
    imageUrl: "https://picsum.photos/600/320"
  },
  {
    name: "Wireless Security Camera",
    description: "WiFi-enabled indoor security camera with night vision.",
    Price: 2999,
    category: "Electronics",
    stock: 27,
    imageUrl: "https://picsum.photos/600/321"
  }
];

export default products;
