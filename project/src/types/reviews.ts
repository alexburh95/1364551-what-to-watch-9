export type User = {
  id: number;
  name: string;
};

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type Reviews = Review[];

export type UserReview ={
  filmId : string,
  comment: string
  rating: number

}
