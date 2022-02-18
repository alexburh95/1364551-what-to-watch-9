import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  title: string,
  relizeYear: number,
  genre: string,
}
function App({title, relizeYear, genre}: AppScreenProps): JSX.Element {
  return <MainScreen title = {title} genre = {genre} relizeYear = {relizeYear}/>;
}

export default App;
