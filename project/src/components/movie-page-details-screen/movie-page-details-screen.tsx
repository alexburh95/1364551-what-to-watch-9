
import { Link, useParams} from 'react-router-dom';
import { AppRoute} from '../../consts';
import NotFound from '../404-screen/404-screen';
import Tabs from '../tabs/tabs';
import LikeFilms from '../like-films/like-films';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect } from 'react';
import { fetchCurrentFilmAction } from '../../store/api-actions';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';

function MovieDetails(): JSX.Element {
  const params = useParams();
  useEffect(() => {
    store.dispatch(fetchCurrentFilmAction(params.id as string));

  }, [params.id]);
  const film = useAppSelector((state) => state.currentFilm);
  if(typeof film === 'undefined'){
    return <NotFound />;
  }

  const {name,posterImage, genre, released, id, backgroundImage,backgroundColor } = film as Film;
  return (
    <>
      <section className="film-card film-card--full"  style={{

        backgroundColor: `${backgroundColor}`,


      }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">

                <Link to={AppRoute.Player(id)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>

                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={AppRoute.AddReview(id)} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">


              <Tabs />


            </div>
          </div>

        </div>
      </section>
      <div className="page-content">
        <LikeFilms film={film as Film} />

        <Footer />
      </div>
    </>
  );
}

export default MovieDetails;
