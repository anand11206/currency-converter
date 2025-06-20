# 💱 React Currency Converter

A responsive and lightweight currency converter built with **React**, using the [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api). This tool enables users to convert between international currencies with up-to-date exchange rates.

---

## 🌐 Live Demo

> [Currency Converter](https://convrt-currency.netlify.app/) – Deployed via Netlify

---

## 🧩 Features

- 🔁 Real-time currency conversion using Fawaz Ahmed’s API
- 🌍 Supports 150+ world currencies
- 🔢 Convert between any two selected currencies
- 🧠 Intelligent input handling

---

## 🛠 Tech Stack

- **React** – Frontend framework
- **Fetch API / Axios** – HTTP requests
- **Tailwind CSS / CSS Modules** – Styling
- **Fawaz Ahmed’s Free Currency API**

---

## 📂 Project Structure

```text
currency-converter/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── InputBox.jsx
|   ├── hooks/
│   │   └── useCurrencyInfo.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── App.css
├── .gitignore
├── package-lock.json
├── eslint.config.json
├── package.json
├── LICENSE
├── vite.config.json
├── index.html
└── README.md
```

## ⚙️ Getting Started

### 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

---

### 🚀 Installation

<!-- code block starts -->
```bash
git clone https://github.com/anand11206/currency-converter.git
cd currency-converter

npm install
# or
yarn install
```
<!-- code block ends -->

---

### 🧪 Running the Application

<!-- code block starts -->
```bash
npm run dev      # For Vite
# or
npm start        # For Create React App
```
<!-- code block ends -->

Visit the app at:

<!-- code block starts -->
```text
http://localhost:5173 or what shows in terminal
```
<!-- code block ends -->

---

### 📦 Building for Production

<!-- code block starts -->
```bash
npm run build
```
<!-- code block ends -->

The production-ready build will be available in the `dist/` (Vite).

---

### 🌍 Deployment

Deploy the contents of the build folder using:

- Vercel
- Netlify
- GitHub Pages
- Render

---

## 🔗 API Reference – Fawaz Ahmed Currency API

A free and fast API for exchange rates, with no authentication required.

Example endpoint:

<!-- code block starts -->
```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json

replace ${currency} with the currency of your choice
```
<!-- code block ends -->

Sample response:

<!-- code block starts -->
```json
{
  "date": "2025-06-20",
  "usd": {
    "1inch": 5.35594171,
    "aave": 0.0039035566,
    "ada": 1.5799834,
    "aed": 3.6725
    }
}
```
<!-- code block ends -->

You can use this data to calculate converted amounts dynamically.

---

## 🧠 Sample Conversion Logic

<!-- code block starts -->
```js
const convertCurrency = async (from, to, amount) => {
  const res = await fetch(`[https://api.currencyapi.com/v1/latest?base=${from}](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json)`);
  const data = await res.json();
  const rate = data[from][to];
  return (amount * rate);
};
```
<!-- code block ends -->

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Your Name**  
GitHub: [@anand11206](https://github.com/anand11206)  
LinkedIn: [linkedin.com/in/anandyadav](https://www.linkedin.com/in/anand-yadav-506a5b354/)

---

## 🤝 Contributions

Contributions are welcome!  
Feel free to open issues or submit a pull request with improvements.

---
