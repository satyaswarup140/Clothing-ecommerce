import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import { sendOrderEmail } from "../utils/sendEmail.js";

export const createOrder = async (req, res, next) => {
  try {
    const { items, totalPrice } = req.body;

    // optional: validate stock here

    const order = await Order.create({
      user: req.user._id,
      items,
      totalPrice
    });

    // clear cart
    await Cart.findOneAndDelete({ user: req.user._id });

    // send email (best effort)
    try {
      await sendOrderEmail(req.user.email, order);
    } catch (e) {
      console.warn("Email send failed:", e.message);
    }

    res.json(order);
  } catch (err) {
    next(err);
  }
};

export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    next(err);
  }
};
