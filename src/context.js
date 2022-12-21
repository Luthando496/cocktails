import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'
// import {axios} from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cocktails,setCock] = useState([])
  const [loading,setLoading] = useState(true)
  const [searchTerm,setSearchTerm] = useState('e')


  const fetchDrinks =async()=>{
    try{
      setLoading(true)

      const {data} = await axios.get(`${url}${searchTerm}`)
      const newDrinks = data.drinks.map((drink) => {
       const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = drink
       return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
      })
      setCock(newDrinks)
      console.log(newDrinks)

      if(data){

      }else{
        setCock([])
      }
      setLoading(false)


    }catch(err){
      console.error(err)
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])
  return <AppContext.Provider value={{loading,searchTerm,cocktails,setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
