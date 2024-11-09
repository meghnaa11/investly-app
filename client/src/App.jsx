import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <h1>Investly</h1>
    </>
  )
}

export default App
