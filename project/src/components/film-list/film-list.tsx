import FilmCard from '../film-card/film-card';
import  {films}  from '../../mocks/film';


function FilmList(): JSX.Element {


  return(
    <div className="catalog__films-list">
      {films.map((film)=>(<FilmCard key={film.id} film={film} /> ))}

    </div>
  );

}

export default FilmList;
