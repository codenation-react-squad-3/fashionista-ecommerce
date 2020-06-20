import React, {useEffect} from 'react'
import {useState} from 'react'
import HomeProductCard from '../../components/ProductCard/HomeProductCard'
import './ProductsCatalog.css'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProductsService} from '../../store/actions/productsActions'

const ProductsCatalog = () => {
	const {productsList, loading} = useSelector((state)=>state.products)
	const dispatch = useDispatch();

	useEffect(()=> {
		async function getProducts() {
			dispatch(fetchProductsService())
		}
		getProducts();
	}, [])

  	if(loading){
    	return (
      	<h1>Sem produtos para exibir</h1>
    	)
  	}
  	return (
		<div className="product__grid">
			{productsList.map(prod =>{
				return (
					<HomeProductCard {...prod} key={prod.image}/>
				)
			})}
		
		</div>
	)
}

export default ProductsCatalog;
