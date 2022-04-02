import NotFound from '../404-screen/404-screen';
import FilmOverview from '../fiim-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
type CurrentTabProps = { currentTab: number };

function ChoosenTab({ currentTab }: CurrentTabProps): JSX.Element {

  const settings = new Map();
  settings.set(1, <FilmOverview />);
  settings.set(2, < FilmDetails />);
  settings.set(3, < FilmReviews />);
  return settings.get(currentTab)||<NotFound />;


}
export default ChoosenTab;


