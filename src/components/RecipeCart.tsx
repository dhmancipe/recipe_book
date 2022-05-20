
import star from '../assets/icons/ic_star.svg';
import heart from '../assets/icons/ic-favorite.svg';
import { Dish } from '../interfaces/interfaces'



export const RecipeCart = (props:any)=>{
  return(
    <div className="cart_container_base">

      <div className="cart_container_info">
        <img src={props.image}  className="cart_info_img" />
        <div className="cart_info_titte">
          <h5>Sweet</h5><h6 className="cart_info_titteItalic" >Cherries</h6>
        </div>
        <div className="cart_footer_content">
          <div>
            <img src={star}  className="cart_footer_star" />
            <span className="cart_footer_number">{props.healthScore}</span>
          </div>
          <img src={heart}  className="cart_footer_heart" />

        </div>
      </div>


    </div>
  )
}
