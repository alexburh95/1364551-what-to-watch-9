import { Film } from '../../types/film';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useAppDispatch } from '../../hooks';
import { resetMaxFilms } from '../../store/film-process/film-process';


type FilmProps = {
  film: Film,
  isActive: boolean,
  onActivate:()=>void,
  onDeactivate:()=>void,
}
function FilmCard(props: FilmProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {film,onDeactivate,onActivate,isActive} = props;
  const {name,videoLink, id} = film;


  return (

    <article onMouseEnter ={onActivate} onMouseLeave ={onDeactivate} className={'small-film-card catalog__films-card'}>


      <div className="small-film-card__image">
        <VideoPlayer isActive = {isActive} film = {film} src ={videoLink} />
      </div>
      <h3   onClick={() => {

        dispatch(resetMaxFilms());
      }} className="small-film-card__title"
      >
        <Link className="small-film-card__link"    to={`/films/${id}`} >{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
