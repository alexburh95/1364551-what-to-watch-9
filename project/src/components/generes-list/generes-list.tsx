import { Link } from 'react-router-dom';
import { DEFAULT_GENRE } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/film-process/film-process';

import { FilmCards } from '../../types/film';
import { createGeneres } from './genres-list-functions';
type GenresProps ={
  films: FilmCards
}

function GeneresList(props: GenresProps): JSX.Element {
  const {films} = props;
  const allGeneres = createGeneres(films);
  const dispatch = useAppDispatch();
  const {currentGenre} = useAppSelector(({FILM}) => FILM);
  return (
    <ul className="catalog__genres-list">


      <li
        onClick={() => {
          dispatch(changeGenre(DEFAULT_GENRE));

        }}


        className={`catalog__genres-item  ${
          DEFAULT_GENRE === currentGenre ? 'catalog__genres-item--active' : ''
        }`}
      >
        <Link className="catalog__genres-link" to={''}>
          {'All genres'}
        </Link>
      </li>
      {allGeneres.map((el) => (
        <li
          key={el}
          onClick={() => {
            dispatch(changeGenre(el));

          }}
          className={`catalog__genres-item  ${
            el === currentGenre ? 'catalog__genres-item--active' : ''
          }`}
        >
          <Link className="catalog__genres-link" to={''}>
            {el}
          </Link>
        </li>


      ))}
    </ul>
  );
}

export default GeneresList;
