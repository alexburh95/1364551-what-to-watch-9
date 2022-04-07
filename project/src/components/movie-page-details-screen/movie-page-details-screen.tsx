
import { Link, useParams} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../consts';
import Tabs from '../tabs/tabs';
import LikeFilms from '../like-films/like-films';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect } from 'react';
import { fetchCurrentFilmAction, fetchMoreLikeFilmsAction, fetchReviewsAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';
import { useDispatch } from 'react-redux';
import { redirectToRoute } from '../../store/actions';
import { store } from '../../store';
import MyListButton from '../my-list-button/my-list-button';


function MovieDetails(): JSX.Element {

  const {id}= useParams();

  if(typeof id ==='undefined'){
    store.dispatch(redirectToRoute(AppRoute.Error));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentFilmAction(id as string));
    dispatch(fetchMoreLikeFilmsAction(id as string));
    dispatch(fetchReviewsAction(id as string));
  }, [dispatch, id]);

  const {currentFilm,likeFilms} = useAppSelector(({DATA}) => DATA);
  const film = currentFilm;
  const films = likeFilms;

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const currentAuthStatus = authorizationStatus;

  const {name,posterImage, genre, released, backgroundImage,backgroundColor, isFavorite } = film as Film;
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

                <Link to={AppRoute.Player} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>

                </Link>
                <MyListButton filmId={`${id}`} isFavorite={isFavorite} isPromo={false}/>

                {currentAuthStatus=== AuthorizationStatus.Auth ?
                  <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
                  : null}

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
        <LikeFilms films={films.filter((el) => el.name !== name)} />

        <Footer />
      </div>
    </>
  );
}

export default MovieDetails;
