
import { useParams } from 'react-router-dom';
import { DECIMAL } from '../../consts';
import { films } from '../../mocks/film';
import NotFound from '../404-screen/404-screen';

function VideoPlayer(): JSX.Element {
  const{id:qsId}= useParams();
  if(typeof qsId=== 'undefined'){
    return <NotFound />;
  }
  const id = Number.parseInt(qsId,DECIMAL);
  if(!Number.isInteger(id)){
    return <NotFound />;
  }
  const film = films.find((element)=>element.id === id);
  if(typeof film ==='undefined'){
    return <NotFound />;
  }

  const {video, cover} =film;
  return (


    <video src={video} className="player__video" poster={cover}></video>
  );
}

export default VideoPlayer;
