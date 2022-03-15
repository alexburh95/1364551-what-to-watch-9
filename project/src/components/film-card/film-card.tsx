import { Film } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import VideoPlayer from '../video-player/video-player';

type FilmProps = {
  film: Film,
  isActive: boolean,
  onActivate:()=>void,
  onDeactivate:()=>void,
}
function FilmCard(props: FilmProps): JSX.Element {


  const {film,onDeactivate,onActivate,isActive} = props;
  const {title, id,video} = film;


  return (

    <article onMouseEnter ={onActivate} onMouseLeave ={onDeactivate} className={`small-film-card catalog__films-card ${isActive}`}>


      <div className="small-film-card__image">
        <VideoPlayer isActive = {isActive} film = {film} src ={video} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link"    to={AppRoute.Film(id)} >{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
