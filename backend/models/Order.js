import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      size: String,
      qty: Number,
      price: Number
    }
  ],
  totalPrice: Number,
  status: { type: String, default: "Processing" },
  orderDate: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
