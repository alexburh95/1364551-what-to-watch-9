import { useAppDispatch } from '../../hooks';
import { addFilms } from '../../store/actions';

function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  return(

    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => {
          dispatch(addFilms());
        }}
      >Show more

      </button>

    </div>
  );
}
export default ShowMore;
