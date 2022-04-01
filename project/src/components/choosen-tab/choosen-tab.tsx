import NotFound from '../404-screen/404-screen';
import FilmOverview from '../fiim-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';


export  const choosenTabRender=(currentTab: number): JSX.Element=> {


  switch (currentTab) {
    case 1:
      return (<FilmOverview />);
      break;
    case 2:
      return (<FilmDetails />);
      break;
    case 3:
      return (<FilmReviews />);
      break;
    default: return <NotFound />;


  }

};


