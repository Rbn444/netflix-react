import './App.css';
import CustomNav from './components/CustomNav';
import MovieList from './components/MovieList';
import MyFooter from './components/MyFooter';
import MySelector from './components/MySelector';

function App() {
  return (
    <div className='App'>
     
      <CustomNav/>
      <MySelector/>
      <MovieList url="http://www.omdbapi.com/?apikey=29b798b8&s=Guardians%20of%20the%20Galaxy" title='Guardians of the galaxy'selector={'one'}/>
      <MovieList url="http://www.omdbapi.com/?apikey=29b798b8&s=star%20wars" title='Star Wars'selector={'two'}/>
      <MovieList url="http://www.omdbapi.com/?apikey=29b798b8&s=harry%20potter" title='Harry Potter'selector={'three'}/>
      <MyFooter/>
    </div>
  );
}

export default App;
