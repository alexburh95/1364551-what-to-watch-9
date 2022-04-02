import { Fragment } from 'react';
import { useFilm } from '../../hooks/use-film';
import NotFound from '../404-screen/404-screen';
import { getRatingLevel } from './film-overview-functions';

function FilmOverview(): JSX.Element {
  const film = useFilm();
  if(typeof film === 'undefined'){
    return <NotFound />;
  }
  const {rating,director, description, starring, scoresCount} = film;
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">

        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring:
            {
              starring.map((el) => (
                <Fragment key={el}>
                  {el}
                  &nbsp;
                </Fragment>
              ))
            }
          </strong>
        </p>
      </div>

    </>

  );


}

export default FilmOverview;


