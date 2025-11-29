import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

dotenv.config();
await connectDB();

const products = [
  { name: "Classic White Tee", description: "100% cotton", price: 499, image: "https://picsum.photos/seed/p1/400/400", category: "Men", sizes: ["S","M","L","XL"], stock: 50 },
  { name: "Black Hoodie", description: "Warm fleece hoodie", price: 1199, image: "https://picsum.photos/seed/p2/400/400", category: "Men", sizes: ["M","L","XL"], stock: 30 },
  { name: "Blue Denim Jeans", description: "Slim fit denim", price: 1599, image: "https://picsum.photos/seed/p3/400/400", category: "Men", sizes: ["M","L","XL"], stock: 25 },
  { name: "Floral Dress", description: "Summer floral dress", price: 1799, image: "https://picsum.photos/seed/p4/400/400", category: "Women", sizes: ["S","M","L"], stock: 15 },
  { name: "Women's Tee", description: "Soft scoop tee", price: 599, image: "https://picsum.photos/seed/p5/400/400", category: "Women", sizes: ["S","M","L"], stock: 40 },
  { name: "Kids Cotton Tee", description: "Comfortable kids tee", price: 399, image: "https://picsum.photos/seed/p6/400/400", category: "Kids", sizes: ["S","M"], stock: 60 },
  { name: "Leather Jacket", description: "Faux leather jacket", price: 4999, image: "https://picsum.photos/seed/p7/400/400", category: "Men", sizes: ["M","L"], stock: 10 },
  { name: "Sport Shorts", description: "Quick dry shorts", price: 799, image: "https://picsum.photos/seed/p8/400/400", category: "Men", sizes: ["S","M","L"], stock: 45 },
  { name: "Yoga Pants", description: "Stretch fabric", price: 1299, image: "https://picsum.photos/seed/p9/400/400", category: "Women", sizes: ["S","M","L"], stock: 35 },
  { name: "Kids Hoodie", description: "Cozy kids hoodie", price: 699, image: "https://picsum.photos/seed/p10/400/400", category: "Kids", sizes: ["S","M"], stock: 40 },
  { name: "Formal Shirt", description: "Slim formal shirt", price: 1399, image: "https://picsum.photos/seed/p11/400/400", category: "Men", sizes: ["M","L","XL"], stock: 20 },
  { name: "Casual Shirt", description: "Everyday casual", price: 999, image: "https://picsum.photos/seed/p12/400/400", category: "Men", sizes: ["S","M","L"], stock: 35 },
  { name: "Summer Hat", description: "Sun hat", price: 299, image: "https://picsum.photos/seed/p13/400/400", category: "Women", sizes: ["One Size"], stock: 80 },
  { name: "Winter Beanie", description: "Warm beanie", price: 399, image: "https://picsum.photos/seed/p14/400/400", category: "Men", sizes: ["One Size"], stock: 60 },
  { name: "Running Shoes", description: "Lightweight", price: 2499, image: "https://picsum.photos/seed/p15/400/400", category: "Men", sizes: ["8","9","10"], stock: 25 },
  { name: "Sneakers Women", description: "Comfort sneakers", price: 2299, image: "https://picsum.photos/seed/p16/400/400", category: "Women", sizes: ["6","7","8"], stock: 30 },
  { name: "Denim Jacket Women", description: "Trendy jacket", price: 2599, image: "https://picsum.photos/seed/p17/400/400", category: "Women", sizes: ["S","M","L"], stock: 18 },
  { name: "Chinos", description: "Stretch chinos", price: 1499, image: "https://picsum.photos/seed/p18/400/400", category: "Men", sizes: ["M","L","XL"], stock: 22 },
  { name: "Maxi Dress", description: "Evening maxi", price: 2999, image: "https://picsum.photos/seed/p19/400/400", category: "Women", sizes: ["S","M","L"], stock: 12 },
  { name: "Kids Shorts", description: "Play shorts", price: 349, image: "https://picsum.photos/seed/p20/400/400", category: "Kids", sizes: ["S","M"], stock: 55 }
];

const seed = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
