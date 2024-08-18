import { useSelector } from 'react-redux';
import './fav.css';
import { FavCard } from './FavCard';

export const FavouriteList = ()=>{
    const {favourites} = useSelector(state => state.movies);
    return <div className='fav-movies'>
        {favourites.map(movie => <FavCard key={movie._id} movie={movie}/>)}
    </div>
}