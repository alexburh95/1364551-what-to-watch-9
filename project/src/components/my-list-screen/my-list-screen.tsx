
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import NoAuthUser from '../no-auth-header/no-auth-header';

function MyList(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFavoriteFilmsAction());
  }, []);
  const {favoriteFilms: films} = useAppSelector(({DATA}) => DATA);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <NoAuthUser />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>


        <FilmList films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
