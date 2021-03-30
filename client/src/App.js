import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profiles from './components/Profiles/Profiles';
const App = () => {
  const postsData = [
    {id: 1, message: 'Hy, how are you?', likesCount: 1},
    {id: 2, message: 'It is my first post', likesCount: 5}
  ];

  const dialogsData = [
    {
        id: 1,
        name: 'Astghik',
        message: 'Hi'
    },
    {
        id: 2,
        name: 'Davit',
        message: 'How are you?'
    },
    {
        id: 3,
        name: 'Yerem',
        message: 'Yo'
    },
    {
        id: 4,
        name: 'Poghos',
        message: 'Bo'
    }
  ];
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
