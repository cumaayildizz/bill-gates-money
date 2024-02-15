import React, { useState } from 'react';
import Header from './components/header/Header';
import TotalMoney from './components/totalMoney/TotalMoney';
import Products from './components/product/Products';
import Receipt from './components/receipt/Receipt';
import './App.css';
import { productList as importedProductList } from './data'; // productList değişkenini importedProductList olarak import et

function App() {
  const [totalMoney, setTotalMoney] = useState(100000000000); // totalMoney state'i ve setTotalMoney fonksiyonu tanımlandı
  const [productList, setProductList] = useState(importedProductList); // productList değişkeni import edildi
  const [receiptList, setReceiptList] = useState([]);

  const handleTransaction = (amount) => {
    // handleTransaction fonksiyonu, totalMoney state'ini güncellemek için kullanılıyor
    setTotalMoney((prevTotalMoney) => prevTotalMoney - amount);
  };

  return (
    <div className="container">
      <Header />
      <TotalMoney totalMoney={totalMoney} transactionResult={0} /> {/* totalMoney prop'unu App bileşeninden geçirildi */}
      <div className="products-container">
        {productList.map((product) => (
          <Products
            key={product.id}
            productImg={product.productImg}
            productName={product.productName}
            productPrice={product.productPrice}
            handleTransaction={handleTransaction}
            totalMoney={totalMoney}
            setProductList={setProductList}
            receiptList={receiptList}
            setReceiptList={setReceiptList}
          />
        ))}
      </div>
      <Receipt receiptList={receiptList} />
    </div>
  );
}

export default App;




// import React, { useState } from 'react';
// import Header from './components/header/Header';
// import TotalMoney from './components/totalMoney/TotalMoney';
// import Products from './components/product/Products';
// import Receipt from './components/receipt/Receipt';
// import './App.css';
// import { productList as importedProductList } from './data'; // productList değişkenini importedProductList olarak import et

// function App() {
//   const [totalMoney, setTotalMoney] = useState(100000000000); // totalMoney state'i ve setTotalMoney fonksiyonu tanımlandı
//   const [productList, setProductList] = useState(importedProductList); // productList değişkeni import edildi
//   const [receiptList , setReceiptList] = useState ([])

//   const handleTransaction = (amount) => {
//     // handleTransaction fonksiyonu, totalMoney state'ini güncellemek için kullanılıyor
//     setTotalMoney((prevTotalMoney) => prevTotalMoney - amount);
//   };

//   return (
//     <div className="container">
//       <Header />
//       <TotalMoney totalMoney={totalMoney} transactionResult={0} /> {/* totalMoney prop'unu App bileşeninden geçirildi */}
//       <div className="products-container">
//         {productList.map((product) => (
//           <Products
//             key={product.id}
//             productImg={product.productImg}
//             productName={product.productName}
//             productPrice={product.productPrice}
//             handleTransaction={handleTransaction}
//             totalMoney={totalMoney} 
//             handleProductList={setProductList} 
//             setReceiptList = {setReceiptList}
//           />
//         ))}
//       </div>
//       <Receipt productList={productList} />
//     </div>
//   );
// }

// export default App;
