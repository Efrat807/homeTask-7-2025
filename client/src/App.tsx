
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import OrderPage from './components/orderPage/OrderPage'
import OrderSummary from './components/orderSummary/OrderSummary'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<OrderPage />} />
     <Route path="/order" element={<OrderSummary />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
