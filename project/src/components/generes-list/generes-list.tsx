import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/actions';
import { FilmCards } from '../../types/film';
import { createGeneres } from './genres-list-functions';
type GenresProps ={
  films: FilmCards
}

function GeneresList(props: GenresProps): JSX.Element {
  const {films} = props;
  const allGeneres = createGeneres(films);
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state)=> state.genre);
  return (
    <ul className="catalog__genres-list">
      {allGeneres.map((genre)=>(


        <li key={genre} onClick={() => {
          dispatch(changeGenre(genre));
        }}

        className={`catalog__genres-item  ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
        >
          <Link  className="catalog__genres-link" to={''}>{genre}</Link>
        </li>


      ))}
    </ul>
  );
}

export default GeneresList;
