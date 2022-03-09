import { Film } from '../../types/film';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../consts';
type FilmProps = {
  film: Film
}
function FilmCard(props: FilmProps): JSX.Element {

  // eslint-disable-next-line prefer-const
  const [, setCount] = useState(0);
  const {film} = props;
  const {title,picture, id} = film;


  return (

    <article onMouseEnter ={()=>{setCount(id);


    } } className="small-film-card catalog__films-card"
    >


      <div className="small-film-card__image">
        <img src={picture} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link"    to={`${AppRoute.Film}${id}`} >{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
