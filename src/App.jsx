import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/Header.jsx";
import ProductList from './components/ProductList/ProductList.jsx';
import Footer from './components/Footer/Footer.jsx';
import products from './data/product.json';

function App() {
  console.log("App se está renderizando");
  const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header onSearch={setSearchTerm}/>
      {

      }
      <div>
        <h1 style={{ textAlign: "center" }}>Tienda Online</h1>
        {/* <ProductList /> */}
        <ProductList products={products} searchTerm={searchTerm} />
      </div>
      <Footer />
    </>
  )
}

export default App
