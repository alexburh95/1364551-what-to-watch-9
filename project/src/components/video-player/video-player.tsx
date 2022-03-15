import {useEffect, useRef, useState} from 'react';
import { Film } from '../../types/film';
type videoProps= {
  film: Film,
  src : string,
  isActive: boolean
}


function VideoPlayer(props: videoProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {film,src, isActive: playing} = props;
  const{video, picture} = film;
  useEffect(() => {
    const videoRefCurrent = videoRef.current;
    let timerId = 0;
    if(videoRefCurrent === null){
      // eslint-disable-next-line no-console
      console.log('Что-то не так!!!');
      return;
    }
    videoRefCurrent.onloadeddata = () => setIsLoading(false);

    if(playing){
      // eslint-disable-next-line no-console
      console.log('Запускаем видео');
      timerId = window.setTimeout(() =>{
        if(videoRefCurrent !== null){
          videoRefCurrent.muted = true;
          videoRefCurrent.play();
        }},1000);


    }
    if(!playing){
      // eslint-disable-next-line no-console
      console.log('Отключаем видео');
      videoRefCurrent.pause();
      videoRefCurrent.src ='';
    }

    return () => {
      clearTimeout(timerId);
      if (videoRefCurrent !== null) {
        videoRefCurrent.onloadeddata = null;

      }
    };
  }, [src,playing,isLoading,videoRef]);


  return (


    <video src={(playing)?(video):('')}    ref = {videoRef} className="player__video" poster={picture}></video>
  );
}

export default VideoPlayer;


