import { Films } from '../../types/film';
import FilmList from '../film-list/film-list';

type LikeFilm = {
  films: Films
}
function LikeFilms(props:LikeFilm) : JSX.Element {
  const {films} = props;

  return(
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={films} />
    </section>
  );

}

export default LikeFilms;

