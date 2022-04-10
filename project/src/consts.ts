import dayjs from 'dayjs';


export const enum AppRoute  {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films/:id',
  ReviewForm = '/films/:id/review',
  Player = '/player/:id',
  Error = '*',

}

export const AppRoutePlayer = {
  Player: (id: number | ':id' = ':id') => `/player/${id}`,
};


export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DECIMAL = 10;


export const DEFAULT_GENRE = 'All genres';


export const enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Reviews = '/comments',
  Favorite = '/favorite',


}
export const enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
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
  MaxPerStep = 8,
  Initial = 8
}


export  function formatDate (value: string) {
  return dayjs(value).format('MMMM DD, YYYY');
}

export const enum NameSpace {
  Film = 'FILM',
  Data = 'DATA',
  User = 'USER',
}

