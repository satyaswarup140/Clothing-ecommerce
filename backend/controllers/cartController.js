import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.json({ items: [] });
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const { productId, size, qty = 1 } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [{ product: product._id, name: product.name, size, qty, price: product.price }]
      });
    } else {
      const existing = cart.items.find(i => i.product.toString() === productId && i.size === size);
      if (existing) existing.qty += Number(qty);
      else cart.items.push({ product: product._id, name: product.name, size, qty, price: product.price });
      await cart.save();
    }
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const { items } = req.body; // full items array
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = await Cart.create({ user: req.user._id, items: [] });
    cart.items = items;
    await cart.save();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

export const removeFromCart = async (req, res, next) => {
  try {
    const { productId, size } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(400).json({ message: "Cart empty" });
    cart.items = cart.items.filter(i => !(i.product.toString() === productId && i.size === size));
    await cart.save();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};
