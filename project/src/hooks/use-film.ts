import { useParams } from 'react-router-dom';
import { DECIMAL } from '../consts';
import { films } from '../mocks/film';

export const useFilm =()=>{
  const{id:qsId}= useParams();
  if(typeof qsId=== 'undefined'){
    return undefined;
  }
  const id = Number.parseInt(qsId,DECIMAL);
  if(!Number.isInteger(id)){
    return undefined;
  }
  return films.find((element)=>element.id === id);

};
