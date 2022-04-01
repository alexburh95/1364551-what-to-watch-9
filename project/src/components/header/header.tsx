import Logo from '../logo/logo';
import NoAuthUser from '../no-auth-header/no-auth-header';

function Header(): JSX.Element {
  return(
    <header className="page-header film-card__head">

      <Logo />
      <NoAuthUser />
    </header>
  );
}
export default Header;
