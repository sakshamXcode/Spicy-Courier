import { useState } from 'react';
import { assets } from '../../assets/assets'
import './FoodItem.css'
import PropTypes from 'prop-types'; 

const FoodItem = ({name, price, description, image}) => {
    const [itemCount, setItemCount]=useState(0);
  return (
    <div className='food-item' >
        <div className="food-item-img-container" >
            <img className='food-item-image' src={image} alt='' />
      {
        !itemCount? <img className='add' 
        onClick={()=>setItemCount(prev=>prev+1)}
         src={assets.add_icon_white} alt=''/>
        :<div className='food-item-counter'>
<img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt='remove icon' />
     <p> 
      {itemCount}
    </p>
    <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt='add icon' />
        </div>
      }
      
      
        </div>

        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='' />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}
FoodItem.propTypes = {
    //  id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

export default FoodItem
