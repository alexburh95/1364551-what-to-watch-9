import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviewAction } from '../../store/api-actions';
import { sendReview } from '../../store/film-data/film-data';
import { Film } from '../../types/film';
import NotFound from '../404-screen/404-screen';
import Logo from '../logo/logo';
import NoAuthUser from '../no-auth-header/no-auth-header';

function AddReview(): JSX.Element {
  const { sendingReview, currentFilm} = useAppSelector(({DATA}) => DATA);

  const film = currentFilm;
  const dispatch = useAppDispatch();
  const startRating = 0;
  const commentValue =' ';
  const[rating, setRaiting] = useState(startRating);
  const [comment, setComment] =useState(commentValue);

  const {id}= useParams();

  if(typeof id ==='undefined'){
    return <NotFound />;
  }
  const handleinputChange :React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const valueInputElement = Number(evt.target.value);
    setRaiting(valueInputElement);
  };

  const handleTextArea: React.ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const valueTextArea = evt.target.value;
    setComment(valueTextArea);


  };


  const handleFormSubmit:React.FormEventHandler<HTMLFormElement> = (evt) => {

    evt.preventDefault();
    dispatch(sendReview(true));
    dispatch(
      fetchReviewAction({
        rating: rating,
        comment: comment,
        filmId: id as string,
      }),
    );
  };


  const {name,posterImage, backgroundImage, backgroundColor} = film as Film;
  return (

    <section className="film-card film-card--full"  style={{

      backgroundColor: `${backgroundColor}`,


    }}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />


          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>
          <NoAuthUser />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={handleFormSubmit} action="#" className="add-review__form">
          <div className="rating">
            <div onChange ={handleinputChange} className="rating__stars">
              <input disabled={sendingReview} className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input disabled={sendingReview} className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input disabled={sendingReview} className="rating__input" id="star-8" type="radio" name="rating" value="8"  />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input disabled={sendingReview} className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input disabled={sendingReview} className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input disabled={sendingReview} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input disabled={sendingReview} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input disabled={sendingReview} className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input disabled={sendingReview} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input disabled={sendingReview} className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea disabled={sendingReview} onChange={handleTextArea} className="add-review__textarea" value={comment} name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button disabled={comment.length < 50 || comment.length > 400 || !rating || sendingReview}  className="add-review__btn" type="submit">Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>


  );
}

export default AddReview;

