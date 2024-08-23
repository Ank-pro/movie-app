import { useDispatch, useSelector } from 'react-redux';
import './fav.css';
import { FavCard } from './FavCard';
import { setFavourites } from '../../slice/movieReducer';

export const FavouriteList = ()=>{
    const {favourites} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    
    const handleRemove = (_id)=>{
        dispatch(setFavourites(_id));
    }

    return <div className='fav-movies'>
        {favourites.map(movie => <FavCard key={movie._id} movie={movie} handleRemove={handleRemove}/>)}
    </div>
}