import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profiles from './components/Profiles/Profiles';
const App = ({state, addPost, updateNewPostText}) => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Route path='/profiles' render={() => <Profiles 
                    profilePage={state.profilePage}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                  />}/>
            <Route path='/dialogs' render={() => <Dialogs dialogsData={state.dialogsData}/>}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
