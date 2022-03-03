import FilmCard from '../film-card/film-card';
import  {Films}  from '../../mocks/film';
import { Film } from '../../types/film';

function FilmList(): JSX.Element {
  const films = {Films};
  return(
    films.map((film:Film)=> (<FilmCard
      film = {film}
      key = {film.id}
    />))
  );

}

export default FilmList;
