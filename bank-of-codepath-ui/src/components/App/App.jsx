import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TransactionDetail from "../TransactionDetail/TransactionDetail"

export default function App() {
  const [isLoading, setIsLoading] = React.useState("")
  const [transactions, setTransactions] = React.useState("")
  const [transfers, setTransfers] = React.useState("")
  const [error, setError] = React.useState("")
  const [filterInputValue, setfilterInputValue] = React.useState("")
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main> 
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="transactions/:transactionId" element={<TransactionDetail/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
      
    </div>
  )
}
