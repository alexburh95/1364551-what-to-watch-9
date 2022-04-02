
import React from 'react';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import GeneresList from '../generes-list/generes-list';
import { chooseGenre } from '../generes-list/genres-list-functions';
import Header from '../header/header';
import ShowMore from '../show-more/show-more';


function MainScreen():JSX.Element {


  const currentGenre = useAppSelector((state)=> state.genre);
  const films = useAppSelector((state) => state.films);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const currentFilms = chooseGenre(currentGenre,films);
  const maxFilmsOnPage = useAppSelector((state) => state.maxFilms);
  const {name, genre, backgroundImage, released, posterImage} = promoFilm as Film;
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src= {posterImage}  alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GeneresList films={films} />


          <FilmList films={currentFilms.length > maxFilmsOnPage ?
            currentFilms.slice(0, maxFilmsOnPage)
            : currentFilms}
          />

          {currentFilms.length > maxFilmsOnPage ? <ShowMore/> : null}
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
