import React, {useEffect, useState} from 'react'
import useDebounce from '../../utils/useDebounce';
import BagProduct from '../BagProduct/BagProduct'
import {useSelector} from 'react-redux'
import './SearchBar.scss'

const SearchBar = ({productsList}) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchProductResult, setSearchProductResult] = useState([])
    const debouncedTerm = useDebounce(searchQuery, 200)

    useEffect(() => {
      const search = () => {
        if(debouncedTerm) {
            const searchResult = productsList.filter(product => product.name.includes(debouncedTerm.toUpperCase()))
            setSearchProductResult(searchResult)
        } else {
          setSearchProductResult([])
        }
      }
      search();
    }, [debouncedTerm])

    return (
      <div className="search__container">
        <div className="search__area">
          <input type="text" className="search__input" placeholder="Buscar por produto..." 
            onChange={ text => setSearchQuery(text.target.value) }></input>
        </div>

        <div className="search__content">
            {
              searchProductResult.length > 0 
              ? searchProductResult.map(product =>{
                return (
                  <BagProduct product={{product: product}} isSearch={true} key={product.code_color} />
                )
              })
                : <div className="search__result--empty"> 
                    <div>Nenhum item encontrado :\</div> 
                  </div>
            }  
          </div>

      </div>
    )
}

export default SearchBar;