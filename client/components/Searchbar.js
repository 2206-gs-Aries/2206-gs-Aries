import React, { useState } from 'react'
import {connect} from 'react-redux'

function Searchbar(props) {
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
       const searchWord = event.target.value
       const newFilter = props.products.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
       })
       if (searchWord === '') {
        setFilteredData([])
       } else {
        setFilteredData(newFilter)
       }
      
    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };
    return (
        <div className="header_searchInput">
            <div className='searchInputs'>
                <input type='text'className="header_searchInput" id="mysearch" placeholder="Search" onChange={ handleFilter }/>
                <div className="searchIcon">
                {/* {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )} */}
                   
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className='dataResult'>
                {filteredData.map((product) => (
                    <a className='dataItem' href={`/home/${product.id}`}><p>{ product.name }</p></a>
                    
                        ))}
                </div>
            )}
        </div>
    )
}

const mapState = (state) => {
    return {
        products: state.product,
        id: state.auth.id,
    };
  };

export default connect(mapState)(Searchbar)