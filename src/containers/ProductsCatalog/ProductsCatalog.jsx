import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import HomeProductCard from '../../components/ProductCard/HomeProductCard'
import {fetchProductsService} from '../../store/actions/productsActions'
import './ProductsCatalog.scss'

import loadingGif from '../../assets/images/loading-spinner.gif';

const ProductsCatalog = () => {
	const {productsList, loading, error} = useSelector((state)=>state.products)
	const dispatch = useDispatch();

	useEffect(()=> {
		async function getProducts() {
			dispatch(fetchProductsService())
		}
		getProducts();
	}, [])

	if (error) {
		return (
			<div className="error">
				=/  Oops, ocorreu um erro no processamento dos produtos.
			</div>
		)
	}
  	else if(loading){
    	return (
				<div className="loading">
					<img src={loadingGif} alt="loading..." />
				</div>
    	)
  	}
  	return (
			<section className="productsCatalog">
				<div className="productsCatalog__container">
				<div className="productsCatalog__counter"> 22 itens </div>

				<div className="product__grid">
					{
						productsList.map(prod =>{
							return (
								<HomeProductCard {...prod} key={prod.code_color}/>
							)
					})}
				</div>
			</div>
			</section>
	)
}

export default ProductsCatalog;
