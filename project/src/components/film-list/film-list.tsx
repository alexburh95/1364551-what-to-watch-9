import FilmCard from '../film-card/film-card';

import { FilmCards } from '../../types/film';
type FilmProps ={
  films: FilmCards
}
function FilmList(props: FilmProps): JSX.Element {

  const {films} =props;
  return(
    <div className="catalog__films-list">
      {films.map((film)=>(<FilmCard key={film.id} film={film} /> ))}

    </div>
  );

}

export default FilmList;
