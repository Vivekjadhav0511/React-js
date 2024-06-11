
import { useEffect,useState } from "react";

function useCostomHooks(currency) {
   let [data,setdata] = useState({})
    useEffect(()=>{
        fetch("https://latest.currency-api.pages.dev/v1/currencies/usd.json")
        .then((res)=> res.json())
        .then((data)=> setdata(data[currancy]))
    },[currency])
  
    return data 
}


export default useCostomHooks;
