import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in-screnn/sign-in-screen';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MyList from '../my-list-screen/my-list-screen';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MovieDetails from '../movie-page-details-screen/movie-page-details-screen';
import AddReview from '../add-review/add-review';

import NotFound from '../404-screen/404-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import Player from '../player-screen/player-screen';
import { isCheckedAuth } from '../../film';

function App(): JSX.Element {
  const { isDataLoaded, authorizationStatus} = useAppSelector((state) => state);
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <BrowserRouter>
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
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList  />
            </PrivateRoute>
          }

        />
        <Route
          path={AppRoute.Player(':id')}
          element={<Player />}
        />
        <Route
          path = {AppRoute.Film(':id')}
          element = {<MovieDetails  />}
        />
        <Route
          path = {AppRoute.AddReview(':id') }
          element = {<AddReview />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
