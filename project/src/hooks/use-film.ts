import { useParams } from 'react-router-dom';
import { useAppSelector } from '.';
import { DECIMAL } from '../consts';


export const useFilm =()=>{

  const {films}= useAppSelector(({DATA}) => DATA);

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
