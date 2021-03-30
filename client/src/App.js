import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profiles from './components/Profiles/Profiles';
const App = ({postsData, dialogsData}) => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Route path='/profiles' render={() => <Profiles postsData={postsData}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogsData={dialogsData}/>}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
