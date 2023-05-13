import "./App.css";
import Header from "./component/header";
import Nav from "./component/nav";
import Profile from "./component/Profile";


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
