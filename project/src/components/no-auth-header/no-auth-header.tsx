
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';


function NoAuthUser(): JSX.Element {
  const dispatch = useAppDispatch();


  const currentAuthStatus = useAppSelector((state)=> state.authorizationStatus);
  if(currentAuthStatus !== AuthorizationStatus.Auth ){

    return(
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>
    );

  }
  return (

    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          onClick={() => {
            dispatch(logoutAction());
          } }
          className="user-block__link" to={''}
        >Sign out
        </Link>
      </li>
    </ul>

  );
}

export default NoAuthUser;

