import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import Header from "./component/Header/header";
import Nav from "./component/Nav/nav";
import ProfileContainer from "./component/Profile/ProfileContainer";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import Friends from "./component/Friends/Friends";
import UserContainer from "./component/User/UserContainer";

function App(props) {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/users' element={<UserContainer />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
