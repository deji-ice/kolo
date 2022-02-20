import './App.css';
import Footer from './Components/Footer';
import KoloBudgets from './Components/KoloBudgets';
import NavBar from './Components/NavBar';
import Partners from './Components/Partners';
import PhoneBG from './Components/PhoneBG';
import UserStories from './Components/UserStories';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <PhoneBG/>
     <KoloBudgets/>
     <UserStories/>
     <Partners/>
     <Footer/>
    </div>
  );
}

export default App;
