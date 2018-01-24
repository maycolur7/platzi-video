import React from 'react'
import './search.css'

// Otra forma de hacer un componente funcional

const Search = (props) => (
  <form onSubmit={props.handleSubmit} className="Search">
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      placeholder="Buscar tu video favorito"
      name="search"
      onChange={props.handleInputChange}
      value={props.value}
    />
  </form>
)

export default Search
