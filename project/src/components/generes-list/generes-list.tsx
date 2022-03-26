import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/actions';
import { FilmCards } from '../../types/film';
type GenresProps ={
  films: FilmCards
}

function GeneresList(props: GenresProps): JSX.Element {
  const {films} = props;
  const createGeneres = (array: FilmCards) => {
    const mySet = new Set<string>();
    mySet.add('All genres');
    array.forEach((element) => {
      const {genre} = element;
      mySet.add(genre);


    });

    const genresList = [...mySet];
    return genresList;


  };

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
