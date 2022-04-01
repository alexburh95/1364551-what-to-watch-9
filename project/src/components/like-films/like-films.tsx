import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';
import FilmList from '../film-list/film-list';
import { chooseGenre } from '../generes-list/genres-list-functions';

type LikeFilm = {
  film: Film
}
function LikeFilms(props:LikeFilm) : JSX.Element {
  const {film} = props;
  const {genre} = film;
  const currentFilms = useAppSelector((state) => chooseGenre(genre,state.films));
  return(
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={currentFilms} />
    </section>
  );

}

export default LikeFilms;

