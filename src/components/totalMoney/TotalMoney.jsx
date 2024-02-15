
import React from 'react';
import { formatMoney } from '../../helpers/moneyUtils';
import "./totalMoney.css";

const TotalMoney = ({ totalMoney, transactionResult }) => {
  let updatedTotalMoney = totalMoney - transactionResult;
  if (updatedTotalMoney < 0) {
    updatedTotalMoney = 0
  }else if (updatedTotalMoney > totalMoney) {
    updatedTotalMoney = totalMoney
  }
  const formattedMoney = formatMoney(updatedTotalMoney);

  return (
    <div className='total-money-container'>
      ${formattedMoney}
    </div>
  );
}

export default TotalMoney;
