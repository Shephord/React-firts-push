import "./App.css";
import Header from "./component/Header/header";
import Nav from "./component/Nav/nav";
import Profile from "./component/Profile/Profile";


function App() {
  return (
    <div className='app-wrapper'>
      {/* HEADER */}
      <Header />
      {/* Nav */}
      <Nav />
      {/* Profile CONTENT */}
      <Profile />
    </div>
  );
}

export default App;
