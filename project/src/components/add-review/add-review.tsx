import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppRoute, DECIMAL } from '../../consts';
import { useAppSelector } from '../../hooks';
import NotFound from '../404-screen/404-screen';
import Logo from '../logo/logo';

function AddReview(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const startRating = 0;
  const commentValue =' ';

  const[,setRaiting] = useState(startRating);
  const [comment, setComment] =useState(commentValue);


  const raitingStarsChangeHandler :React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const valueTargetElement = Number(evt.target.value);
    setRaiting(valueTargetElement);
  };

  const textAreaChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const valueTextArea = evt.target.value;
    setComment(valueTextArea);
  };


  const formSubmitHandler:React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
  };

  const{id:qsId}= useParams();
  if(typeof qsId=== 'undefined'){
    return <NotFound />;
  }
  const id = Number.parseInt(qsId,DECIMAL);
  if(!Number.isInteger(id)){
    return <NotFound />;
  }
  const film = films.find((element)=>element.id === id);
  if(typeof film ==='undefined'){
    return <NotFound />;
  }
  const {name,posterImage} = film;
  return (

    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />


          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film(id)} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={formSubmitHandler} action="#" className="add-review__form">
          <div className="rating">
            <div onChange ={raitingStarsChangeHandler} className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8"  />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea onChange={textAreaChangeHandler} className="add-review__textarea" value={comment} name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>


  );
}

export default AddReview;

