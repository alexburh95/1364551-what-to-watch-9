export  const playVideo = (element: { muted: boolean; play: () => void; } | null)=>{
  if(element !== null){
    element.muted = true;
    element.play();
  }
};
export const notPlayVideo =(element: { pause: () => void; src: string; })=>{
  element.pause();
  element.src ='';
};
