import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./component/Dialogs/Dialogs";
import Header from "./component/Header/header";
import Nav from "./component/Nav/nav";
import Profile from "./component/Profile/Profile";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";

function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <Routes>
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
