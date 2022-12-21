import React,{useState,useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail , setCocktail] = useState(null)

  useEffect(()=>{
    setLoading(true)
    async function fetchData() {
      try{
        const res = await fetch(`${url}${id}`)
        const data = await res.json()

        if(data.drinks){
          const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instructions,strIngredient1:ing1,strIngredient2:ing2,strIngredient3:ing3,strIngredient4:ing4} = data.drinks[0]
          const ingredients = [ing1,ing2,ing3,ing4]
          const newIng = {name,image,info,category,glass,instructions,ingredients}
          setCocktail(newIng)

        }else{
          setCocktail(null)
        }
        setLoading(false)
        console.log(data)

      }catch(err){
        console.log(err)
      }
    }
    fetchData()
    setLoading(false)
  },[id])


  if(loading){
    return <Loading/>
  }

  if(!cocktail){
    return <h1 className="section-title">No drinks to show</h1>
  }

  const {name,image,ingredients,instructions,glass,info} = cocktail


  return (
    <section className="section cocktail-section">
    <Link to='/' className="btn btn-primary">
      Main Page
    </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p><span className="drink-data">Name:</span> <span>{name}</span></p>
          <p><span className="drink-data">Info:</span> <span>{info}</span></p>
          <p><span className="drink-data">Instructions:</span>  <span>{instructions}</span></p>
          <p><span className="drink-data">Glass: <span>{glass}</span></span></p>
          <p><span className="drink-data">Ingredients:</span><span>{ingredients.map((item,index)=> {
            return item ? <span key={index}>{item}</span>:''
          })}</span></p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
