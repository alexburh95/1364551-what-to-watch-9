
type genre = {
  genre: string;
}
function GenereTab(genre: genre): JSX.Element {
  return (

    <li className="catalog__genres-item catalog__genres-item">
      <a href="/" className="catalog__genres-link">{genre}</a>
    </li>

  );
}

export default GenereTab;
