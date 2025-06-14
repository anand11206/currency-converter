import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfoFrom = useCurrencyInfo(from)
  const currencyInfoTo = useCurrencyInfo(to)
  const currencyOptionsFrom = Object.keys(currencyInfoFrom)
  const currencyOptionsTo = Object.keys(currencyInfoTo)
  
  
  const convert = () => {
    setConvertedAmount(currencyInfoFrom[to]*amount)
  }
  return (
    <>
    <div className='w-full h-screen bg-gray-600 flex flex-col justify-center items-center'>
    <InputBox 
    label="From" 
    amount={amount}
    defaultCurrency={from}
    onAmountChange={(e) => setAmount(e.target.value)}
    currencyOptions={currencyOptionsFrom}
    onCurrencyChange={(e) => setFrom(e.target.value)}
    />
    <InputBox 
    label="To"
    amount={convertedAmount}
    defaultCurrency={to}
    amountDisabled
    currencyOptions={currencyOptionsTo}
    onCurrencyChange={(e) => setTo(e.target.value)}

    />
    <button type="button"
    className='text-white bg-blue-600 p-5 rounded-xl m-2 text-3xl hover:bg-blue-800 '
    onClick={() => convert()}>
      Convert {from} to {to}
    </button>
    
    </div>
    
    </>
  )
}

export default App
