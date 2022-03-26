import { FilmCards } from '../../types/film';
type GenresProps ={
  films: FilmCards
}

function GeneresList(props: GenresProps): JSX.Element {
  const {films} = props;
  const createGeneres = (array: FilmCards) => {
    const mySet = new Set<string>();
    mySet.add('All generes');
    array.forEach((element) => {
      const {genre} = element;
      mySet.add(genre);


    });

    const genresList = [...mySet];
    return genresList;


  };

  const allGeneres = createGeneres(films);


  return (
    <ul className="catalog__genres-list">
      {allGeneres.map((genre)=>(


        <li key={genre} className="catalog__genres-item catalog__genres-item">
          <a href="/" className="catalog__genres-link">{genre}</a>
        </li>


      ))}
    </ul>
  );
}

export default GeneresList;
