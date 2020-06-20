import React, {useEffect} from 'react'
import {useState} from 'react'
import HomeProductCard from '../../components/ProductCard/HomeProductCard'
import './ProductsCatalog.css'

const ProductsCatalog = () => {
  const [products, setProducts] = useState([])

    useEffect(()=> {
        async function getProducts() {
            const productInfo = await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
                .then(res => res.json())
            setProducts(productInfo)
        }
        getProducts();
    }, [])

  if(!products.length){
    return (
      <h1>Sem produtos para exibir</h1>
    )
  }
  return (
    <div className="product__grid">
		{products.map(prod =>{
			return (
				<HomeProductCard {...prod} key={prod.image}/>
			)
		})}
      
    </div>
  )
}

export default ProductsCatalog;
