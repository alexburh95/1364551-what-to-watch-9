import { Film } from '../../types/film';

type FilmProps = {
  film: Film
}
function FilmCard(props: FilmProps): JSX.Element {
  const {film} = props;
  const {title,picture} = film;
  return (

    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={picture} alt="Shutter Island" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
