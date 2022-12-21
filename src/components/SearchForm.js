import React,{useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('');

  const Submit =(e)=>{
    e.preventDefault()
    console.log(searchValue.current.value);
    setSearchTerm(searchValue);
  }

  const searchCockTail =()=>{
    setSearchTerm(searchValue.current.value);
  }


  return (
    <section className="section search">
      <form className="search-form" onSubmit={Submit}>
      <div className="form-control">
        <label htmlFor="name">Search For Any Beverage</label>
        <input type="text" ref={searchValue} id="name" onChange={searchCockTail}/>
      </div>
      </form>
    </section>
  )
}

export default SearchForm
