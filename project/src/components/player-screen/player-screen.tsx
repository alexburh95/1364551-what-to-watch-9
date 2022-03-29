import { useParams } from 'react-router-dom';
import { DECIMAL } from '../../consts';
import { films } from '../../mocks/film';

import NotFound from '../404-screen/404-screen';

function Player(): JSX.Element {
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

  const {videoLink, posterImage} =film;
  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={posterImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
