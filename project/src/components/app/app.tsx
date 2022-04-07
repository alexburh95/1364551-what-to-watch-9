import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in-screnn/sign-in-screen';
import {Route, Routes} from 'react-router-dom';
import MyList from '../my-list-screen/my-list-screen';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MovieDetails from '../movie-page-details-screen/movie-page-details-screen';
import AddReview from '../add-review/add-review';
import NotFound from '../404-screen/404-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import Player from '../player-screen/player-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {isDataLoaded} = useAppSelector(({DATA}) => DATA);
  if (authorizationStatus === AuthorizationStatus.Unknown || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen  />}
        />
        <Route
          path = {AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path = {AppRoute.MyList}

          element={
            <PrivateRoute
              authorizationStatus={ authorizationStatus }
            >
              <MyList  />
            </PrivateRoute>
          }

        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path = {AppRoute.Film}
          element = {<MovieDetails  />}
        />
        <Route
          path = {AppRoute.ReviewForm  }
          element={
            <PrivateRoute
              authorizationStatus={ authorizationStatus }
            >
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
