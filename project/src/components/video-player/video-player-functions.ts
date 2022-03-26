export  const playVideo = (video: { muted: boolean; play: () => void; } | null)=>{
  if(video !== null){
    video.muted = true;
    video.play();
  }
};
export const notPlayVideo =(element: { pause: () => void; src: string; })=>{
  element.pause();
  element.src ='';
};
