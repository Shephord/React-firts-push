import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./component/Dialogs/Dialogs";
import Header from "./component/Header/header";
import Nav from "./component/Nav/nav";
import Profile from "./component/Profile/Profile";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import Friends from "./component/Friends/Friends";

function App(props) {

  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Nav
          friends={props.state.Sidebar.Friends}
          item={props.state.Sidebar.Item}
        />
        <Routes>
          <Route
            path='/dialogs/*'
            element={
              <Dialogs
                dialogs={props.state.DialogsPage}
                Icon={props.state.Icon}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <Profile
                profile={props.state.ProfilePage}
                dispatch={props.dispatch}
                Icon={props.state.Icon}
              />
            }
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
