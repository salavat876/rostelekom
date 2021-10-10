import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import NavBar from "./components/Navbar";
import {Route} from "react-router-dom";
import ModalVolunteer from "./components/ModalVolunteer/ModalVolunteer";
import CovidPage from "./components/CovidPage/CovidPage";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";

function App() {
  return (
     <>
         <NavBar/>
         <main style={{marginTop:'7em'}}>
             <Route exact path='/news' component={Main} />
             <Route exact path='/volunteer' component={ModalVolunteer}/>
             <Route exact path='/covid-19' component={CovidPage}/>
             <Route exact path='/feedback' component={Feedback}/>
             <Route exact path='/' component={Dashboard}/>
         </main>
         <Footer />
        
     </>
  );
}
export default App;
