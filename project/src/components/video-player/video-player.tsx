
import { Film } from '../../types/film';
type videoProps= {
  film: Film
}
function VideoPlayer(props: videoProps): JSX.Element {

  const {film} = props;
  const{video, picture} = film;

  return (


    <video src={video}  className="player__video" poster={picture}></video>
  );
}

export default VideoPlayer;


