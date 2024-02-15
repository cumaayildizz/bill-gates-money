import React from 'react';
import { formatMoney } from '../../helpers/moneyUtils';
import "./receipt.css";

const Receipt = ({ receiptList }) => {
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        receiptList.forEach(product => {
            totalPrice += product.productPrice * product.quantity;
        });
        return totalPrice;
    };


    return (
        <div className={'receipt-container'}>
            <span className={'title'}>Your Receipt</span>
            <div>
                {receiptList.map(product => (
                    <div className={"receipt-product"} key={product.id}>
                        <div className={"receipt-product-name"}>{product.productName}</div>
                        <div className={"receipt-product-piece"}>x{product.quantity}</div>
                        <div className={"receipt-product-price"}>
                            ${formatMoney(product.productPrice)}
                        </div>
                    </div>
                ))}
                <hr />
            </div>
            <hr />
            <div className={"receipt-product receipt-total"}>
                <span className={"total-text"}>TOTAL</span>
                <div className={"total-price"}>${formatMoney(calculateTotalPrice())}</div>
            </div>
        </div>
    );
}

export default Receipt;





// import React, { useState } from 'react';
// import { formatMoney } from '../../helpers/moneyUtils';
// import "./receipt.css";

// const Receipt = ({ productList }) => {
//     // Sepete eklenen ürünleri saklamak için bir state tanımla
//     const [selectedProducts, setSelectedProducts] = useState([]);

//     // Sepete eklenen ürünleri sepet listesine ekleyen fonksiyon
//     const addToReceipt = (product) => {
//         setSelectedProducts(prevProducts => [...prevProducts, product]);
//     };

//     // Sepete eklenen ürünlerden toplam tutarı hesapla
//     const calculateTotalPrice = () => {
//         let totalPrice = 0;
//         selectedProducts.forEach(product => {
//             totalPrice += product.productPrice * product.quantity;
//         });
//         return totalPrice;
//     };

//     // Ürün sepetine eklenince çalışacak olan fonksiyon
//     const handleProductSelection = (product) => {
//         if (product.quantity > 0) {
//             addToReceipt(product);
//         }
//     };

//     return (
//         <div className={'receipt-container'}>
//             <span className={'title'}>Your Receipt</span>
//             <div>
//                 {productList.map(product => (
//                     <div className={"receipt-product"} key={product.id}>
//                         <div className={"receipt-product-name"}>{product.productName}</div>
//                         <div className={"receipt-product-piece"}>x{product.quantity}</div>
//                         <div className={"receipt-product-price"}>
//                             ${formatMoney(product.productPrice )}
//                             {/* ${formatMoney(product.productPrice * product.quantity)} */}
//                         </div>
//                         {handleProductSelection(product)} {/* Ürün sepete eklenince çalışacak */}
//                     </div>
//                 ))}
//                 <hr />
//             </div>
//             <hr />
//             <div className={"receipt-product receipt-total"}>
//                 <span className={"total-text"}>TOTAL</span>
//                 <div className={"total-price"}>${formatMoney(calculateTotalPrice())}</div>
//             </div>
//         </div>
//     );
// }

// export default Receipt;



//         Your Receipt
// Mansion           x1          $45000000
// Mona Lisa         x1         $780000000
// Skyscraper        x1         $850000000
// NBA Team          x1        $2100000000 
// Big Mac           x4                 $8 
// _______________________________________
// TOTAL                       $3795000008                    


//         Your Receipt

// Big Mac           x4                 $8 
// Flip Flop         x1                 $3 
// _______________________________________
// TOTAL                               $11 