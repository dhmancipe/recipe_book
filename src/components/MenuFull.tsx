import {MenuItem} from './MenuItem'
import { categories } from '../interfaces/interfaces'




export const MenuFull = ()=>{


  return(
    <div className="menu_container_base" >
      <div className="menu_logo_container">
        <span className="menu_logo_italics">Recipe</span>
        <span className="menu_logo_poppins">App</span>
      </div>
      <div className="menu_list_items">
        {
          categories.map((item, i)=>
            {
                return(
                  <div key={i}>
                    <MenuItem
                      name={item.name}
                    />
                  </div>
                )
              })
          }
      </div>
    </div>
  )
}
