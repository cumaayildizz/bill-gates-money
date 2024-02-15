import React, { useState } from 'react';
import { formatMoney } from '../../helpers/moneyUtils';
import "./products.css";

function Products({
  productImg,
  productName,
  productPrice,
  handleTransaction,
  setReceiptList,
}) {
  const [inputValue, setInputValue] = useState(0);

  const handleSell = () => {
    if (inputValue > 0) {
      handleTransaction(-1 * productPrice);
      setInputValue(inputValue - 1);
      setReceiptList((prevReceiptList) => {
        const updatedReceiptList = [...prevReceiptList];
        const itemIndex = updatedReceiptList.findIndex(
          (item) => item.productName === productName
        );
        if (itemIndex !== -1) {
          updatedReceiptList[itemIndex].quantity -= 1;
        }
        return updatedReceiptList;
      });
    }
  };
  
  const handleBuy = () => {
    handleTransaction(productPrice);
    setInputValue(inputValue + 1);
    setReceiptList((prevReceiptList) => {
      const updatedReceiptList = [...prevReceiptList];
      const itemIndex = updatedReceiptList.findIndex(
        (item) => item.productName === productName
      );
      if (itemIndex !== -1) {
        updatedReceiptList[itemIndex].quantity += 1;
      } else {
        updatedReceiptList.push({
          productName,
          productPrice,
          quantity: 1,
        });
      }
      return updatedReceiptList;
    });
  };
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value === "" ? 0 : value);
    const difference = parsedValue - inputValue;
    setInputValue(parsedValue);
    handleTransaction(difference * productPrice);
    setReceiptList((prevReceiptList) => {
      const updatedReceiptList = [...prevReceiptList];
      const itemIndex = updatedReceiptList.findIndex(
        (item) => item.productName === productName
      );
      if (itemIndex !== -1) {
        updatedReceiptList[itemIndex].quantity = parsedValue; // Quantity güncellendi
      } else {
        updatedReceiptList.push({
          productName,
          productPrice,
          quantity: parsedValue, 
        });
      }
      return updatedReceiptList;
    });
  };

  const formattedPrice = formatMoney(productPrice);

  return (
    <div className="products-component-container">
      <img src={productImg} alt="" />
      <div className="product-info">
        <span>{productName}</span>
        <div>${formattedPrice}</div>
      </div>
      <div className="product-btn">
        <button
          className={inputValue > 0 ? "sell red" : "sell"}
          onClick={handleSell}
        >
          Sell
        </button>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button className="buy" onClick={handleBuy}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default Products;







// import React, { useState } from "react";
// import { formatMoney } from "../../helpers/moneyUtils";
// import "./products.css";

// function Products({
//   productImg,
//   productName,
//   productPrice,
//   handleTransaction,
//   totalMoney,
//   setReceiptList,
// }) {
//   const [inputValue, setInputValue] = useState(0);

//   const handleSell = () => {
//     if (inputValue > 0) {
//       setInputValue((prevValue) => Math.max(0, prevValue - 1));
//       handleTransaction(-1 * productPrice);
//     }
//   };

//   const handleBuy = () => {
//     setInputValue((prevValue) => prevValue + 1);
//     handleTransaction(productPrice);
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     const parsedValue = parseInt(value === "" ? 0 : value);
//     const difference = parsedValue - inputValue; 
//     setInputValue(parsedValue);
//     handleTransaction(difference * productPrice); 
//   };

//   const formattedPrice = formatMoney(productPrice);


//   return (
//     <div className="products-component-container">
//       <img src={productImg} alt="" />
//       <div className="product-info">
//         <span>{productName}</span>
//         <div>${formattedPrice}</div>
//       </div>
//       <div className="product-btn">
//         <button
//           className={inputValue > 0 ? "sell red" : "sell"}
//           onClick={handleSell}
//         >
//           Sell
//         </button>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button className="buy" onClick={handleBuy}>
//           Buy
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Products;
