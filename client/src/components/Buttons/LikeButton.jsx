import React, {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

export const LikeButton = () => {
    const [ isFavorite, setIsFavorite] = useState(false)
  return (
    <>
    
    {isFavorite ? 
    <AddIcon />: 
    <FavoriteIcon color='red' fill='red' /> 
    }
  </>
  )
}
