import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'
import Loading from './Loading'

const Cocktail = ({image,name,id,info,glass}) => {

  return (
    <article className='cocktail' key={id}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <h4>{info}</h4>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">Details</Link>
      </div>
        
    </article>
  )
}

export default Cocktail
