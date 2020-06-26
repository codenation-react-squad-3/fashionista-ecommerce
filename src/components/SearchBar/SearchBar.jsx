import React, {useEffect, useState} from 'react'
import Modal from '../Modal/Modal'
import useDebounce from '../../utils/useDebounce';
import './SearchBar.scss'

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchProductResult, setSearchProductResult] = useState([])
    const debouncedTerm = useDebounce(searchQuery, 500)
    
    // PRODUCTLIST FICTICIO
    const productList = [{name: 'camila'}, {name: 'joana'}, {name: 'maira'}, {name: 'maiara'}]
    let results

    useEffect(()=> {
        function search() {
            if(debouncedTerm){
                const searchResult = productList.filter(product => product.name.includes(debouncedTerm))
                setSearchProductResult(searchResult)
            } else {setSearchProductResult([])}
        }
        search();
    }, [debouncedTerm])

    if(searchProductResult.length){
        results = searchProductResult.map(item => {
            return <span key={item.name}>{item.name}</span>
        })
    } else { results = (<span className="search__result search__result--empty">Nenhum item encontrado :\</span>)}

    return (
        <Modal title="Pesquisa">
            <div className="search__area">
                <input type="text" className="search__input" placeholder="Buscar por produto..." onChange={text => setSearchQuery(text.target.value)}></input>
            </div>
            <div>
                {results}
            </div>
        </Modal>
    )
}

export default SearchBar;