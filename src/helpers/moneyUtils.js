export function formatMoney(amount) {
    let strAmount = amount.toString();
    let formattedAmount = '';
  
    if (strAmount.startsWith('-')) {
      formattedAmount += '-';
      strAmount = strAmount.slice(1);
    }
  
    for (let i = strAmount.length - 1, count = 0; i >= 0; i--, count++) {
      if (count % 3 === 0 && count !== 0) {
        formattedAmount = ',' + formattedAmount;
      }
      formattedAmount = strAmount[i] + formattedAmount;
    }
  
    return formattedAmount;
  }