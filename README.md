# Clothing-Ecommerce (MERN Stack)

A full-stack e-commerce web application built with the **MERN** stack (MongoDB, Express, React, Node.js).  
Allows users to browse products, filter/search, manage cart, mock-checkout, and receive order confirmation email.

## 🚀 Features

- User authentication (register / login) with JWT + bcrypt  
- Product catalog with categories, sizes, stock, price  
- Search + filtering (category, size, price, keyword) + pagination  
- Shopping cart (works for guests via localStorage, and for logged-in users persisted in MongoDB)  
- Order placement (mock checkout)  
- Order confirmation email (via Nodemailer + Gmail / Mailtrap)  
- Backend built with Express.js + Mongoose + MongoDB  
- Frontend built with React.js (Vite) + React Router + Context API  

## 📁 Project Structure

clothing-ecommerce/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── seedProducts.js
│ ├── server.js
│ └── .env
└── frontend/
├── src/
├── public/
├── package.json
└── vite.config.js


## 🔧 Setup & Run Locally

### Prerequisites

- Node.js v18 or higher  
- MongoDB (local or cloud)  
- (Optional) Gmail account + App password for order confirmation emails

### Backend

```bash
cd backend
npm install
# copy .env.example to .env and fill in values
# .env should include:
# PORT, MONGO_URI, JWT_SECRET, EMAIL_USER, EMAIL_PASS, FRONTEND_URL

npm run seed     # (optional) seed database with sample products
npm run dev      # start backend in dev mode

### Frontend
cd ../frontend
npm install
npm run dev

Open your browser at http://localhost:5173 

🧪 Environment Variables:
In backend/.env, you need:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=some_long_strong_secret
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_app_password_or_smtp_pass
FRONTEND_URL=http://localhost:5173

Important: Do not commit .env to Git. Sensitive credentials must stay private. .gitignore file ensures .env stays untracked.

🤝 Contributing
1. Fork the repository
2. Create a new branch: git checkout -b feature/YourFeature
3. Make changes & commit
4. Push branch and open a Pull Request
Please follow existing code style and structure.

⚠️ Known Issues & Future Improvements:
. No real payment gateway — checkout is mock only
. Guest cart not synced with user cart after login
. No user profile or order history page
. Email sending only works with valid SMTP credentials (Gmail App Password or Mailtrap)

Future enhancements:
. Implement real payment integration (e.g. Stripe / Razorpay)
. Add user profile & order history
. Admin panel (add/edit products, manage orders)
. Improve UI / responsive design / better styling

📜 License
MIT
Enjoy the project — and feel free to contribute! ⭐