export const  AppRoute = {
  Main : '/',
  SignIn : '/login',
  MyList  : '/mylist',
  Film :  (id:number|':id')=>`/films/${id}`,
  AddReview : (id:number|':id')=>`/films/${id}/review`,
  Player : (id:number|':id')=> `/player/${id}`,
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DECIMAL = 10;


export const DEFAULT_GENRE = 'All genres';


export enum APIRoute {
 Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',

}
export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const TABS=[{
  id: 1,
  name : 'Overview',

},{


  id: 2,
  name: 'Details'},{
  id: 3, name:'Reviews',
} ];


export enum FilmsOnPage {
  MaxPerStep = '8',
  Initial = '8'
}
