import {useEffect, useRef, useState} from 'react';
import { Film } from '../../types/film';
import { notPlayVideo, playVideo } from './video-player-functions';
type videoProps= {
  film: Film,
  src : string,
  isActive: boolean
}


function VideoPlayer(props: videoProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {film,src, isActive: playing} = props;
  const{videoLink, posterImage} = film;
  useEffect(() => {
    const videoRefCurrent = videoRef.current;
    let timerId = 0;
    if(videoRefCurrent === null){
      return;
    }
    videoRefCurrent.onloadeddata = () => setIsLoading(false);

    if(playing){
      timerId = window.setTimeout(() =>{
        playVideo(videoRefCurrent);},1000);


    }
    if(!playing){
      notPlayVideo(videoRefCurrent);
    }

    return () => {
      clearTimeout(timerId);
      if (videoRefCurrent !== null) {
        videoRefCurrent.onloadeddata = null;

      }
    };
  }, [src,playing,isLoading,videoRef]);


  return (


    <video src={(playing)?(videoLink):('')}    ref = {videoRef} className="player__video" poster={posterImage}></video>
  );
}

export default VideoPlayer;


