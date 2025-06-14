import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    defaultCurrency="usd",
    onCurrencyChange,
    currencyOptions=["usd","inr"],
    amountDisabled
}){
    return(
        <div className="w-150 h-30 bg-gray-500 m-1 rounded-xl p-2">
            <div className="flex flex-wrap justify-between">
            <label className="text-amber-50 p-2">{label}</label>
            <label className="text-amber-50 p-2">Currency</label>
            
            </div>
            <div className="flex flex-wrap justify-between">
                <input type="number" 
                value={amount}
                disabled={amountDisabled}
                onChange={(e) => onAmountChange && onAmountChange(e)}
                className="w-40 bg-white rounded my-4 mx-2 text-black p-2" />

                <select className="bg-white rounded h-8 w-20 my-4 mx-2" 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e)}>
                    
                { currencyOptions.map((currency) => {
                    if(currency==`${defaultCurrency}`) {
                        return <option value={currency} selected>{currency}</option>
                    }
                    return <option value={currency}>{currency}</option>
                    
                    })}
                </select>

            </div>
        </div>
    )
}
export default InputBox