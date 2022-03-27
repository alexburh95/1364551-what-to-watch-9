
type genre = {
  prop: string;
}
function GenereTab(prop: genre): JSX.Element {
  return (

    <li className="catalog__genres-item catalog__genres-item">
      <a href="/" className="catalog__genres-link">{prop}</a>
    </li>

  );
}

export default GenereTab;
