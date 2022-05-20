import {RecipeCart} from './RecipeCart';
import {useState, useEffect} from 'react'
import { Dish } from '../interfaces/interfaces'
import axios from 'axios';



export const Body = ()=>{

  const key='5ca35b4d04b44b57913dffb070d9178a'

  const url='https://api.spoonacular.com/recipes/random?number=8&apiKey='+key;

  const [dishes, setDishes]= useState<Dish[]>([])

     useEffect(()=>{
       axios.get(url)
    .then(function (response) {
      // handle success
      setDishes(response.data.recipes )
      console.log(response.data.recipes);
      })
      .catch(function (error) {
        // handle error
        console.log(error, url);
      })

     },[])

  return(
    <div className="home_body_content" >
      <h2 className="home_body_tittle">Nuevas Recetas</h2>
      <div className="home_body_queryresult">
        {
          dishes.map((item, i)=>
            {
                return(
                  <div key={i}>
                  <RecipeCart
                      image={item.image}
                      healthScore={item.healthScore}
                      readyInMinutes={item.readyInMinutes}
                      servings={item.servings}
                      sourceName={item.sourceName}
                  />
                  </div>
                )
              })
          }

      </div>
    </div>
  )
}
