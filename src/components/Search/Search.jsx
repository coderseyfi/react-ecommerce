import React from 'react'
import './search.scss'

const Search = () => {
  return (
    <div className="search">
      <p className="search__title">Search item</p>
      <input
        type="text"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        className="search__input"
      />
    </div>
  )
}

export default Search
