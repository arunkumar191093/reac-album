import './App.css';
import AlbumList from './Components/AlbumList/AlbumList';
import AlbumDetails from './Components/AlbumDetails/AlbumDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AlbumList />
          </Route>
          <Route path="/:id" children={<AlbumDetails />}></Route>
        </Switch>
      </Router>
      {/* <AlbumList /> */}
    </div>
  );
}

export default App;
