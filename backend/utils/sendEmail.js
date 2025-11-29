import nodemailer from "nodemailer";

export const sendOrderEmail = async (to, order) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("EMAIL credentials not set — skipping sendEmail.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const itemsHtml = order.items.map(i =>
    `<li>${i.name} (${i.size}) x${i.qty} — ₹${i.price}</li>`
  ).join("");

  const html = `
    <h2>Thank you for your order!</h2>
    <p>Order ID: <b>${order._id}</b></p>
    <p>Date: ${new Date(order.orderDate).toLocaleString()}</p>
    <h3>Items</h3>
    <ul>${itemsHtml}</ul>
    <h3>Total: ₹${order.totalPrice}</h3>
    <p>We appreciate your purchase!</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: `Order Confirmation - ${order._id}`,
    html
  });
};
