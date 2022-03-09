import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import { FilmCards } from '../../types/film';
type FilmProps ={
  films: FilmCards
}
function FilmList(props: FilmProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState(undefined as number| undefined);
  const {films} =props;
  return(
    <div className="catalog__films-list">
      {films.map((film)=>(
        <FilmCard
          isActive={film.id=== activeFilmId}
          onActivate={()=>setActiveFilmId(film.id)}
          onDeactivate ={()=>setActiveFilmId(undefined)}
          key={film.id}
          film={film}
        /> ))}

    </div>
  );

}

export default FilmList;
