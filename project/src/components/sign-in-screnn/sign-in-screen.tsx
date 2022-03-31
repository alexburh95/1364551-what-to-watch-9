import { FormEvent, useRef } from 'react';
import { AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import Logo from '../logo/logo';
import MainScreen from '../main-screen/main-screen';

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const currentAuthStatus = useAppSelector((state)=> state.authorizationStatus);
  if(currentAuthStatus === AuthorizationStatus.Auth ){
    return(
      <MainScreen />
    );
  }


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const passwordValidity = ()=>{
    const REGULAR = /(?=.*[0-9])(?=.*[a-z])/g;
    if (loginRef.current !== null && passwordRef.current !== null){
      const shield =passwordRef.current;
      const password = passwordRef.current.value;
      shield.setCustomValidity('');

      if(password.length < 2){
        shield.setCustomValidity(
          'Необходимо минимум 2 символа',
        );

      } else if(!REGULAR.test(password)){
        shield.setCustomValidity(
          'Ошибка заполнения. Необходима минимум 1 латинская буква и 1 цифра',
        );

      }

      else{
        shield.setCustomValidity('');
      }
      shield.reportValidity();
    }

  };
  return (


    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form"  onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input"
                type="text"
                placeholder="Email address"
                name="name"
                id="name"
                ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input onChange= {() => {
                passwordValidity();
              } } className="sign-in__input"
              type="text"
              placeholder="Password"
              name="password"
              id="password"
              ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;
