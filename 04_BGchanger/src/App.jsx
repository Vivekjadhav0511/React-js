
import './App.css'
import BgChanger from './BgChanger'
import IncrementDrement from './IncrementDrement'
import PasswordGenarator from './PasswordGenarator'
import Props from './Props'



function App() {
 let  product={ 
    brand:"Zara",
    size:"XXL",
   price:"999"
  }

  let  productTwo={ 
    brand:"Gucci fashion",
    size:"M",
   price:"1,24,000 $"
  }
  return (
    <>
    {/*  <IncrementDrement/> */}
     {/* <Props name="Zara Wollen t-shirt" productOne={product}/>  {/* productOne={product} */}
    {/*  <Props name="Gucci" productOne={productTwo}/>  {/* productOne={product} */}
     {/* <BgChanger/> */}
     <PasswordGenarator/>
    </>
  )
}

export default App
