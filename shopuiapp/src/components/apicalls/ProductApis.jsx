import React, {useState, useEffect, useContext} from 'react'
import './ProductApis.css';
import Item from '../items/item'
import axios from "axios";
import {NavMenuContext} from  '../../context/NavMenuContext';
const ProductApis = () => {

    const {selectedNavMenu} = useContext(NavMenuContext)
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const API_BASE_URL = "https://localhost:7065/api/Product/GetAllBsonDocValue/men_products";

    useEffect(()=> {
        if(selectedNavMenu=="home")
        {
            axios.get(API_BASE_URL)
            .then((res) => setProducts(res.data)
                //console.log('response from product api server'+ res.data)
            );
        }
        
    }, [selectedNavMenu])

     // Fetch products
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_BASE_URL);
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch products.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='popular'>
      <h1>Get Products From Api Server</h1>
      <hr/>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

       {/* load Product List */}
       <div className="popular-items">
            {products.map((item,i)=>{
                return <Item key={i} category="men" id={item.id} name={item.name} image={item.img} price={item.price}/>
            }
            )}
        </div>
    </div>
  )
}

export default ProductApis
